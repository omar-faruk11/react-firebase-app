import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';

function App() {
  return (
    <>
     <Routes>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/login' element={<LogIn></LogIn>}></Route>
     </Routes>
    </>
  );
}

export default App;
