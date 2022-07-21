import React from "react";
import { View, Text, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { RadioButton } from 'react-native-paper';
import RenderHTML from "react-native-render-html";

import HeaderSearch from "@components/elements/HeaderSearch/HeaderSearch";
import styles from '@styles/modules/Exams/ExamResults.scss';


const ExamResults = (props) => {

  // const []

  const dispatch = useDispatch();
  // const examDetails = useSelector(state => state.examsReducer.examDetail);
  const auth = useSelector(state => state.authReducer);
  const result = useSelector(state => state.examsReducer.examResult);

  return <View>
    {/* {console.log(props.route.params.enrollId)} */}
    <HeaderSearch
      title={result.exam.name}
      navigation={props.navigation}
    // backnav="Exam"
    />
    <View style={styles.overviewContainer}><Text>Overview</Text></View>

    <View style={styles.questionsContainer}>

      {
        result.exam.questions.map((question, questionIndex) => <View key={questionIndex}>
          <Text>{questionIndex + 1}</Text>
          <Image
            style={[

            ]}
            source={{ uri: question.img }}
          />

          <RenderHTML
            // contentWidth={100}
            baseStyle={styles.text}
            source={{ html: question.detail }}
          />

          {question.options.map((option, optionIndex) => <View key={optionIndex}>
            <RadioButton
              color="#2E3192"
              style={styles.radi01}
              value={'test'}
              status={'checked'}
              onPress={() => { }}
            />
            <RenderHTML
              // contentWidth={100}
              baseStyle={styles.text}
              source={{ html: option.detail }}
            />
            <Text>{option.detail}</Text>
          </View>)}






        </View>)
      }

    </View>
  </View>
}

export default ExamResults