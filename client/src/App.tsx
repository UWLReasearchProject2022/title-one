import React from "react";
import { darkTheme } from "utils/theme";
import { ThemeProvider } from "@mui/material/styles";
import { routes, AppRoute } from "pages/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FunctionComponent = () => {
  return (
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
  );
};

export default App;
