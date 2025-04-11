// App.js
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/Login';
import Equipments from './Pages/Equipments';
import Electronics from './Pages/Electronics';
import ProtectedRoute from './Pages/ProtectedRoute';
import { useLocation } from 'react-router-dom';

function App() {
  const token = localStorage.getItem('token');
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && token && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginSignup />} />

        <Route path="/Equipments" element={<ProtectedRoute><Equipments /></ProtectedRoute>} />
        <Route path="/Electronics" element={<ProtectedRoute><Electronics /></ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute><Shop /></ProtectedRoute>} />
        <Route path="/product/:productId" element={<ProtectedRoute><Product /></ProtectedRoute>} />
        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
