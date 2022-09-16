import './App.css';
import {Route, Routes} from 'react-router-dom';
import PageLinks from './PageLinks';
import ParentComponent from './Props/ParentComponent';
import UseState from './Use-State/UseState';
import UseEffect from './Use-Effect/UseEffect';
import UseContext from './Use-Context/UseContext';
import UseReducer from './Use-Reducer/UseReducer';
import UseRefHook from './Use-Ref/UseRefHook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLinks/>} />
      <Route path='/parentComponent' element={<ParentComponent/>} />
      <Route path='/useState' element={<UseState/>} />
      <Route path='/useEffect' element={<UseEffect />} />
      <Route path='/useContext' element={<UseContext/>} />
      <Route path='/useReducer' element={<UseReducer/>} />
      <Route path='/useRef' element={<UseRefHook/>} />
    </Routes>
  );
}

export default App;
