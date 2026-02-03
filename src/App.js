import { Provider } from "react-redux";
import Body from "./components/Body";
import ErrorBoundary from "./components/ErrorBoundary";
import appStore from "utils/appStore";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={appStore}>
        <Body />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
