import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import { useState } from "react";
import { categories, categoriesValues } from "../Utils/categories";

export default function CategoriesWrapper({ children }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItemsKey, setMenuItemsKey] = useState<string>("");
  const open = Boolean(anchorEl);
  const menuItems = categoriesValues[menuItemsKey];

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setMenuItemsKey((event.target as any).value);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuItemsKey("");
  };

  const handleMenuItemClick = (value: string) => {
    // TODO : Apply filter
  };

  return (
    <div>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "center", gap: "0 20px" }}
        >
          {Object.keys(categories).map((key) => (
            <Button onClick={handleOpenMenu} value={key} key={key}>
              {categories[key]}
            </Button>
          ))}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
            elevation={0}
          >
            {menuItems &&
              Object.keys(menuItems).map((key) => (
                <MenuItem onClick={() => handleMenuItemClick(key)} key={key}>
                  {menuItems[key]}
                </MenuItem>
              ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="img"
        sx={{
          height: 250,
          width: "100%",
          objectFit: "cover",
        }}
        alt="category banner"
        src="https://images6.alphacoders.com/368/thumb-1920-368872.jpg"
      />
      <div>{children}</div>
    </div>
  );
}
