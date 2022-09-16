import './App.css';
import {Route, Routes} from 'react-router-dom';
import PageLinks from './PageLinks';
import ParentComponent from './Props/ParentComponent';
import UseState from './Use-State/UseState';
import UseEffect from './Use-Effect/UseEffect';
import UseContext from './Use-Context/UseContext';
import UseReducer from './Use-Reducer/UseReducer';
import UseRefHook from './Use-Ref/UseRefHook';
import UseCallBack from './Use-Call-Back/UseCallBack';
import UseMemo from './Use-Memo/UseMemo';
import UseForm from './Use-Form/UseForm';
import ClassComponent from './Class-Component/ClassComponent';
import FunctionComponent  from './Function-Component/FunctionComponent';
function App() {
  return (
    <Routes>
      <Route path='/functionComponent' element={<FunctionComponent/>} />
      <Route path='/' element={<PageLinks/>} />
      <Route path='/parentComponent' element={<ParentComponent/>} />
      <Route path='/useState' element={<UseState/>} />
      <Route path='/useEffect' element={<UseEffect />} />
      <Route path='/useContext' element={<UseContext/>} />
      <Route path='/useReducer' element={<UseReducer/>} />
      <Route path='/useRef' element={<UseRefHook/>} />
      <Route path='/useCallBack' element= {<UseCallBack />} />
      <Route path='/useMemo' element= {<UseMemo/>} />
      <Route path='/useForm' element= {<UseForm />} />

      <Route path='/classComponent' element={<ClassComponent/>} />
    </Routes>
  );
}

export default App;
