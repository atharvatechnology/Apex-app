import React, { useState } from 'react'
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import styles from '@styles/modules/Pages/Exam'
import CustomDropdown from '@apexapp/components/elements/CustomDropdown'
import CustomButton from '@apexapp/components/elements/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';




let preparation = [
    {
        id: 1,
        name: '',
    },
];

const data = [
    {
        icon: "",
        title: 'LIVE',
        title1: 'RBB',
        text: 'Loksewa Mock Test - 1',
        amount: `Rs.500   \u25CF 60 min`,
    },

    {
        icon: "",
        title: 'LIVE',
        title1: 'RBB',
        text: 'Loksewa Mock Test - 1',
        amount: `Rs.500    \u25CF 60 min`,
    },

    {
        icon: "",
        title: 'LIVE',
        title1: 'RBB',
        text: 'Loksewa Mock Test - 1',
        amount: `Rs.500   \u25CF 60 min`,
    },
    {
        icon: "",
        title: 'LIVE',
        title1: 'RBB',
        text: 'Loksewa Mock Test - 1',
        amount: `Rs.500   \u25CF 60 min`,
    },
    {
        icon: "",
        title: 'LIVE',
        title1: 'RBB',
        text: 'Loksewa Mock Test - 1',
        amount: `Rs.500   \u25CF 60 min`,
    },



]

const Exam = (props) => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const onSelect = item => {
        setSelectedItem(item.id);
        setShow(true);
    };
    const handleArrow = () => {
        props.navigation.navigate('')
    }

    const handleFilter = () => {
        props.navigation.navigate('')
    }

    return (

        <>
            <TouchableOpacity onPress={handleArrow} style={styles.left}>

                <Image source={require('@assets/images/leftArrow.png')} />
                <Text style={styles.p}>Exams</Text>
            </TouchableOpacity>

            <View style={styles.searchandfilter}>

                <CustomDropdown
                    style={styles.CustomDropDown}
                    value={selectedItem}
                    data={preparation}
                    onSelect={onSelect}
                    label="Search here"
                />
                <TouchableOpacity onPress={handleFilter}  >
                    <Image style={styles.filter}
                        source={require('@assets/images/filter.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView nestedScrollEnabled={true}>
                <View >
                    {data.map((item, index) => {
                        return (
                            <View style={styles.main}>
                                <View style={styles.card}>
                                    <Text style={styles.icon}>{item.icon}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.title1}>{item.title1}</Text>
                                </View>

                                <View>
                                    <Text style={styles.text}>{item.text}</Text>

                                    <Text style={styles.amount}>{item.amount}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>

                <View>
                    <CustomButton
                        type="theme"
                        title={"Load More"}
                        style={styles.button}
                        color="#000000"
                    />

                </View>
                <View style={{ height: Dimensions.get("window").height }}></View>
            </ScrollView>
        </>

    )
}

export default Exam