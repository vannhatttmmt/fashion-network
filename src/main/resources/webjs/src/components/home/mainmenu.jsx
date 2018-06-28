import React from 'react'

class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img className="home-logo" src="img/logo-white.png" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <div className="wrap">
                                <a href="#home">Trang Chủ</a>
                                <div className="dropdown">
                                    <a className="dropbtn">Danh Mục</a>
                                    <div className="dropdown-content">
                                        <div className="dropdown-top clearfix">
                                            <div className="col-md-4">
                                                <div className="content-inner">
                                                    <h4>Màu sắc phong phú</h4>
                                                    <p>Không giới hạn màu sắc</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-inner">
                                                    <h4>Mẫu mã đa dạng</h4>
                                                    <p>Tất cả các món thời trang</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="content-inner">
                                                    <h4>Giá cả hợp lý</h4>
                                                    <p>Ở đâu bán rẻ, chúng tôi rẻ hơn</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className="dropdown-mid clearfix">
                                            <div className="col-md-3">
                                                <h3>ĐỒ NAM</h3>
                                                <ul>
                                                    <li><a href="">Áo Cotton</a></li>
                                                    <li><a href="">Phụ kiện nam</a></li>
                                                    <li><a href="">Áo khoác</a></li>
                                                    <li><a href="">Giày nam</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <h3>ĐỒ NỮ</h3>
                                                <ul>
                                                    <li><a href="">Chân váy</a></li>
                                                    <li><a href="">Quần jean</a></li>
                                                    <li><a href="">Áo phông nữ</a></li>
                                                    <li><a href="">Giày nữ</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <h3>PHỤ KIỆN</h3>
                                                <ul>
                                                    <li><a href="">Phụ kiện nam</a></li>
                                                    <li><a href="">Phụ kiện nữ</a></li>
                                                    <li><a href="">Phụ kiện cá tính</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <h3>GIẢM GIÁ</h3>
                                                <ul>
                                                    <li><a href="">Đồ nam</a></li>
                                                    <li><a href="">Áo len nam</a></li>
                                                    <li><a href="">Áo khoác</a></li>
                                                    <li><a href="">Áo cotton</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="#news">Blog</a>
                                <a href="#news">Giới Thiệu</a>
                                <a href="#news">Liên Hệ</a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="col-md-8">
                                <input type="text" placeholder=""/>
                            </div>
                            <div className="col-md-4">
                                <a href="#"><i className="fas fa-gift"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu