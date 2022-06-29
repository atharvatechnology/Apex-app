export const registerForm = {
  fullName: {
    elementConfig: {
      type: "text",
      placeholder: "Full Name",
      name: "fullName",
      keyboardType: 'phone-pad',
      defaultValue: "+977",
      label: 'Full Name'
    },
    //value: '9441122040',
    value: '',
    id: "fullName",
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: "",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      // isPhone: true
      // regex: phoneNumberRegex
    },
  },
  phoneNumber: {
    elementConfig: {
      type: "text",
      placeholder: "Phone number",
      name: "phoneNumber",
      keyboardType: 'phone-pad',
      defaultValue: "+977",
      label: 'Phone number'
    },
    //value: '9441122040',
    value: '',
    id: "phonenumber",
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: "Phone number should start with 98/97 ",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      isPhone: true
      // regex: phoneNumberRegex
    },
  },
  email: {
    elementConfig: {
      type: "text",
      placeholder: "Email(Optional)",
      name: "email",
      keyboardType: '',
      defaultValue: "",
      label: 'Email(Optional)'
    },
    //value: '9441122040',
    value: '',
    id: "email",
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: "Enter correct Email format",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      // isPhone: true
      // regex: phoneNumberRegex
    },
  },
  password: {
    elementConfig: {
      type: "password",
      placeholder: "Password",
      name: "password",
      label: 'Password'
    },
    //value: 'shrestha10$',
    id: "password",
    value: '',
    valid: false,
    focus: null,
    touched: false,
    autoFocus: true,
    showError: false,
    showEmptyError: false,
    errorMessage: "Password must be atleast 6 characters long and a number",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      isPassword: true,
      minLength: 6
      // regex: passwordRegex,
    }
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
    errorMessage: "Password must be atleast 6 characters long and a number",
    style: { marginBottom: 4 },
    validationRules: {
      required: true,
      isPassword: true,
      minLength: 6
      // regex: passwordRegex,
    }
  },

};