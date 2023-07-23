import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Loginpage from './Loginpage';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Dashboard';
import Register from './Register';
import Customer from './Customer';
import Protected from './PrivateRoute';

function App() {
  return (
    <div className="App">
    <ToastContainer theme='colored' position='top-center'></ToastContainer>

    <BrowserRouter>
      <Routes>
           <Route path='/' element={<Loginpage/>}></Route> 
           <Route path='/register' element={<Register/>}></Route>
            <Route path="/" element={<Protected />}>
                <Route path="/home" element={<Dashboard />} />
                <Route path='/customer' element={<Customer/>}></Route>
           </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
