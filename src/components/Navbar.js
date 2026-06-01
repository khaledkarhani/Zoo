import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/an">Animals</Link>
                 <Link to="/emp">Employees</Link>
                 <Link to="/test">Test</Link>
            </nav>
        </div>
    );
}           

export default Navbar;