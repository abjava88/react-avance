// App.jsx

import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CounterComponent from "./CounterComponent";

const App = () => {
  return (
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;
