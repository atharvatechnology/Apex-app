export const verifyForm = {
  otp: {
    elementConfig: {
      type: 'text',
      placeholder: 'Enter Code here',
      name: 'otp',
      keyboardType: 'phone-pad',
      defaultValue: '',
      label: 'Enter code here',
    },
    //value: '9441122040',
    value: '',
    id: 'otp',
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
      // isPhone: true,
      // regex: otpRegex
    },
  },
};
