import "./App.css";
import FirstTask from "./components/FirstTask/FirstTask";
import SecondTask from "./components/SecondTask/SecondTask";

function App() {
  return (
    <div className="App">
      <FirstTask />
      <span>Раздел Компонентов</span>
      <SecondTask />
    </div>
  );
}

export default App;
