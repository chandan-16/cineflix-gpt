import Body from './components/Body';
import { Provider } from "react-redux";
import appStore from './utils/appStore';
import './App.css';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
