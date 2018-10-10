import React, { Component } from 'react';

import './theme/_fonts.css';
import './theme/_colors.css';
import './App.css';

import { Route, Switch, withRouter } from 'react-router-dom'
import { AlertBox, PaymentFootar, PaymentContent, CartContent, CheckoutLayout, CartPageFootar, CheckoutIcon, Button, CheckoutBox, CartItem, CartContentContainer, CheckoutHeaderIcons } from "./components";

const ADDRESS = ["Address 1", "Address 2"];
const CART_CONTENT = [
  {
    itemName: 'The Traditional - 26" Red',
    address: ADDRESS[0],
    imageSource: 'https://lcf.imgix.net/default/The%20Traditional%201%20-%20DSC_6573%20-%20Test.png?h=120',
    quantity: 1,
    price: 45,
    totalPrice: 45,
    message: "",
  },
  {
    itemName: 'Douglas Fir Garland - 18"',
    address: ADDRESS[0],
    imageSource: 'https://lcf.imgix.net/product-images/570425487_xl.png?h=120',
    quantity: 1,
    price: 35,
    totalPrice: 35,
    message: "",
  }
];
const PAYMENT_DETAIL = {
  cardNumber: "444555666",
  cardExpiry: "12/22",
  cardCvc: "111",
  billingAddress: ADDRESS[0],
  totalAmount: 0,
  subTotal: 0,
  shippingCharges: 0,
  tax: 0,
};

class App extends Component {

  constructor() {
    super();

    this.state = {
      cartContent: CART_CONTENT || [],
      paymentDetail: PAYMENT_DETAIL,
      totalCost: 0,
    }
  }

  componentDidMount() {
    this.calculateTotalCost();
  }

  calculateTotalCost = () => {
    let totalCost =  this.state.cartContent.reduce((acc, ele) => {
      return acc + (ele.price * ele.quantity);
    }, 0);

    let paymentDetail = { ...this.state.paymentDetail };

    paymentDetail.subTotal = totalCost;
    paymentDetail.totalAmount = paymentDetail.subTotal + paymentDetail.shippingCharges + paymentDetail.tax;

    this.setState({ totalCost, paymentDetail });
  }

  handleAddressChange = (ind, e) => {
    let cartContent = [...this.state.cartContent];

    cartContent[ind].address = e.target.value;
    this.setState({ cartContent });
  }

  handleQuantityChange = (ind, e) => {
    let cartContent = [...this.state.cartContent];

    cartContent[ind].quantity = Number(e.target.value);
    cartContent[ind].totalPrice = Number(cartContent[ind].quantity) * Number(cartContent[ind].price);
    this.setState({ cartContent }, this.calculateTotalCost);
  }

  handleMessageChange = (ind, e) => {
    let cartContent = [...this.state.cartContent];

    cartContent[ind].message = e.target.value;
    this.setState({ cartContent });
  }

  handleItemRemove = (ind) => {
    let cartContent = [...this.state.cartContent];

    cartContent.splice(ind, 1);
    this.setState({ cartContent }, this.calculateTotalCost);
  }

  handleEmptyCart = () => {
    this.setState({ cartContent: [] });
  }

  handleSaveCart = () => {
    this.showAlert("success", "Your cart has been saved.");
  }

  showAlert = (type, text) => {
    this.setState({ alertType: type, alertText: text });
    setTimeout(() => this.setState({ alertText: "", alertType: "" }), 2000);
  }

  handlePaymentDetailChange = (type, e) => {
    let paymentDetail = {...this.state.paymentDetail};

    paymentDetail[type] = e.target.value;
    this.setState({ paymentDetail });
  }

  handleOrderPlace = () => {
    if (!this.state.paymentDetail.cardNumber) {
      this.showAlert("error", "Card number is required.")
    }
    else if (!this.state.paymentDetail.cardExpiry) {
      this.showAlert("error", "Card expiry info is required.")
    }
    else if (!this.state.paymentDetail.cardCvc) {
      this.showAlert("error", "Card CVC is required.")
    }
    else if (!this.state.paymentDetail.cardExpiry.match(/(0[1-9]|1[0-2])\/(1[8-9]|[2-9][0-9])$/)) {
      this.showAlert("error", "Card expiry date is invalid.")
    }
    else {
      this.showAlert("success", "Your order has been placed.")
    }
  }

  renderHomePage = () => {
    return <a href={"/checkout/cart"}> Go to checkout </a>
  }

  renderCartContent = (props) => {
    return (
      <CartContent 
        {...props}
        addresses={ADDRESS}  
        cartContent={this.state.cartContent} 
        onAddressChange={this.handleAddressChange} 
        onMessageChange={this.handleMessageChange} 
        onItemRemove={this.handleItemRemove}
        handleQuantityChange={this.handleQuantityChange}
      />
    );
  }

  renderPaymentContent = (props) => {
    return (
      <PaymentContent
        {...props}
        addresses={ADDRESS}
        paymentDetail={this.state.paymentDetail}
        onCardNumberChange={this.handlePaymentDetailChange.bind(this, "cardNumber")}
        onCardExpiryChange={this.handlePaymentDetailChange.bind(this, "cardExpiry")}
        onCardCvcChange={this.handlePaymentDetailChange.bind(this, "cardCvc")} 
        onAddressChange={this.handlePaymentDetailChange.bind(this, "billingAddress")}
        onOrderPlace={this.handleOrderPlace}
      />
    );
  }

  renderCartHeader = (props) => {
    return (
      <CheckoutHeaderIcons
        onClickCart={this.goToCart}
        onClickPayment={this.goToPayment}
        cartIconProps={{active: true}}
      />
    )
  }

  renderPaymentHeader = (props) => {
    return (
      <CheckoutHeaderIcons
        onClickCart={this.goToCart}
        onClickPayment={this.goToPayment}
        paymentIconProps={{active: true}}
      />
    )
  }

  renderCartFootar = (props) => {
    return (
      <CartPageFootar 
        amount={this.state.totalCost}
        onEmptyCart={this.handleEmptyCart}
        onCheckout={this.goToPayment}
        onSaveCart={this.handleSaveCart}
      />
    )
  }

  renderPaymentFootar = (props) => {
    return (
      <PaymentFootar />
    )
  }

  goToPayment = () => {
    this.props.history.push("/checkout/payment")
  }

  goToCart = () => {
    this.props.history.push("/checkout/cart")
  }

  render() {
    return (
      <div className="App">
        <CheckoutLayout 
          header={
            <Switch>
              <Route path='/' exact component={this.renderHomePage}/>
              <Route path='/checkout/cart' component={this.renderCartHeader}/>
              <Route path='/checkout/payment' component={this.renderPaymentHeader}/>
            </Switch>
          }
          content={
            <Switch>
              <Route path='/checkout/cart' component={this.renderCartContent}/>
              <Route path='/checkout/payment' component={this.renderPaymentContent}/>
            </Switch>
          }
          footar={
            <Switch>
              <Route path='/checkout/cart' component={this.renderCartFootar}/>
              <Route path='/checkout/payment' component={this.renderPaymentFootar}/>
            </Switch>
          }
        />
        {this.state.alertType && <AlertBox type={this.state.alertType} text={this.state.alertText} />}
      </div>
    );
  }
}

export default withRouter(App);
