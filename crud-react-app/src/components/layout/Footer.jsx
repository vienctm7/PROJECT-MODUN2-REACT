import React from 'react'
import LayoutNavbar from './LayoutNavbar'

function Footer() {
  return (
    <div>
        <hr />
         <div class="footer">
        <div class="footer-div1">
            <h4> Giới thiệu </h4>
            <p>SmartHomePlus đem tiện nghi đến ngôi nhà của bạn, bản quyền thuộc công ty TNHH Nhà Thông Minh SONIX</p>
            <ul>
                <li>Giới thiệu</li>
                <li>Tin tức</li>
                <li>Đại lý</li>
                <li>Liên hệ</li>
            </ul>
        </div>
        <div class="footer-div2">
            <h4>Chính sách</h4>
            <ul>
                <li>Chính sách vận chuyển</li>
                <li>Chính sách đổi trả</li>
                <li>Chính sách bảo mật</li>
                <li>Chính sách đại lý</li>
                <li>Phương thức thanh toán</li>
                <li>Thông tin chuyển khoản</li>
                <li>Hướng dẫn mua hàng</li>
            </ul>
        </div>
        <div class="footer-div3">
            <h4>Thông tin liên hệ</h4>
            <p>
                <i class="fa-solid fa-location-dot"></i>
                <span>
                    Số 69 ngõ 96, Trần Quang Diệu, Ô Chợ Dừa, Đống Đa, HN</span>
            </p>
            <p>
                <i class="fa-solid fa-phone"></i>
                <span>096-669-996</span>
            </p>
            <p>
                <i class="fa-regular fa-envelope"></i>
                vienctm7@gmail.com
            </p>
        </div>
        <div class="footer-div4">
            <h4>Kết nối với chúng tôi</h4>
            <div class="iconbot">
                <a href="facebook.com"><i class="fa-brands fa-facebook"></i></a>
                <a href="telegram.com"><i class="fa-brands fa-telegram"></i></a>
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Footer