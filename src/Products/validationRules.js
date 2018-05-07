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
  console.log(result);
  return {
    name: {
      error: result.name ? result.name : null,
      warning: result.name ? result.name : null,
      success: !result.name ? 'Valid.' : null
    },
    code: {
      error: result.code ? result.code : null,
      warning: result.code ? result.code : null,
      success: !result.code ? 'Valid.' : null
    },
    description: {
      error: result.description ? result.description : null,
      warning: result.description ? result.description : null,
      success: !result.description ? 'Valid.' : null
    },
    client: {
      error: result.client ? result.client : null,
      warning: result.client ? result.client : null,
      success: !result.client ? 'Valid.' : null
    }
  };
};
