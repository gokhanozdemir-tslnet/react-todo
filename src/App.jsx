import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <div>
          <InputText />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
