import "./App.scss";
import Header from "./components/header/header.component";
import InputText from "./components/input/inputtext.component";
import Button from "./components/button/button.component";
import TodoItem from './components/item/todoItem.component'

function App() {
  const items = [{
    id:1,
    description:"sdfsdfsdfsdfsdfsdfsdf",
    isDone : false,
  },
  {
    id:2,
    description:"sdfsdfsdfsdfsdfsdfsdf",
    isDone : true,
  }];
  return (
    <div className="App">
      <div className="todo-container">
        <Header />
        <div>
          <InputText />
          <Button customValue="add" />        
          <div>
            {items.map((item)=><TodoItem key={item.id} item={item} />)}
          </div>                   
        </div>
      </div>
    </div>
  );
}

export default App;
