import React from "react";
import { darkTheme } from "utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { routes, AppRoute } from "pages/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserProvider } from "context";

const App: React.FunctionComponent = () => {
  const queryClient = new QueryClient();
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={darkTheme}>
          <Router>
            <Routes>
              {routes.map((route: AppRoute) => (
                <Route
                  key={route.name}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Router>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserProvider>
  );
};

export default App;
