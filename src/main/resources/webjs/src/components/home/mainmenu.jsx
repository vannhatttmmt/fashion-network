import React from 'react'

class MainMenu extends React.Component {
    render() {
        return (
            <div className="main-menu clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img src="//theme.hstatic.net/1000234712/1000313024/14/logo.png?v=22" alt=""/>
                        </div>
                        <div className="col-md-7">
                            <div className="wrap">
                                <a href="#home">Trang Chủ</a>
                                <div className="dropdown">
                                    <a className="dropbtn">Danh Mục</a>
                                    <div className="dropdown-content">
                                        <div className="row">
                                            <div className="column">
                                                <h3>Category 1</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                            <div className="column">
                                                <h3>Category 2</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                            <div className="column">
                                                <h3>Category 3</h3>
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
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
                                <input type="text" placeholder="Search..."/>
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