/**
 * This is a profilepopup Component

 * @param {Function} props.onPress - function to execute on pressing

 * @returns {CustomProfilePopup}- returns a logout popup Component
 */

import React from 'react';

import { View, Image, Text, TouchableOpacity, AppState } from 'react-native';

import CustomButton from '../CustomButton';
import styles from '@styles/elements/CustomProfilePopup';



const CustomProfilePopup = props => {

    const handlelogout = () => {
        props.navigation.navigate('')
    }

    const closeModal = bool => {
        props.changeModalVisible(bool);
    };
    return (
        <TouchableOpacity disabled={true} style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.flex1}>
                    <Text style={styles.title}>Logout</Text>
                    <TouchableOpacity onPress={() => closeModal(false, 'Cancel')}>
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.line}></Text>
                </View>
                <View>
                    <Text style={styles.head}>Do you want to Logout?</Text>
                </View>

                <CustomButton
                    onPress={handlelogout}
                    style={styles.CustomButton}
                    type="theme"
                    title={'Logout'}
                    color="#ffffff"
                    backgroundColor="##2E3192"
                />

            </View>
        </TouchableOpacity>
    );
};

export default CustomProfilePopup;
