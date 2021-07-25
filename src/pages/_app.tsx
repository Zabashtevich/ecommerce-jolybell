import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import "normalize.css";

import { GlobalStyles } from "@src/theme/global-styles";
import theme from "../theme/index";

import { SignupModal, LoginModal, SidebarModal, InformationModal } from "../features";
import SignupContextProvider from "@src/contexts/signup-modal/context";
import LoginContextProvider from "../contexts/login-context/context";
import ModalContextProvider from "@src/contexts/modals-context/context";
import AppLayout from "../layout/index";
import { store } from "@src/redux";
import InformationContextProvider from "../contexts/information-context/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SignupContextProvider>
        <LoginContextProvider>
          <ModalContextProvider>
            <InformationContextProvider>
              <Provider store={store}>
                <AppLayout>
                  <Component {...pageProps} />
                  <SidebarModal />
                  <LoginModal />
                  <SignupModal />
                  <InformationModal />
                </AppLayout>
              </Provider>
            </InformationContextProvider>
          </ModalContextProvider>
        </LoginContextProvider>
      </SignupContextProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
