export const changePasswordForm = {

  password: {
    elementConfig: {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      label: 'Password',
    },
    //value: 'shrestha10$',
    id: 'password',
    value: '',
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage:
      'Password must be same as above',
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      // isPassword: true,
      // minLength: 6,
      // regex: passwordRegex,
    },
  },

  confirmPassword: {
    elementConfig: {
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
      label: 'Confirm Password'
    },
    //value: 'shrestha10$',
    id: "confirmpassword",
    value: '',
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: "Password must be atleast 6 characters long and a number should be included",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      // isPassword: true,
      // minLength: 6,
      isEqualTo: true
      // regex: passwordRegex,
    }
  },
};
