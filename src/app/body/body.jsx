import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { useParams } from "react-router-dom";

export default function Body() {
  const {page} = useParams()
  
  return (
    <>
      {page === 'about' ? (
        <About />
      ) : page === 'contact' ? (
        <Contact />
      ) : (
        <Home/>
      )}
    </>
  )
}
