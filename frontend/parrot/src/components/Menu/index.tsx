import { House, User, UsersThree } from 'phosphor-react'
import MenuItem from "../MenuItem";

function Menu() {
    return (
        <ul>
           <MenuItem menuTitle="Páginal Inicial">
            <House className='mr-4' size={38} weight="fill" />
           </MenuItem>
           <MenuItem menuTitle="Perfil" >
            <User className='mr-4' size={38} weight="fill" />
           </MenuItem>
           <MenuItem menuTitle="Amigos"> 
           <UsersThree className='mr-4' size={38} weight="fill"  />
           </MenuItem>
        </ul>
    )
}

export default Menu;