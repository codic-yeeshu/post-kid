import Home from "./components/home";
import DataProvider from "./context/dataProvider";

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
