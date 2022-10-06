import './App.css';
import {Route, Router, Routes} from 'react-router-dom';
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
import ComponentLife from './Life-Cycle/ComponentLife';
import LifeCycleMethod from './Life-Cycle/LifeCycleMethod';
import ShouldComponentUpdate from './Life-Cycle/ShouldComponentUpdate';
import GetSnapshotBeforeUpdate from './Life-Cycle/GetSnapshotBeforeUpdate'
import ClickCounter from './Higher-Order-Component/ClickCounter';
import HigherOrder from './Higher-Order-Component/HigherOrder';
import Demo from './Demo/Demo';
import TraingleShape from './Demo/TraingleShape';
import ReduxApp from './React-Redux/ReduxApp';
// import CakeContainer from './React-Redux/CakeContainer';
// import Demo from './Props/Demo';
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
      <Route path='/componentLife' element={<ComponentLife/>} />
      <Route path='/lifeCycleMathod' element={<LifeCycleMethod/>} />
      <Route path='/shouldComponentUpdate' element={<ShouldComponentUpdate/>} />
      <Route path='/getSnapshotBeforeUpdate' element={<GetSnapshotBeforeUpdate />} />
      {/* <Route path='/higherOrderComponent' element={<ClickCounter/>} /> */}
      <Route path='/higherOrderComponent' element={<HigherOrder/>} />

      {/* <Route path='/demo' element={<Demo />} /> */}

      <Route path='/incrementValue' element={<Demo />} />
      <Route path='/traingleShape' element={<TraingleShape/>} />
      <Route path='/reduxApp' element={<ReduxApp/>}/>
    </Routes>
  );
}

export default App;
