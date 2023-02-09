import React from "react";

class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    close = () => {
        this.setState({
            isOpen: false
        })
    }
    open = () => {
        this.setState({
            isOpen: true
        })
    }
    render() {
        const { isOpen } = this.state;
        if (!isOpen) {
            return <ClosedCart open={this.open} />;
        }
        return (
            <>

                <aside className="cart">
                    <div onClick={this.close} className="close-btn">X</div>
                    <div className="cart-body">
                        <div className="cart-heading">
                            <div className="cart-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                                <span className="item-count">4</span>
                            </div>
                            <h2>Cart</h2>
                        </div>
                        <div className="cart-item">
                            <figure className="cart-img">
                                <img src="/static/products/876661122392077_2.jpg" alt="" width="30" />
                            </figure>

                            <div className="cart-item-details">
                                <p className="cart-item-name">Sphynx Tie Dye Wine T-Shirt</p>
                                <p>X | Front tie dye</p>
                                <p>print Quantity: 1</p>
                            </div>
                            <div className="cart-price">
                                <p className="cart-cross">x</p>
                                <p className="price">$ 19.00</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="plus-icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="plus-icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="cart-item">
                            <figure className="cart-img">
                                <img src="/static/products/876661122392077_2.jpg" alt="" width="30" />
                            </figure>
                            <div className="cart-item-details">
                                <p className="cart-item-name">Sphynx Tie Dye Wine T-Shirt</p>
                                <p>X | Front tie dye</p>
                                <p>print Quantity: 1</p>
                            </div>
                            <div className="cart-price">
                                <p className="cart-cross">x</p>
                                <p className="price">$ 19.00</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="plus-icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="plus-icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6">

                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="cart-checkout"><div>
                            <p>SUBTOTAL</p>
                            <p>$ 199.00</p>
                        </div>
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </aside>
            </>

        )
    }
}

function ClosedCart(props) {
    return (
        <div className='close-cart'>
            <span onClick={props.open} className=''>
                <figure className="cart-img">
                    <img src="static/bag-icon.png" alt="cart" />
                </figure>
            </span>
        </div>
    );
}


export default Cart;