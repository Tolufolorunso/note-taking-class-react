import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear()
    navigate('/login')
  }
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user")) 
    const tokenLS =localStorage.getItem("token")
    if (data) {
      setUser(data)
      setToken(tokenLS)
      console.log(11,data)
    }
    console.log(13,data)
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
          <li className="nav__item">
            <Link to="/notes" className="nav__link">
              Notes
            </Link>
          </li>
          {!user ? <>
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
          </>: null}
         
          <li className="nav__item">
            <button className="nav__link" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
