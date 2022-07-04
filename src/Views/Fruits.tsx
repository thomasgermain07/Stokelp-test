import { Box } from "@mui/material";
import CategoriesWrapper from "../Components/CategoriesWrapper";
import FilterBar from "../Components/FilterBar";
import { FilterProvider } from "../Components/FilterContext";
import NavigationWrapper from "../Components/NavigationWrapper";
import OfferList from "../Components/OfferList";

export default function Fruits() {
  return (
    <NavigationWrapper>
      <CategoriesWrapper>
        <FilterProvider>
          <Box display="flex" justifyContent="center" paddingTop="20px">
            <Box
              display="flex"
              flexDirection="row"
              gap="0 30px"
              maxWidth="1200px"
            >
              <FilterBar />
              <Box minWidth="900px">
                <OfferList />
              </Box>
            </Box>
          </Box>
        </FilterProvider>
      </CategoriesWrapper>
    </NavigationWrapper>
  );
}
