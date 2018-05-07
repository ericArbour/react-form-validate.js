import React, { Component } from 'react';
import { Form } from 'react-form';
import CustomText from './CustomText';
import CustomSelect from './CustomSelect';
import validationRules from './validationRules';
import clients from './clients';
import './ProductForm.css';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: {}
    };
  }

  render() {
    return (
      <div>
        <h3>Product Input Form</h3>
        <Form
          onSubmit={values => this.setState({ values })}
          validate={validationRules}
        >
          {formApi => {
            return (
              <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
                <label htmlFor="name">Product Name</label>
                <CustomText field="name" id="name" />
                <label htmlFor="code">Product Code</label>
                <CustomText field="code" id="code" />
                <label htmlFor="description">Product Description</label>
                <CustomText field="description" id="description" />
                <label htmlFor="client">Client</label>
                <CustomSelect
                  field="client"
                  id="client"
                  options={clients}
                  placeholder={'Choose a client'}
                  className="mb-4"
                />
                <button type="submit" className="btn btn-primary">
                  Submit Product
                </button>
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default ProductForm;
