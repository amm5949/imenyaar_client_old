import React, { useRef } from 'react'
import { View, Dimensions, ScrollView, Image, Text } from 'react-native'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import colors from '../../config/colors'
import BackwardArrowIcon from '../../components/icons/BackwardArrowIcon'
import { useSelector } from 'react-redux'
import { createUser } from '../../api/people/create'
import { createReport } from '../../api/reports/create'
import { styles } from './ReportCreateScreen.style'

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

const ReportCreateScreen = (props) => {
  const ref = useRef()
  console.log(props)
  const userData = useSelector((state) => state.user)

  const handleSubmit = async (values) => {
    const reportValue = {
      creation_date: toString(new Date()),
      zone_id: parseInt(values.zone_id),
      activity_id: parseInt(values.activity_id),
      question_id: parseInt(values.question_id),
    }

    await createReport(userData?.user.result.tokens.access_token, reportValue)

    props.navigation.goBack()

    console.log('here')
  }
  return (
    <Formik
      initialValues={{ zone_id: '', activity_id: '', question_id: '' }}
      onSubmit={handleSubmit}
      innerRef={ref}
    >
      {({
        handleChange,
        handleSubmit,
        errors,
        setFieldTouched,
        touched,
        enableReinitialize,
      }) => (
        <View style={styles.screenView}>
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              minHeight: 0.55 * windowHeight,
              width: '100vw',
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/list_report_screen/add.png')}
                style={styles.image}
              />
              <Text style={styles.headerTitle}>افزودن گزارش</Text>
            </View>
            <View style={styles.formView}>
              <AppTextInput
                label="آیدی زون"
                onBlur={() => setFieldTouched('zone_id')}
                onChangeText={handleChange('zone_id')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="آیدی فعالیت"
                onBlur={() => setFieldTouched('activity_id')}
                onChangeText={handleChange('activity_id')}
                required
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="آیدی سوال"
                onBlur={() => setFieldTouched('question_id')}
                onChangeText={handleChange('question_id')}
                required
                containerStyle={{ width: '100%' }}
              />
            </View>
          </ScrollView>
          <AppButton
            title="افزودن گزارش"
            color={colors.yellow}
            viewStyle={{
              width: '100%',
            }}
            textStyle={{
              fontSize: 14 / fontScale,
              color: colors.white,
              marginRight: 3,
            }}
            RightIcon={<BackwardArrowIcon size={14} color={colors.white} />}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  )
}

export default ReportCreateScreen
