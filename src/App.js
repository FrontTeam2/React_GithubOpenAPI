import { RouterProvider } from "react-router-dom";
import router from "./Routes/routing";
import { Global, ThemeProvider } from "@emotion/react";
import theme from "./Styles/theme";
import globalStyles from "./Styles/global";
import store from "./Store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
