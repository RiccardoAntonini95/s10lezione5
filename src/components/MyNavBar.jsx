import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

const MyNavbar = () => {
  return (
      <Navbar expand="lg" className="my-navbar">
        <Navbar.Brand>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvrTAXEcS60Rd0UK6kvNvrta8aU6R6sL2w2A&usqp=CAU" rounded width={60}/>
        </Navbar.Brand>
        <Link to={"/"} className="nav-link">
            Home
        </Link>
      </Navbar>
  );
}

export default MyNavbar;