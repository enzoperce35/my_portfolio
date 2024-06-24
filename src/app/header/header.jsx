import Logo from "./logo";
import Kebab from "./kebab_drawer";

export default function Header() {
  return (
    <div id="header">
      <div>
        <div id="brand">
          <span><Logo /></span>
          <h1>Edgar</h1>
        </div>
        
        <div id="nav">
          <Kebab />
        </div>
      </div>
    </div>
  )
}
