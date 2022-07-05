import './App.css'
import Home from '../src/components/pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Users from '../src/components/pages/Users/Users';
import Sobre from '../src/components/pages/Sobre/Sobre';
import RegisterUser from '../src/components/pages/RegisterUser/RegisterUser';
import Management from '../src/components/pages/Management/Management';
import RegisterVehicle from '../src/components/pages/RegisterVehicle/RegisterVehicle';
import Vehicles from '../src/components/pages/Vehicles/Vehicles';
import EditUser from '../src/components/pages/EditUser/EditUser';
import EditVehicle from '../src/components/pages/EditVehicle/EditVehicle';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cadastrar-usuario' element={<RegisterUser/>}/>
          <Route path='/usuarios' element={<Users/>}/>
          <Route path='/editar-usuario/:id' element={<EditUser/>}/>
          <Route path='/cadastrar-veiculo/:id' element={<RegisterVehicle/>}/>
          <Route path='/veiculos' element={<Vehicles/>}/>
          <Route path='/editar-veiculo/:id' element={<EditVehicle/>}/>
          <Route path='/gerenciar' element={<Management/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App;
