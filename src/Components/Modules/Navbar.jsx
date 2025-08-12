import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="text-white shadow-lg border-b border-white/10 sticky z-30 top-0 w-11/12  mx-auto">
      <div className="flex justify-between items-center py-4">
        
        {/* Left Side: Logo*/}
        <div className="flex items-center gap-10">
          <Link to="/" className="text-2xl font-bold tracking-wide">
          Mocha<span className="text-[rgb(252,183,9)] font-title">Muse</span> 
        </Link> 
          
        </div>

        <div>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <NavLink to="/" className="hover:text-gray-300 transition-colors">Home</NavLink>
            <NavLink to="/addCoffee" className="hover:text-gray-300 transition-colors">Add Coffee</NavLink>
            
            {/* Extra future links */}
            <NavLink to="/menu" className="hover:text-gray-300 transition-colors">Menu</NavLink>
            
            <NavLink to="/about" className="hover:text-gray-300 transition-colors">About Us</NavLink>
          </nav>
        </div>

        {/* Right Side: Login Button */}
        <div>
          <Link 
            to="/signin" 
            className="btn btn-outline btn-sm border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
