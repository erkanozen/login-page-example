import "./login.scss";
import { FaUserLarge } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const correctUserName = "test@example.com";
  const correctPassword = "password123";

  const handleLogin = (e) => {
    e.preventDefault();
    if (userName.trim() === "" || password.trim() === "") {
      setError("E-Posta ve şifre alanları boş bırakılamaz !");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else if (
      userName.trim() !== correctUserName &&
      password.trim() !== correctPassword
    ) {
      setError("E-Posta veya Şifre yanlış !");
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setUserName("");
      setPassword("");
      navigate("/home");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin} className="login__form">
        <img className="login__form--img" src="/login.png" alt="" />
        <div className="login__form--input">
          <FaUserLarge className="login_icon" />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="login_input"
            placeholder="E-Posta"
          />
        </div>
        <div className="login__form--input">
          <FaLock className="login_icon" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            className="login_input"
            placeholder="Şifre"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="show-icon"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <span className="login__form--error"> {error} </span>
        <div className="login__form--button">
          <button type="submit">Giriş Yap</button>
        </div>
        <div className="login__form--forget">
          <a href="#">Şifremi Unuttum ?</a>
        </div>
        <div className="login__form--powered">
          Powered by{" "}
          <a target="_blank" href="https://github.com/erkanozen">
            erkanozen
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
