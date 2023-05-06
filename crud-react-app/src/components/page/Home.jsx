import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../layout/Footer";
import { Link, NavLink, useNavigate  } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const loadData = async () => {
    const result = await axios.get("http://localhost:3000/products");
    setProducts(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const [cart, setCart] = useState([]);

  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const checkExits = (carts, productId) => {
    // Tạo ra một biến cờ
    let isExits = false;
    // Dùng vòng lặp để kiểm tra
    carts.forEach((element) => {
      if (element.id === productId) {
        isExits = true;
      }
    });
    return isExits;
  };

  // Hàm kiểm tra vị trí của sản phẩm trong giỏ hàng
  const getIndex = (carts, productId) => {
    console.log("carts", carts);
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].id === productId) {
        return i;
      }
    }
    return -1;
  };

  useEffect(() => {
    const dataCarts = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCarts != null) {
      setCart(dataCarts);
    } else {
      setCart([]);
    }
  }, []);

  // Thêm mới sản phẩm vào trong giỏ hàng
  const addCart = (product, quantity) => {
    // Nếu hàm checkExits trả về true thì tiêns hành tăng số lượng
    if (checkExits(cart, product.id)) {
      alert("Sản phẩm đã có trong giỏ hàng! Vào giỏ hàng kiểm tra");
      // Lấy vị trí của sản phẩm trong cart
      let index = getIndex(cart, product.id);
      // Từ vị trí này thì đi vào key là quantity để tăng sóo lượng
      cart[index].quantity += 1;
    } else {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
      alert("Sản phẩm đã được thêm vào giỏ hàng");
      // Tiến hành thêm sản phẩm vào giỏ hàng
      cart.push(product);
    }
    localStorage.setItem("dataCart", JSON.stringify(cart));
    return [...cart];
  };
  const newDataCart = [...cart];
  const user = JSON.parse(localStorage.getItem("username"));
  const deleteUser = () =>{
    localStorage.removeItem("username");
  }
  return (
    <div>
      <header className="header_top">
        <div className="header_logo">
          <Link to="/Home">
            <img
              src="https://bizweb.dktcdn.net/100/089/254/themes/111146/assets/logo.png?1653446232394"
              width={100}
              alt=""
            />
          </Link>
        </div>
        <div className="search-input">
          <input
            style={{ borderColor: "green" }}
            type="text"
            placeholder="Tìm kiếm..."
          />
          <button
            style={{
              borderColor: "green",
              backgroundColor: "green",
              color: "white",
              width: 30,
            }}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        <div className="phone-header">
          <span>Tư vấn mua hàng online</span>
          <br />
          <a href="tel: 039 364 5238">0393645238</a>
        </div>
      </header>
      <hr />
      <nav>
        <div className="logotitle" />
        <div className="search" />
        <div className="phonenumber" />
        <div className="logocart" />
      </nav>
      <nav>
        <div className="header_top">
          <div className="maintitle">
            <h1>
              <NavLink to="/home" className={"trangchu"}>
                Trang chủ
              </NavLink>
            </h1>
          </div>
          <div className="nav_menu">
            <div className="dropdown">
              <span className="dropbtn">SẢN PHẨM</span>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Công tắc thông minh</a>
                </li>
                <li>
                  <a href="#">Khóa cửa thông minh</a>
                </li>
                <li>
                  <a href="#">Trung tâm điều khiển nhà</a>
                </li>
                <li>
                  <a href="#">Báo động an ninh</a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <span className="dropbtn">CHÍNH SÁCH</span>
              <ul className="dropdown-content">
                <li>
                  <a href="#">Bảo hành sản phẩm</a>
                </li>
                <li>
                  <a href="#">Giao hàng</a>
                </li>
                <li>
                  <a href="#">Đổi trả</a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <span className="dropbtn">TIN TỨC</span>
              <ul className="dropdown-content">
                <li>
                  <Link to="/about">Thời tiết</Link>
                </li>
                <li>
                  <a href="#">Cập nhật sản phẩm mới</a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <span className="dropbtn">HƯỚNG DẪN </span>
              <ul className="dropdown-content">
                <li>
                  <Link to="#">Mua hàng</Link>
                </li>
                <li>
                  <Link to="#">Phương thức thanh toán</Link>
                </li>
                <li>
                  <Link to="#">Địa điểm</Link>
                </li>
              </ul>
            </div>
          </div>
          {user ? (
            <div className="login" id="change">
              <i
                className="fa-solid fa-user"
                style={{ color: "white", fontSize: 15, paddingRight: 5 }}
              />
              <Link
                to="/home"
                style={{ color: "white", textDecoration: "none", fontSize: 20 }}
                id="changeIndex"
              >
                 {user}
              </Link>
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none", fontSize: 20 }}
                id="changeIndex"
                onClick={deleteUser}
              >
                  &nbsp;&nbsp;Đăng Xuất
              </Link>
              <div className="logoCartwindow">
          <Link to="/cart" className="logoCart">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "white" }}
            />
          </Link>
          <span style={{ color: "red", fontSize: 30, position: "absolute" }}>
            {cart.length}
          </span>
        </div>
            </div>
          ) : (
            <div className="login" id="change">
              <i
                className="fa-solid fa-user"
                style={{ color: "white", fontSize: 15, paddingRight: 5 }}
              />
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none", fontSize: 20 }}
                id="changeIndex"
              >
                Đăng kí/Đăng nhập
              </Link>
              <div className="logoCartwindow">
          <Link to="/home" className="logoCart">
            <i
              className="fa-solid fa-cart-shopping"
              style={{ color: "white" }}
            />
          </Link>
          <span style={{ color: "red", fontSize: 30, position: "absolute" }}>
            {cart.length}
          </span>
        </div>
            </div>
          )}
        </div>

      </nav>
      <div className="section">
        <div className="sidebar">
          <div className="title-sidebar" >
            <h4 className="titleh4">
              <i class="fa-solid fa-list"></i> DANH MỤC SẢN PHẨM
            </h4>
          </div>
          <li>Tất cả sản phẩm</li>
          <li>Công tắc thông minh</li>
          <li>Ổ cắm thông minh</li>
          <li>Đèn-Đui đèn thông minh</li>
          <li>Đèn năng lượng mặt trời</li>
          <li>Chuông cửa - Báo khách</li>
          <li>Báo động an ninh</li>
          <li>Camera an ninh</li>
          <div className="sidebar-img"><img src="https://theme.hstatic.net/1000162838/1000469515/14/avatar-answ.png?v=644"  width={200} alt="" /></div>
          <div className="sidebar-img"><img src="https://theme.hstatic.net/1000162838/1000469515/14/left_image_ad.jpg?v=644"  width={200} alt="" /></div>
          <div className="sidebar-img"><img src="https://theme.hstatic.net/1000162838/1000469515/14/left_image_ad_1.jpg?v=644"  width={200} alt="" /></div>
          </div>
        <div className="product" id="product">
          {products.map((product) => {
            return (
              <div className="element" key={product.id}>
                <img
                  src={product.anh}
                  width="130px"
                  height="130px"
                  alt="công tắc chữ nhật"
                />
                <p className="nameproduct">{product.name}</p>
                <span className="price" style={{ color: "#1939bc" }}>
                  {product.price}
                </span>
                <button
                  className="addCart"
                  onClick={() => {
                    addCart(product, product.quantity);
                  }}
                >
                  Thêm giỏ hàng
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
