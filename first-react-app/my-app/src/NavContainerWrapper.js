import './NavContainerWrapper.css';
import Navigation from "./Navigation";
import Container from "./Container";

const NavContainerWrapper = () => {
    return (
      <div className='NavContainerWrapper'>
          <Navigation />
          <Container />
      </div>
    );
}

export default NavContainerWrapper;