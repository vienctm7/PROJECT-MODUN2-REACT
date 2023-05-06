import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LayoutNavbar from "../layout/LayoutNavbar";

function Login(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get("http://localhost:3000/users");
      setUsers(result.data);
    };

    loadUser();
  }, []);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const adminuser = JSON.parse(localStorage.getItem("adminUsername"));
  console.log(adminuser);

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeLogin = (e) => {
    e.preventDefault();
    if (adminuser[0].username===name && adminuser[1].password ===password) {
      setTimeout(() => {
        navigate("/homeAdmin");
      }, 2000);
      return  alert("Chào mừng đến trang Admin!");
    } 
    let flag = true;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === name && users[i].password === password) {
        flag = false;
        localStorage.setItem("username", JSON.stringify(users[i].username));
        break;
      } else {
        flag = true;
      }
    }
    if (flag === false) {
      setTimeout(() => {
        navigate("/home");
      }, 2000);

      alert("Đăng nhập thành công!");
    } else {
      alert("Tài khoản hoặc mật khẩu đăng nhập không đúng");
    }
  };
  const handleShowEyeChange = (e) => {
    setShowpassword(!showPassword);
  };
  return (
    <div>
      <LayoutNavbar/>
      <div className="form-tt">
        <h2>Đăng nhập </h2>
        <input
          id="username"
          type="text"
          placeholder="Tên đăng nhập"
          value={name}
          onChange={handleNameChange}
        />
        <div className="eyechange">
          <input
            id="current-password"
            type={showPassword ? "text" : "password"}
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
          <span onClick={handleShowEyeChange}>
            <i
              id="eye"
              className={
                !showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"
              }
            ></i>
          </span>
        </div>
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label className="checkbox-text">Nhớ đăng nhập lần sau</label>
        <input
          id="login"
          onClick={handleChangeLogin}
          type="submit"
          name="submit"
          value="Đăng nhập"
        />
        <label className="psw-text">Quên mật khẩu</label>
        <br />
        <div className="signup-link">
          <Link
            to="/signup"
            role="button"
            style={{ textDecoration: "none", color: "black" }}
          >
            Đăng kí tài khoản
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
