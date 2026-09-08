import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './layout/footer/Footer'
import Header from './layout/header/Header'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Admin from './pages/admin/Admin'
import AdminUsers from './pages/admin/users/AdminUsers'
import AdminProducts from './pages/admin/products/AdminProducts'

function App() {

  return (<>

    <Header />

    <main>
      <Routes>

        <Route path="" element={<Home />} />

        <Route path="register" element={<Register />} />

        <Route path="contact" element={<h1>PAGE CONTACTO</h1>} />

        <Route path="admin" element={<Admin />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        <Route path="*" element={<h1>404 NOT FOUND </h1>} />

      </Routes>
    </main>

    <Footer />



  </>)

}

export default App
