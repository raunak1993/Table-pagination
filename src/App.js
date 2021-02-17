import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";

import Table from './components/Table';
import Paginator from './components/Paginator';

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Table />
        <Paginator />
      </div>
    </Provider>
  );
}

export default App;
