import React, { useRef } from 'react'
import { View, Text, Dimensions, ScrollView, Image } from 'react-native'
import { Formik } from 'formik'
import AppButton from '../../components/AppButton'
import AppTextInput from '../../components/AppTextInput'
import colors from '../../config/colors'
import BackwardArrowIcon from '../../components/icons/BackwardArrowIcon'
import { useSelector } from 'react-redux'
import { updateReport } from '../../api/reports/update'
import { styles } from './ReportEditScreen.style'
import CircularIcon from '../../components/CircularIcon'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const windowHeight = Dimensions.get('window').height
const fontScale = Dimensions.get('window').fontScale

function ReportEditScreen(props) {
  const ref = useRef()
  console.log(props)
  const item = props.route.params
  const userData = useSelector((state) => state.user)

  const handleSubmit = async (values) => {
    const data = {
      creation_date: toString(new Date()),
      zone_id: parseInt(values.zone_id),
      activity_id: parseInt(values.activity_id),
      question_id: parseInt(values.question_id),
    }
    console.log(data)
    await updateReport(userData?.user.result.tokens.access_token, item.id, data)
    props.navigation.goBack()
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
              <CircularIcon
                Icon={
                  <MaterialCommunityIcons
                    name="arrow-left-bold"
                    size={35}
                    color="white"
                  />
                }
                size={45}
                onPress={() => props.navigation.goBack()}
                color={'black'}
                style={styles.backButton}
              />
              <Text style={styles.headerTitle}>ویرایش گزارش</Text>
              <Image
                source={require('../../assets/list_report_screen/change.png')}
                style={styles.image}
              />
            </View>
            <View style={styles.formView}>
              <AppTextInput
                label="آیدی زون"
                onBlur={() => setFieldTouched('zone_id')}
                onChangeText={handleChange('zone_id')}
                required
                value={item.zone_id}
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="آیدی فعالیت"
                required
                onBlur={() => setFieldTouched('activity_id')}
                onChangeText={handleChange('activity_id')}
                value={item.activity_id}
                containerStyle={{ width: '100%' }}
              />
              <AppTextInput
                label="آیدی سوال"
                required
                onBlur={() => setFieldTouched('question_id')}
                onChangeText={handleChange('question_id')}
                value={item.question_id}
                containerStyle={{ width: '100%' }}
              />
            </View>
          </ScrollView>
          <AppButton
            title="ویرایش"
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

export default ReportEditScreen
