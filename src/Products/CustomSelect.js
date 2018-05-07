import React from 'react';
import { Field, Select } from 'react-form';
import Message from './Message';

const CustomSelect = props => (
  <Field field={props.field}>
    {fieldApi => {
      console.log(fieldApi);
      const { onChange, onBlur, field, placeholder, ...rest } = props;
      const {
        value,
        error,
        warning,
        success,
        setValue,
        touched,
        setTouched
      } = fieldApi;

      return (
        <div>
          <select
            {...rest}
            value={value || ''}
            onChange={e => {
              setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value, e);
              }
            }}
            onBlur={e => {
              setTouched();
              if (onBlur) {
                onBlur(e);
              }
            }}
            defaultValue={placeholder}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          {error && touched ? <Message color="red" message={error} /> : null}
          {!error && warning && touched ? (
            <Message color="orange" message={warning} />
          ) : null}
          {!error && !warning && success && touched ? (
            <Message color="green" message={success} />
          ) : null}
        </div>
      );
    }}
  </Field>
);

export default CustomSelect;
