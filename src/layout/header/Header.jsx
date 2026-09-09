import { NavLink } from "react-router"
import "./Header.css"

export default function Header() {

  const userAdmin = true;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="register" >Register</NavLink>
          </li>
          <li>
            <NavLink to="contact" >Contacto</NavLink>
          </li>

          {
            userAdmin && (
              <li>
                <NavLink to="admin" >Admin</NavLink>
              </li>
            )
          }


          <li>
            <NavLink to="/error" >Ruta error</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )

}