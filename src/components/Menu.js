import React , {useState} from "react";
import {Link} from 'react-router-dom';

const Menu = () => {
  
  const [selectedMenu , setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen , setisProfileDropdownOpen] = useState(false);

  const handleSelectedMenu=(index)=>{
      setSelectedMenu(index);
  };
  const handleProfileClick = (index) =>{
    setisProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menu = "menu";
  const activeMenuClass = "menu selected";
  
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "25px" , height:"20px" }} alt="menu"/>
      <div className="menus">
        <ul>
          <li>
           <Link to="/" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass : menu}>Dashboard</p>
            </Link>
          </li>
          <li>
           <Link to="/orders" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(1)}>
            <p className={selectedMenu === 1 ? activeMenuClass : menu}>Orders</p>
            </Link>
          </li>
          <li>
         <Link to="/holdings" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(2)}>
            <p className={selectedMenu === 2? activeMenuClass : menu}>Holdings</p>
            </Link>
          </li>
          <li>
         <Link to="/positions" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(3)}>
            <p className={selectedMenu === 3 ? activeMenuClass : menu}>Positions</p>
            </Link>
          </li>
          <li>
         <Link to="/funds" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(4)}>
            <p className={selectedMenu === 4 ? activeMenuClass : menu}>Funds</p>
            </Link>
          </li>
          <li>
         <Link to="/apps" style={{textDecoration:"none"}} onClick={()=> handleSelectedMenu(5)}>
            <p className={selectedMenu === 5 ? activeMenuClass : menu}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
