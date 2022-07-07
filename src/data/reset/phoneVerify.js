export const phoneVerifyForm = {
  username: {
    elementConfig: {
      type: 'text',
      placeholder: 'Enter phone number',
      name: 'username',
      keyboardType: 'phone-pad',
      defaultValue: '',
      label: 'Enter phone number',
    },
    //value: '9441122040',
    value: '',
    id: 'username',
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: 'Code should be a number',
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      isPhone: true,
      // regex: usernameRegex
    },
  },
};
