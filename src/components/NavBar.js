import CarWidget from "./CarWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header> 
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                 <Link to="/" className="btn normal-case text-xl" >GILMORE GLORIOUS GOODS</Link>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal navbar-center">
                    <li><Link to="/categoria/armor">Armor</Link></li>
                    <li><Link to="/categoria/weapon">Weapons</Link></li>
                    <li><Link to="/categoria/potion">Potions</Link></li>
                    <li><Link to="/categoria/enchantment">Enchantments</Link></li>
                </ul>
            </div>
            <CarWidget/>
        </div>        
    </header> 
  )
}

export default NavBar