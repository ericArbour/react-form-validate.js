import validate from 'validate.js';

const constraint = {
  value: {
    presence: {
      allowEmpty: false
    }
  }
};

export default value => {
  const result = validate({ value: value }, constraint);
  return {
    error: result ? result.value : null,
    warning: result ? result.value : null,
    success: !result ? 'Valid.' : null
  };
};
