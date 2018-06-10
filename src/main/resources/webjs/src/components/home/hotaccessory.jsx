import React from 'react'

class HotAccessory extends React.Component{
    render(){
        const data = this.props.vm.listHotAccessories;
        console.log(data);
        return(
            <div>
                <section className="hot-product clearfix" id="hot-product">
                    <div className="hot-product__inner clearfix">
                        <div className="hot-product__header">
                            <h3>Phụ kiện Hot</h3>
                        </div>
                        <div className="hot-product__content">
                            <ul className="menu-item">
                                {data.map(function (d, index) {
                                    return (
                                        <div className="items col-md-3">
                                            <a href="#">
                                                <li>
                                                    <div className="item-overlay">
                                                        <img src={d.image}/>
                                                        <div className="overlay">
                                                            <div className="overlay-text">
                                                                <ul>
                                                                    <li><p>Display: LED-backlit IPS LCD, 5.5", Retina HD</p>
                                                                    </li>
                                                                    <li>Operating System: IOS 11</li>
                                                                    <li>Camera: 12 MP with OIS</li>
                                                                    <li>CPU: Apple A11 Bionic</li>
                                                                    <li>RAM: 3GB</li>
                                                                    <li>ROM: 128GB</li>
                                                                    <li>Battery: 2800mAh</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p>{d.name}</p>
                                                    <p>{d.price}</p>
                                                    <button type="button" className="btn btn-danger">Add to cart</button>
                                                </li>
                                            </a>
                                        </div>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default HotAccessory