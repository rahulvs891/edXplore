import React,{useState} from 'react';
import './Sidenav.css';

export default function Sidenav() {
    const [style1, setStyle1] = useState("cont2");
    const [style2,setStyle2] = useState("cont");
    const changeStyle1 = () => {
    setStyle1("cont2");
    setStyle2("cont");
    };
    const changeStyle2 = () => {
    setStyle2("cont2");
    setStyle1("cont");
    };
  return (
    <div className='sideNavContainer'>
        <ul>
          <a href='/'><li>Home</li></a>
          <a href='/personal/profile' onClick={changeStyle1}><li className={style1}>Profile</li></a>
          <a href='/personal/added' onClick={changeStyle2}><li className={style2}>Added</li></a>
        </ul>
      
    </div>
  )
}
