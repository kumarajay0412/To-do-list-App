import './App.css';
import Header from './components/Header';
import Addtodo from './components/Addtodo';
import Todos from './components/Todos';
import {Provider} from './context';

function App() {
  return (

    <div className ="app-container">
      <Provider>
        <Header></Header>
        <Addtodo></Addtodo>
        <Todos></Todos>
      </Provider>
    </div>

  );
}

export default App;
