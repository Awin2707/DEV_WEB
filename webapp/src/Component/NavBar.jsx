import React from 'react'
import nav from '../Style/main.module.css';
import logo from '../Assest/report.png';
import { NavLink, useNavigate } from 'react-router-dom';
function NavBar() {

    const navigate = useNavigate();

    const clickRegister = () => {
        navigate("/register");
    }

  return (
    <div className={nav.bar}>
        <div className={nav.barleft}>
            <img alt='x-ico' src={logo} className={nav.logo} />
            <label className={nav.logoHeading}>Money Management</label>
        </div>
        <div className={nav.barmid}>
            <label className={nav.subTitle}>Home</label>
            <label className={nav.subTitle}>About us</label>
            <label className={nav.subTitle}>Contact us</label>
        </div>
        <div className={nav.barright}>
            <NavLink className={nav.log}>Login</NavLink>
            <button className={nav.btn} onClick={clickRegister}>Get Start</button>
        </div>
    </div>
  )
}

export default NavBar