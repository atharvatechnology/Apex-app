import React, { useState } from 'react';
import { Modal } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from '@apexapp/components/elements/CustomModal'



const CustomModal = (props) => {

    const [isVisible, setIsVisible] = useState(false)


    const openPopup = () => {
        setIsVisible(true)
    }

    const closePopup = () => {
        setIsVisible(false)
    }
    return (
        <>
            <TouchableOpacity
                style={styles.open}
                onPress={openPopup}>open </TouchableOpacity>



            <Modal
                animationType="slide"
                transparent={false}
                isVisible={isVisible}
                backdropColor={"white"}
                style={styles.modal}
            >
                <View style={styles.content}>
                    {props.children}
                </View>
            </Modal>
        </>
    )
}

export default CustomModal;