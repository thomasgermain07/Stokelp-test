import {
  AppBar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function NavigationWrapper({ children }: any) {
  return (
    <div>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "center", gap: "0 20px" }}
        >
          <Box
            component="img"
            sx={{
              objectFit: "cover",
            }}
            height="40px"
            alt="category banner"
            src="stokelp_logo.jpg"
          />
          <TextField
            placeholder="Rechercher"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button>Accueil</Button>
          <Button>Nous contacter</Button>
          <Button>À Propos de nous</Button>
          <Button>Blog</Button>
          <Button>Connection</Button>
          <Button>Inscription</Button>
          <Button variant="outlined">Ajouter une annonce</Button>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
}
