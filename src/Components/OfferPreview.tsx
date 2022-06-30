import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface IOfferPreviewProps {
  picture_url: string;
  name: string;
  origin: string;
  price: number;
  unit: string;
}

export default function OfferPreview({
  picture_url,
  name,
  origin,
  price,
  unit,
}: IOfferPreviewProps) {
  return (
    <Card sx={{ width: "250px" }} elevation={0}>
      <CardMedia component="img" height="220" alt={name} src={picture_url} />
      <CardContent sx={{ alignContent: "left" }}>
        <Typography>{name}</Typography>
        <Typography>{origin}</Typography>
        <Typography>
          {price}/{unit}
        </Typography>
      </CardContent>
    </Card>
  );
}
