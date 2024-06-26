import React, {useState} from 'react'
import './Header.css'
import Logo from'../../assets/logo.jpeg';
import Bars from'../../assets/bars.png';

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">

    <img src={Logo} alt="" className='logo' />
    {menuOpened === false && mobile === true ? (
      <div
      style={{
        backgroundColor: "var(--appColor)",
        padding: "0.5rem",
        borderRdius: "5px",
      }}
      onClick={()=> setMenuOpened(true)}
      >
        <img src={Bars}
         alt="" 
         style={{ width: "1.5rem", height: "1.5rem"}}
         />
         </div>
    ):(
    <ul className='header-menu'>
        <li onClick={()=>setMenuOpened(false)}>Home</li>
        <li onClick={()=>setMenuOpened(false)}>Programs</li>
        <li onClick={()=>setMenuOpened(false)}>About</li>
        <li onClick={()=>setMenuOpened(false)}>Plans</li>
        <li onClick={()=>setMenuOpened(false)}>Experts</li>
    </ul>
  )}
    </div>
  )
};

export default Header