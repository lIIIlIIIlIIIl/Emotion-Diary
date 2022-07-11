import { Route, Routes } from 'react-router-dom';
import './App.css';

import Diary from './pages/Dirary';
import Edit from './pages/Edit';
import Home from './pages/Home';
import New from './pages/New';


function App() {
  return (
    <div className="App">
      <h2>App.js</h2>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/diary' element={<Diary/>}/>
      </Routes>
    </div>
  );
}

export default App;
