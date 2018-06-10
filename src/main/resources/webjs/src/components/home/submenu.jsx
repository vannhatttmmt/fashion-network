import React from 'react'

class SubMenu extends React.Component{
    render(){
        return(
            <div className="sub-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="hotline">Hotline: <a href="tel:0988992085">0988992085</a></p>

                        </div>
                        <div className="col-md-4">
                            <div className="right-corner">
                                <ul className="social-icon col-md-5">


                                    <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>


                                    <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>


                                    <li><a href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a></li>

                                </ul>
                                <div className="login-and-register col-md-7">

                                    <a className="" href="/account/register">Đăng ký /</a> &nbsp;
                                    <a className="" href="/account/login">Đăng nhập</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SubMenu