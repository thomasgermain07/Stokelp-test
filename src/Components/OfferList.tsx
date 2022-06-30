import { Box } from "@mui/material";
import data from "../data.json";
import OfferPreview from "./OfferPreview";

export default function OfferList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {data.map((offer) => {
        return (
          <OfferPreview
            picture_url={offer.pictures_urls[0]}
            name={offer.name}
            origin={offer.region}
          />
        );
      })}
    </Box>
  );
}
