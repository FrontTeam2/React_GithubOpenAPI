import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import theme from "./Styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/global";
import store from "./Store/store";
import router from "./Routes/routing";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
