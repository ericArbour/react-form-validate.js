import React from 'react';
import { Field } from 'react-form';
import Message from './Message';

const CustomText = props => (
  <Field field={props.field}>
    {fieldApi => {
      const { onChange, onBlur, field, ...rest } = props;
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

export default CustomText;
