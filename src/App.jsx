import './App.scss'
import Header from './components/header/header.component';
import InputText from './components/input/inputtext.component';

function App() {
  return (
    <div className="App">
        <div className='todo-container'>
            <Header />
            <div>
                <InputText />
                <button>Add</button>
            </div>
        </div>      
    </div>
  );
}

export default App;
