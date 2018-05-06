import React, { Component } from 'react';
import { Form, Text, Select } from 'react-form';
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
    console.log(this.state.values);
    return (
      <div>
        <h2>Product Input Form</h2>
        <Form onSubmit={values => this.setState({ values })}>
          {formApi => (
            <form onSubmit={formApi.submitForm} id="form1" className="mb-4">
              <label htmlFor="name">Product Name</label>
              <Text field="name" id="name" />
              <label htmlFor="code">Product Code</label>
              <Text field="code" id="code" />
              <label htmlFor="description">Product Description</label>
              <Text field="description" id="description" />
              <label htmlFor="client">Client</label>
              <Select
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
          )}
        </Form>
      </div>
    );
  }
}

export default ProductForm;
