import data from "../data.json";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { categories } from "../Utils/categories";

interface IContextValue {
  priceRange: number[];
  selectedKey: string;
  setPriceRange: Dispatch<SetStateAction<number[]>>;
  setSelectedKey: Dispatch<SetStateAction<string>>;
  dataFiltered: typeof data;
}

const FilterContext = createContext({} as IContextValue);

const FilterProvider = (props: any) => {
  const [selectedKey, setSelectedKey] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50]);

  const dataFiltered = useMemo(() => {
    return data.filter(
      (v) =>
        (selectedKey === "all" ||
          v.product.type === categories[selectedKey].toLowerCase()) &&
        v.latest_price <= priceRange[1] &&
        v.latest_price >= priceRange[0]
    );
  }, [selectedKey, priceRange]);

  // Function accessible in the rest of the code
  const FilterContextValues: IContextValue = {
    priceRange,
    selectedKey,
    setPriceRange,
    setSelectedKey,
    dataFiltered,
  };

  return (
    <FilterContext.Provider value={FilterContextValues} {...props}>
      {props.children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
