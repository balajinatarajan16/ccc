import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './component/register';
import Signin from './component/signin';
import Course from './component/cours';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Signup/>}/>
      

      

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
