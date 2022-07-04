import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { categories } from "../Utils/categories";
import { useFilter } from "./FilterContext";

export default function FilterBar() {
  const { priceRange, setPriceRange, selectedKey, setSelectedKey } =
    useFilter();

  const handleOnClick = (e: any, value: string) => {
    setSelectedKey(value === selectedKey ? "all" : value);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <Box sx={{ minWidth: "300px" }}>
      <List dense>
        {Object.keys(categories).map((key) => (
          <ListItemButton
            onClick={(e) => handleOnClick(e, key)}
            key={key}
            selected={selectedKey === key}
          >
            <ListItemText primary={categories[key]} />
          </ListItemButton>
        ))}
      </List>
      <Stack
        spacing={2}
        direction="row"
        sx={{ margin: "0 40px" }}
        alignItems="center"
      >
        <Typography>{priceRange[0]}€</Typography>
        <Slider
          value={priceRange}
          max={50}
          onChange={handleChange}
          disableSwap
        />
        <Typography>{priceRange[1]}€</Typography>
      </Stack>
    </Box>
  );
}
