import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

const RootLayout = ({items, children}) => {   

    return (  
      <>
        <NavBarMenu items={items}/>
        <Container className="my-4">
          {children}
        </Container>
        <Footer />
      </>
    );
}

export default RootLayout;