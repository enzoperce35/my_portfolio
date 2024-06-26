import Logo from "./logo";
import Kebab from "./kebab_drawer";
import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <div id="header">
      <div>
        <Link to="/" id="brand">
          <span><Logo /></span>
          <h1>Edgar</h1>
        </Link>
        
        <div id="nav">
          <Kebab />
        </div>
      </div>
    </div>
  )
}
