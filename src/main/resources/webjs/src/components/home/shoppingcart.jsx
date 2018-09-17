import React from 'react'

 class ShoppingCart extends React.Component{
    render(){
        return(
                <div id="main">
                    <div className="container">
                        <h3>Giỏ hàng</h3>
                        <div className="row">
                            <div className="col-md-9 col-sm-12">
                                <div className="padding-top">
                                    <input type="text" className="form-control" placeholder="Input a promotional search"/>
                                        <div>
                                            <div className="cart-list text-center padding-top">
                                                <div className="row">
                                                    <div className="col-md-6 hidden-sm hidden-xs">
                                                        <span className="text-font">Item</span>
                                                    </div>
                                                    <div className="col-md-2 hidden-sm hidden-xs">
                                                        <span className="text-font">Price</span>
                                                    </div>
                                                    <div className="col-md-1 hidden-sm hidden-xs">
                                                        <span className="text-font">Quantity</span>
                                                    </div>
                                                    <div className="col-md-3 hidden-sm hidden-xs">
                                                        <span className="text-font">Subtotal</span>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="cart__item clear-fix">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12">
                                                            <div className="item__desc">
                                                                <div className="row">
                                                                    <div className="col-xs-6">
                                                                        <div className="item__image">
                                                                            <img alt="Placholder Image 2"
                                                                                 className="product-frame img-responsive"/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">
                                                                        <div className="item__details">
                                                                            <h1><strong><span className="item-quantity"></span></strong>
                                                                            </h1>
                                                                            <p><strong>Navy, Size 18</strong></p>
                                                                            <p>Product Code - 232321939</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2 col-xs-4">
                                                            <div className="item__price">
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1 col-xs-4">
                                                            <div className="item__quantity">
                                                                <input type="number" min="1"
                                                                       className="quantity-field"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3 col-xs-4">
                                                            <div className="item__subtotal">
                                                                <span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="item__action">
                                                        <button className="btn btn-danger remove-out-cart">Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12">
                                <div className="cart-summary">
                                    <div className="summary__total-items"><span className="total-items"></span> Items in your Bag</div>
                                    <hr/>
                                    <div className="summary__subtotal padding-bottom">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <div className="subtotal__title">Subtotal</div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="subtotal__value final-value text-center" id="cart-subtotal">130.00</div>
                                            </div>
                                        </div>
                                        <div className="summary__promo hide">
                                            <div className="promo__title">Promotion</div>
                                            <div className="promo__value final-value" id="cart-promo"></div>
                                        </div>
                                    </div>
                                    <div className="summary__total padding-bottom">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <div className="total__title">Total</div>
                                            </div>
                                            <div className="col-xs-6">
                                                <div className="total__value final-value text-center" id="cart-total">130.00</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="summary__checkout text-center">
                                        <button className="checkout-cta btn btn-primary">Thanh toán</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}
export default ShoppingCart