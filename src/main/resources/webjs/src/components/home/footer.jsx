import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-content clearfix">
                    <div className="footer-top clearfix">
                        <div className="company-name col-md-3">
                            <div className="footer-inner">
                                <h3>COMPANY NAME</h3>
                                <p>Fashion Network là công ty đi đầu trong lĩnh vực thời trang. Chúng tôi sẵn sàng cung
                                    cấp cho bạn những dịch vụ tốt nhất ở bất cứ đâu và bất cứ lúc nào</p>
                            </div>
                        </div>
                        <div className="product-extent col-md-3">
                            <div className="footer-inner">
                                <h3>PRODUCTS</h3>
                                <ul>
                                    <li><a href="#">Các loại áo</a></li>
                                    <li><a href="#">Các loại quần</a></li>
                                    <li><a href="#">Các loại giày</a></li>
                                    <li><a href="#">Phụ kiện thời trang</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="useful-link col-md-3">
                            <div className="footer-inner">
                                <h3>USEFUL LINKS</h3>
                                <ul>
                                    <li><a href="#">Tài khoản của bạn</a></li>
                                    <li><a href="#">Trở thành đối tác</a></li>
                                    <li><a href="#">Tỉ lệ & chất lượng feedback</a></li>
                                    <li><a href="#">Trợ giúp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact col-md-3">
                            <div className="footer-inner">
                                <h3>CONTACT</h3>
                                <ul>
                                    <li><a href="#"><i className="far fa-address-book"></i> 144 Xuân Thủy, Cầu Giấy, Hà
                                        Nội</a></li>
                                    <li><a href="#"><i className="far fa-envelope"></i> vannhatttmmt@gmail.com</a></li>
                                    <li><a href="tel:+841674546192"><i className="fas fa-phone-square"></i> +84 167 4546
                                        192</a></li>
                                    <li><a href="#"><i className="fas fa-fax"></i> +24 167 995 23</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer-bottom">
                        <div className="copyright col-md-3">
                            <p>Copyright <i className="far fa-copyright"></i> Fashion Network. All rights reserved</p>
                        </div>
                        <div className="policy col-md-4">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Use</a>
                            <a href="">Legal</a>
                            <a href="">Site Map</a>
                        </div>
                        <div className="social-network col-md-5">
                            <a href=""><i className="fab fa-facebook"></i></a>
                            <a href=""><i className="fab fa-twitter"></i></a>
                            <a href=""><i className="fab fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
