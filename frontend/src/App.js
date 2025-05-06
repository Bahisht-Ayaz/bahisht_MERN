import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
=======
import "bootstrap-icons/font/bootstrap-icons.css"
>>>>>>> 1994a3e3d71cd9360fab4463afe932a835c89614
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Register from './Components/Register';
import ShowData from './Components/ShowData';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/s' element={<ShowData/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
