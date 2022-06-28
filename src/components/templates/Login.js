/**
* This is a template for Register screen. It contains all the modules used in this template.
* @param {Object} props - contains all the propeties of react navigation received from screens.
* @returns {LoginTemplate}- returns a template
*/


import React from "react";
import { View } from "react-native";


import Login from "@modules/signin/Login";

const LoginTemplate = (props) => {
    return (
        <Login {...props} />
    );
}

export default LoginTemplate;