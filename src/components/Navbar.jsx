import React, {useRef} from 'react' 
import { AiOutlineBars } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

function Navbar(){

const overlayMenyuRef = useRef()
const overlayMenyunuAc = () => {
  overlayMenyuRef.current.classList.add("aktiv")
}
const overlayMenyuBagla = () => {
  overlayMenyuRef.current.classList.remove("aktiv")
}




  return (
    <>
    <div ref={overlayMenyuRef} className="overlay d-flex flex-column gap-2 position-fixed">
      <IoIosCloseCircleOutline onClick={overlayMenyuBagla} className="close-icon text-white position-absolute"/>
       <nav className="nav-links d-flex flex-column justify-content-center align-items-center">
        <Link className="nav-link text-light" to="/">What we do</Link>
        <Link className="nav-link text-light" to="karyera">Career</Link>
        <Link className="nav-link text-light" to="bizimlelaqe">Contact</Link>
        <Link className="nav-link text-light" to="bloqlar">Blog</Link>
      </nav>
    </div>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/"><img src="/assets/images/logo.svg" alt="" /></Link>
    <button onClick={overlayMenyunuAc} type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <AiOutlineBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">What we do</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="karyera">Career</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="bizimleelaqe">Contact</Link>
        
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="bloqlar">Blog</Link>
        </li>
    
   
      </ul>
   
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar