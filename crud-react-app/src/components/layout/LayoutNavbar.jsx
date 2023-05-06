import Cart from "../page/Cart";    
import "./LayoutNavbar.css";
import { Link, NavLink } from "react-router-dom";


function LayoutNavbar() {
 
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
              Đăng nhập/Đăng ký
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default LayoutNavbar;
