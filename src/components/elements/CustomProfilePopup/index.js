

import React from 'react';

import { View, Image, Text, TouchableOpacity, AppState } from 'react-native';
import styles from '@styles/elements/CustomProfilePopup';
import CustomButton from '../CustomButton';


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
