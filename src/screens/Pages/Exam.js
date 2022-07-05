import React from 'react';
import { View } from 'react-native';


import ExamPage from '@apexapp/components/templates/Exam';

const Exam = props => {
    return (
        <View>
            <ExamPage {...props} />
        </View>
    );
};

export default Exam;
