import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Kebab() {
  const [drawerClosed, setDrawerClosed] = useState(true);
  const sideNavRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setDrawerClosed(true)
    }
  }

  const toggle = () => {
    setDrawerClosed(!drawerClosed)
  }
  
  return (
    <ul ref={sideNavRef} className="nav">
      <div className="kebab" onClick={toggle}>
      
        <figure></figure>
      
        <figure className={drawerClosed ? "middle" : "middle active"}></figure>
      
        <p className={drawerClosed ? "cross" : " cross active"}>x</p>
      
        <figure></figure>
      
        <ul className={drawerClosed ? "dropdown" : "dropdown active"}>
          <li>
            <Link to="/about">About</Link>
          </li>
          
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </ul>
  )
}
