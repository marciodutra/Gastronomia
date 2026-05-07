import styles from './navbar.module.css'
import { FaShoppingCart, FaUserCircle, FaBars } from "react-icons/fa";
import{ Drawer } from '@mui/material'
import { useState} from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const[openMenu, setOpenMenu] = useState(false)
    
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <nav className={styles.navbarContainer}>
            <div className={styles.navbarItems}>
                <Link to={'/'}>
                <img className={styles.logo} src="/logo.png" alt="" />
                </Link>
                

                <div className={styles.navbarLinksContainer}>
                    <Link className={styles.navbarLink}>Home</Link>
                    <Link to={'/plates'} className={styles.navbarLink}>Pratos</Link>
                    <Link to={'/cart'}>
                        <FaShoppingCart className={styles.navbarLink}/>                        
                    </Link>  
                    <Link to={'/profile'}>                        
                        <FaUserCircle className={styles.navbarLink}/>
                    </Link>                   
                </div>
            </div>

            <div className={styles.mobileNavbarItems}>
                <img className={styles.logo} src="/logo.png" alt="" />
                <div className='styles.mobileNavbarBtns'>
                    <div className={styles.mobileNavbarBtns}>
                    <div>
                        <FaShoppingCart className={styles.mobileIcon} />
                    </div>

                    <div>
                        <FaBars className={styles.mobileIcon} onClick={handleOpenMenu} />
                    </div>
                </div>

                 <Drawer
                    anchor='right'
                    open={openMenu}
                    onClose={handleOpenMenu}                    
                    >
                        <div className={styles.drawer}>
                            <a href="" className={styles.navbarLink}>Home</a>
                            <a href="" className={styles.navbarLink}>Pratos</a>
                            <a href="" className={styles.navbarLink}>Perfil</a> 
                                </div>                                       
                </Drawer>
                </div>
            </div>
        </nav>
    )
}