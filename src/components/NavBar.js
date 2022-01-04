import {Link} from "react-router-dom";

const NavBar = () => {

  return(
      //simple a href links to the different pages
    <ul>
      <li>
        <Link to="/Slider">Slider</Link>
      </li>
      <li>
        <Link to="/Progress">ProgressBar</Link>
      </li>
      <li>
        <Link to="/Spider">SpiderChart</Link>
      </li>
      <li>
        <Link to="/ScrollList">ScrollList</Link>
      </li>
    </ul>
  )

}

export default NavBar;