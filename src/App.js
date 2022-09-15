import './App.css';
import {Route, Routes} from 'react-router-dom';
import PageLinks from './PageLinks';
import ParentComponent from './Props/ParentComponent';
import UseState from './Use-State/UseState';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PageLinks/>} />
      <Route path='/parentComponent' element={<ParentComponent/>} />
      <Route path='/useState' element={<UseState/>} />
    </Routes>
  );
}

export default App;
