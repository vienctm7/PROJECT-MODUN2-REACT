import React, {useState } from "react";
import Footer from "../layout/Footer";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Cart() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    let initotal= 0
    for (let i = 0; i < dataCart.length; i++) {
      initotal += dataCart[i].price*dataCart[i].quantity
    };
    const [total, setTotal] = useState(initotal)
    const [cart, setCart] = useState(dataCart)

    const plusQuantity = (qt, id)=>{
      let newCart = [...cart];
      for (let i = 0; i < newCart.length; i++) {
        if(i ===id){
          newCart[i].quantity = dataCart[i].quantity + 1;
          console.log(newCart[i].quantity);
          setCart(newCart);
          let newTotal = total;
          setTotal(newTotal += newCart[i].price) ;
          localStorage.setItem("dataCart", JSON.stringify(cart));
          break;
        };
        
      }
    }
    const minusQuantity =(qt, id)=>{
      let newCart = [...cart]
      for (let i = 0; i < newCart.length; i++){
        if(i ===id){
          if(newCart[i].quantity > 1 ){
          newCart[i].quantity = dataCart[i].quantity - 1;
          setCart(newCart);
          let newTotal = total;
          setTotal(newTotal -= newCart[i].price) ;
          localStorage.setItem("dataCart", JSON.stringify(cart));
          break;
          }
        }
      }
    }
    const deleteProduct = (id) => {
      let newCart = [...cart];
      newCart = newCart.filter((product) => product.id !== id);
      setCart(newCart);
      localStorage.setItem("dataCart", JSON.stringify(newCart));
    };
    const user = JSON.parse(localStorage.getItem("username"));
  const deleteUser = () =>{
    localStorage.removeItem("username");}
  return (
    <>
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
            <div className="header-card">
          <h2>Giỏ hàng</h2>
        </div>
     {dataCart.map((product, id)=>{
      return (
        <div className="container"key={id}>
     
        <div className="main-card">
          <div className="img-product">
            <img src={product.anh} />
          </div>
          <div className="mid-card">
            <div className="title-main">
              <span>{product.name}</span>
            </div>
            <div className="price">Giá: {product.price}</div>
            <div className="mid-card-size">
              <div>
                <span>Số lượng</span>
                <div className="So-luong">
                  <button onClick={()=>minusQuantity(product.quantity, id)}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={()=>plusQuantity( product.quantity, id)}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="main-right-card">
            <span className="total-product">{(product.quantity * product.price).toLocaleString()} VND</span>
            <span className="status-product">Còn hàng</span>
            <button className="heart">
              <i className="fa-solid fa-heart"></i>
            </button>
            <button onClick={()=>deleteProduct(product.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
      
      )
     })}
     <div className="header-card">
          <h2>Total: {total.toLocaleString()} VND</h2>
          <button>Thanh toán</button>
        </div>
        <Footer/>
    </>
  );
}

export default Cart;
