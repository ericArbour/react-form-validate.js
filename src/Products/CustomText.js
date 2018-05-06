import React from 'react';
import { Field } from 'react-form';
import Message from './Message';
import validationRules from './validationRules';

const CustomText = props => (
  <Field validate={validationRules} field={props.field}>
    {fieldApi => {
      const { onChange, onBlur, field, ...rest } = props;
      const { value, error, warning, success, setValue, setTouched } = fieldApi;

      return (
        <div>
          <input
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
          />
          {error ? <Message color="red" message={error} /> : null}
          {!error && warning ? (
            <Message color="orange" message={warning} />
          ) : null}
          {!error && !warning && success ? (
            <Message color="green" message={success} />
          ) : null}
        </div>
      );
    }}
  </Field>
);

export default CustomText;
