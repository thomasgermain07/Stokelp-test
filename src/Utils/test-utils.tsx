import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@mui/system";
import theme from "../Style/theme";
import { CssBaseline } from "@mui/material";

const queryClient = new QueryClient();

const AllTheProviders: FC<{ children: JSX.Element }> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

// Mock components with randomized ids
jest.mock("@mui/utils/useId", () => jest.fn().mockReturnValue("mui-test-id"));

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
