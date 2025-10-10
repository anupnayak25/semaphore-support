import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ScrollToTop from "./components/ScrollToTop";
import "./Layout.css";

function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-text">Semaphore</span>
          </Link>
          
          <div className="navbar-menu">
            <Link to="/gallery" className="nav-btn profile-btn">
              Gallery
            </Link>
            
            {user ? (
              <div className="user-menu">
                <button onClick={() => navigate('/upload')} className="nav-btn profile-btn">Upload</button>
                <button onClick={handleLogout} className="nav-btn logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="nav-btn login-btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <ScrollToTop/>
      <Outlet />
    </>
  );
}

export default Layout;