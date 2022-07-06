import React from 'react';

import { View } from 'react-native';

import ExamDetailPage from '@apexapp/components/templates/ExamDetail';

const ExamDetail = props => {
    return (
        <View>
            <ExamDetailPage {...props} />
        </View>
    );
};

export default ExamDetail;
