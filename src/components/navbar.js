
// navbar element should be in the top with five tabs along with it
import './navbar.css'

function Navbar() {
    const naviBar = {
        firstele: 'Start Bootstrap',
        secondele: 'Home',
        thirdele: 'About',
        fourthele: 'Shop',
    };
    
    return (
        <nav className="container-fluid">
                <div className="navbar-collapse">
                    <ul className="nav nav-tabs">
                        <li className="nav-item navbar-expand navbar-nav me-5">
                            <a className="nav-link " href="#">{naviBar.firstele}</a>
                        </li>
                        <li className="nav-item navbar-expand navbar-nav me-5">
                            <a className="nav-link" href="#">{naviBar.secondele}</a>
                        </li>
                        <li className="nav-item navbar-expand navbar-nav me-5">
                            <a className="nav-link" href="#">{naviBar.thirdele}</a>
                        </li>
                        <li className="nav-item navbar-expand navbar-nav me-5">
                            <a className="nav-link" href="#">{naviBar.fourthele}</a>
                        </li>
                        <li className='nav-item navbar-expand navbar-nav float-right'>
                            <a className='nav-link active'><img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-trolley-icon-shopping-cart-icon-trolley-icon-vector-illustration-isolated-white-background-163727286.jpg"></img>Cart&nbsp;<span className="bg-secondary">6</span></a>
                        </li>
                    </ul>
                </div>
                
        </nav>
    );
};

export default Navbar;