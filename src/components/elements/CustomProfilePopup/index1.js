

import React from 'react';

import { View, Image, Text, TouchableOpacity, AppState } from 'react-native';
import styles from '@styles/elements/CustomProfilePopup';
import CustomButton from '../CustomButton';


const CustomProfilePopup1 = props => {

    const handlereset = () => {
        props.navigation.navigate('')
    }

    const closeModal = bool => {
        props.changeModalVisible1(bool);
    };
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.flex1}>
                    <Text style={styles.title}>Reset Password</Text>
                    <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.line}></Text>
                </View>
                <View>
                    <Text style={styles.head}>Do you want to reset your password?</Text>
                </View>
                <View>
                    <Text style={styles.subhead}>You will be redirect to reset password process.</Text>
                </View>

                <CustomButton
                    onPress={handlereset}
                    style={styles.CustomButton}
                    type="theme"
                    title={'Reset'}
                    color="#ffffff"

                />

            </View>
        </TouchableOpacity>
    );
};

export default CustomProfilePopup1;
