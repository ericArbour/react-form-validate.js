import React from 'react';
import { Field, Select } from 'react-form';
import Message from './Message';

const CustomSelect = props => (
  <Field field={props.field}>
    {fieldApi => {
      const { onChange, onBlur, field, options, ...rest } = props;
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
            value={value || 0}
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
          >
            <option key={0} value={''}>
              Choose a client
            </option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
