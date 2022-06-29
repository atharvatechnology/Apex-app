const validate = (val, rules, connectedValue = null) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case "isPhone":
        isValid = isValid && phoneValidator(val);
        break;
      case "isPassword":
        isValid = isValid && passwordValidator(val);
        // case "equalTo":
        //     isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      case "required":
        isValid = isValid && notEmptyValidator(val);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
};

const emailValidator = val => {
  return new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(
    val
  );
};

const phoneValidator = val => {
  return new RegExp(/^(9(8|7))\d{8}$/).test(val);

}
const passwordValidator = val => {
  return new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$').test(val)
}

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
};

const equalToValidator = (val, checkValue) => {
  return val === checkValue;
};

const notEmptyValidator = val => {
  // return val.trim() !== "";
};

export default validate;