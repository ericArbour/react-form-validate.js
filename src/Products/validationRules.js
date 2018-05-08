import validate from 'validate.js';

const constraint = {
  name: {
    presence: {
      allowEmpty: false
    }
  },
  code: {
    presence: {
      allowEmpty: false
    }
  },
  description: {
    presence: {
      allowEmpty: false
    }
  },
  client: {
    presence: {
      allowEmpty: false
    }
  }
};

export default values => {
  const result = validate(values, constraint);

  return {
    name: {
      error: result && result.name ? result.name : null,
      warning: result && result.name ? result.name : null,
      success: !result || !result.name ? 'valid' : null
    },
    code: {
      error: result && result.code ? result.code : null,
      warning: result && result.code ? result.code : null,
      success: !result || !result.code ? 'valid' : null
    },
    description: {
      error: result && result.description ? result.description : null,
      warning: result && result.description ? result.description : null,
      success: !result || !result.description ? 'valid' : null
    },
    client: {
      error: result && result.client ? result.client : null,
      warning: result && result.client ? result.client : null,
      success: !result || !result.client ? 'valid' : null
    }
  };
};
