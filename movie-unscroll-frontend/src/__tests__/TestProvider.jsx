import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function TestProvider({ store, children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}

export default TestProvider;
