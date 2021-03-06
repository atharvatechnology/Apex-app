/**
* This is a template for Register screen. It contains all the modules used in this template.
* @param {Object} props - contains all the propeties of react navigation received from screens.
* @returns {RegisterTemplate}- returns a template
*/

import React from "react";
import { View } from "react-native";

import Register from "@modules/signup/Register";

const RegisterTemplate = (props) => {
  return (
    <Register {...props} />
  );
}

export default RegisterTemplate;