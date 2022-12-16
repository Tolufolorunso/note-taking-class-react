import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAppContext } from "../../store/appContext";
import "./Header.css";


const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
 
  const {logout,token} = useAppContext()

  function handleLogout() {
    logout()
    navigate('/login')
    // window.location.href = "/login"
  }
  useEffect(() => {  
    if (token) {
      setIsLoggedIn(true)
    }
  }, [token])
  
  return (
    <div>
      <header className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3 className="logo">
            {<span className="highlight">Note</span>} App
          </h3>
        </Link>

        <ul className="nav__links">
          
         
          {isLoggedIn ? (
        <>          <li className="nav__item">
            <Link to="/notes" className="nav__link">
              Notes
            </Link>
            </li>
          <li className="nav__item">
            <button className="nav__link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </>
      
          ) : (
        <>
          <li className="nav__item">
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/register" className="nav__link">
              Sign up
            </Link>
          </li>
          </>
            )        
          }
        </ul>
      </header>
    </div>
  );
};

export default Header;
