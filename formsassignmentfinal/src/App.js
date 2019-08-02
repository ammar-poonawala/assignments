import React, { Component } from 'react';
import './App.css';


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  //check if form err is empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  //check form values are null 
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });


  return valid;
};

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      productName: null,
      quantity: null,
      productPrice: null,
      formErrors: {
        firstName: "",
        productName: "",
        quantityErr: "",
        productPrice: ""

      }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //formValid is true then submit
    if (formValid(this.state)) {
      console.log(`Submitting 
      User name : ${this.state.firstName}
      Product name : ${this.state.productName}
      productPrice : ${this.state.productPrice}
      quantity : ${this.state.quantity}`

      );
      alert("submitted")

    } else {
      console.error("form is invalid  ");
      alert("form error")

    }
  };

  handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
    let formErrors = this.state.formErrors;
    // console.log(name)
    // console.log(value)

    switch (name) {
      case 'firstName':
        formErrors.firstName =
          value.length < 5 ? "min 5 char required " : "";
        break;
      case 'productName':
        formErrors.productName =
          value.length < 3 ? "min 3 char required " : "";
        break;
      case 'quantity':
        formErrors.quantityErr =
          (!(isNaN(value))) && value != 0 && value.length < 2 ? '' : 'too high quantity';
        break;
      case 'productPrice':
        formErrors.productPrice = (!(isNaN(value))) && value != 0 ? '' : 'invalid  price';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="App">
        <h2> Day5 form assignment</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <div >
            User Name:
              <input
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              onChange={this.handleChange}
            /><div>
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

          </div>

          <div >
            Product Name:
              <input
              className={formErrors.productName.length > 0 ? "error" : null}
              placeholder="Product Name"
              type="text"
              name="productName"
              noValidate
              onChange={this.handleChange}
            />
            <div>
              {formErrors.productName.length > 0 && (
                <span className="errorMessage">{formErrors.productName}</span>
              )}</div>
          </div>



          <div>
            Product Price:
              <input
              className={formErrors.productPrice.length > 0 ? "error" : null}
              placeholder="productPrice"
              type="text"
              name="productPrice"
              noValidate
              onChange={this.handleChange}
            />
            <div>
              {formErrors.productPrice.length > 0 && (
                <span className="errorMessage">{formErrors.productPrice}</span>
              )}
            </div>
          </div>


          <div>
            Quantity:
              <input
              className={formErrors.quantityErr.length > 0 ? "error" : null}
              placeholder="quantity"
              type="number"
              name="quantity"
              noValidate
              onChange={this.handleChange}
            />
            <div>
              {formErrors.quantityErr.length > 0 && (
                <span className="errorMessage">{formErrors.quantityErr}</span>
              )}
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>

          </div>
        </form>

      </div>
    );
  }
}

export default App;
