import { Box } from "@mui/material";
import { useFilter } from "./FilterContext";
import OfferPreview from "./OfferPreview";

export default function OfferList() {
  const { dataFiltered } = useFilter();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {dataFiltered.map((offer, i) => {
        return (
          <OfferPreview
            key={i}
            picture_url={offer.pictures_urls[0]}
            name={offer.name}
            origin={offer.region}
            price={offer.latest_price}
            unit={offer.unit}
          />
        );
      })}
    </Box>
  );
}
