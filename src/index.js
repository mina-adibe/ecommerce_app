import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./component/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { IntlProviderWrapper } from "./utility/context/Internationalization";

const store = configureStore;

ReactDOM.render(
  <ReduxProvider store={store}>
    <IntlProviderWrapper>
      <Router>
        <App />
      </Router>
    </IntlProviderWrapper>
  </ReduxProvider>,
  document.getElementById("root")
);
