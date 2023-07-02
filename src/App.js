import * as React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomRouter } from "./router";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import store from "./store";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#490349",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#FF00F7",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <CustomRouter />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
