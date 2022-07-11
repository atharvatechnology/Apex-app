/**
 * This is a Session popup Component
 
 * @param {Function} props.onPress - function to execute on pressing

 * @returns {CustomSessionPopup}- returns a popup Component
 */

import React, { useState, useEffect } from 'react'

import { View, Image, Text, TouchableOpacity, AppState } from 'react-native'

import CustomButton from '../CustomButton';
import styles from '@styles/elements/CustomSessionPopup';



const data = [
    {
        title1: "Session 1",
        title2: "Time",
        time: "5.00"
    },
    {
        title1: "Session 2",
        title2: "Time",
        time: "5.00"
    },
    {
        title1: "Session 3",
        title2: "Time",
        time: "5.00"
    },

]
const CustomSessionPopup = (props) => {

    const handleEnroll = () => {

    }

    const closeModal = (bool) => {
        props.changeModalVisible(bool);
    }





    return (

        <TouchableOpacity
            disabled={true}

            style={styles.container}
        >
            <View style={styles.modal}>
                <View style={styles.flex1}>
                    <Text style={styles.head}>Session</Text>
                    <TouchableOpacity
                        onPress={() => closeModal(false, 'Cancel')}
                    >
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.line}></Text>
                <View>
                    <Text style={styles.topic}>Choose exam session</Text>
                    <Text style={styles.p}>Choosing session will let you to particular session exam enrollment</Text>
                </View>

                <View style={styles.flex2}>
                    {data.map((item, index) => {
                        return (


                            <View style={styles.data}
                                key={index}>

                                <View >
                                    <Text style={styles.title1}>{item.title1}</Text>
                                    <View style={styles.flex3}>
                                        <View style={styles.iconback}>
                                            <Image style={styles.clockicon}
                                                source={require('@assets/images/Vector.png')} />
                                        </View>
                                        <View>
                                            <Text style={styles.title2}>{item.title2}</Text>
                                            <Text style={styles.time}>{item.time} pm</Text>
                                        </View>
                                    </View>
                                </View>

                                <CustomButton
                                    onPress={handleEnroll}
                                    style={styles.CustomButton}
                                    type="theme"
                                    title={'Enroll now'}
                                    color="#ffffff"
                                />
                            </View>


                        )
                    })}

                </View>


            </View>
        </TouchableOpacity>

    )
}

export default CustomSessionPopup