import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styles from '@styles/elements/CustomButtonPopup.scss';
import CustomButton from '../CustomButton';
import CheckBox from '@react-native-community/eslint-config'



const CustomButtonPopup = (props) => {

    closeModal = (bool) => {
        props.changeModalVisible(bool);

    }

    const handlefilter = () => {

    }
    return (

        <TouchableOpacity
            disabled={true}
            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.flex1}>
                    <Text style={styles.title}>Filter</Text>
                    <TouchableOpacity
                        onPress={() => closeModal(false, 'Cancel')}
                    >
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.line}></Text>

                <View>
                    <Text style={styles.type}>Type</Text>
                    <View style={styles.type1}>
                        <Text style={styles.type2}>All</Text>
                        <Text style={styles.type3}>Live</Text>
                        <Text style={styles.type4}>Practice</Text>
                    </View>
                </View>


                <View>
                    <Text style={styles.category}>Category</Text>
                    <View style={styles.category1}>
                        <Text style={styles.category2}>Entrance preparation</Text>
                        <Text style={styles.category3}>Loksewa preparation</Text>
                    </View>

                </View>




                <View style={styles.flex2}>

                    <CustomButton
                        style={styles.CustomButton1}
                        type="white"
                        title={'Reset filter'}
                        onPress={handlefilter}
                        color='#000000'

                    />
                    <CustomButton
                        style={styles.CustomButton2}
                        type="theme"
                        title={'Apply filter'}
                        onPress={handlefilter}
                        color="#ffffff"

                    />


                </View>
            </View>
        </TouchableOpacity>

    )
}


export default CustomButtonPopup