import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    } else {
      navigatge("/login");
    };
  }, [isLoggedIn]);

  return (
    <div className="app">
      <NavBar logout={logout}/>
      <Outlet context={login}/>
    </div>
  );
}

export default App;
