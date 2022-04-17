import CarWidget from "./CarWidget"

const NavBar = () => {
  return (
    <header> 
        <div class="navbar bg-neutral">
            <div class="navbar-start">
                 <button href="#" class="btn normal-case text-xl" >GILMORE GLORIOUS GOODS</button>
            </div>
            <div class="navbar-end lg:flex">
                <ul class="menu menu-horizontal">
                    <li><button href="#">Armor</button></li>
                    <li><button href="#">Weapons</button></li>
                    <li><button href="#">Potions</button></li>
                    <li><button href="#">Enchantments</button></li>
                </ul>
            </div>
            <CarWidget/>
        </div>        
    </header> 
  )
}

export default NavBar