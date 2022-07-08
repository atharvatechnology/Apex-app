import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '@styles/elements/CustomSessionPopup';
import CustomButton from '../CustomButton';


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
                    <Text>Session</Text>
                    <TouchableOpacity
                        onPress={() => closeModal(false, 'Cancel')}
                    >
                        <Text style={styles.close}>Close</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.line}></Text>
                <View>
                    <Text>Choose exam session</Text>
                    <Text>Choosing session will let you to particular session exam enrollment</Text>
                </View>

                <View>
                    {data.map((item, index) => {
                        return (

                            <View key={index}>
                                <Text>{item.title1}</Text>
                                <Text>{item.title2}</Text>
                                <Text>{item.time} pm</Text>

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