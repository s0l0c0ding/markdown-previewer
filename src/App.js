import { Provider } from 'react-redux';
import {store} from './redux/store';
import Preview from './components/Preview';
import './App.css';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <Preview />
    </div>
    </Provider>
  );
}

export default App;
