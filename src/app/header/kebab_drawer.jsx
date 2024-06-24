import { useState } from "react"

export default function Kebab() {
  const [drawerClosed, setDrawerClosed] = useState(true);

  const toggle = () => {
    setDrawerClosed(!drawerClosed)
  }
  
  return (
    <ul className="nav">
      <div className="kebab" onClick={toggle}>
      
        <figure></figure>
      
        <figure className={drawerClosed ? "middle" : "middle active"}></figure>
      
        <p className={drawerClosed ? "cross" : " cross active"}>x</p>
      
        <figure></figure>
      
        <ul className={drawerClosed ? "dropdown" : "dropdown active"}>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </ul>
  )
}
