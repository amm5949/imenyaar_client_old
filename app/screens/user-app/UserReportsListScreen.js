import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import useApi from '../../api/useApi'
import { getZones } from '../../api/zones'
import AppPicker from '../../components/AppPicker'
import AppText from '../../components/AppText'
import ZoneListIcon from '../../components/icons/ZoneListIcon'
import ListItem from '../../components/ListItem'
import ListItemActions from '../../components/ListItemActions'
import LoadingAnimation from '../../components/LoadingAnimation'
import ScreenHeader from '../../components/ScreenHeader'
import colors from '../../config/colors'
import ReportListIcon from '../../components/icons/ReportListIcon'
import CircularIcon from '../../components/CircularIcon'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './UserReportsListScreen.style'

const initialReportsArray = [
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
  {
    person: 'حسن علی آبادی',
    activity: 'سیم کشی ساختمان',
    zone: 'زون شماره 1',
    date: '00/02/14',
  },
]
const projectsArray = [' پروژه برج مروارید', 'پروژه ساخت هوشمند']
const zonesArray = ['زون شماره اول', 'زون شماره دوم']
let isMounted = false

const EmptyList = () => (
  <View style={styles.generalStyle}>
    <Image
      source={require('../../assets/list_report_screen/empty-list.png')}
      style={styles.emptyListImage}
      resizeMode="cover"
    />
    <AppText style={styles.notFoundText}>هنوز پروژه ای ثبت نشده است</AppText>
  </View>
)

const LoadingList = (loading) => (
  <View style={styles.generalStyle}>
    <LoadingAnimation visible={loading} />
  </View>
)

const DataList = (array) => (
  <ScrollView persistentScrollbar={true} style={styles.scrollViewStyle}>
    <View style={styles.textContainer}>
      {array.map((item, index) => (
        <ListItem
          key={index}
          header={'گزارش ثبت شده از ' + item.person}
          detailsFirst={'فعالیت: ' + item.activity}
          detailsSecond={'زون: ' + item.zone}
          date={item.date}
          IconComponent={<ReportListIcon size={30} />}
          // onPress={() => props.navigation.navigate("ReportDetail")}
          renderRightActions={(progress, dragx) => (
            <ListItemActions
              progress={progress}
              dragx={dragx}
              onPressDelete={() => console.log(item.header, ' deleted')}
              onPressEdit={() => console.log(item.header, ' edited')}
            />
          )}
        />
      ))}
    </View>
  </ScrollView>
)

const renderScreen = (array, loading) => {
  if (loading || array == null) return LoadingList(loading)
  else if (array.length === 0) return EmptyList()
  else return DataList(array)
}

function UserReportsListScreen(props) {
  const [reportsArray, setReportsArray] = useState(initialReportsArray)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    isMounted = true

    setTimeout(() => {
      if (isMounted) setLoading(false)
    }, 1000)
  }, [])

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require('../../assets/list_report_screen/sample-profile.jpg')}
        headerText="لیست گزارشات"
        onPressNavigation={() => props.navigation.openDrawer()}
      />
      {/* <AppPicker
                choices={projectsArray}
                placeholder="مثال : پروژه ساخت هوشمند"
                title="نام پروژه"
                required
                mode={"TOP"}
            />
            <AppPicker
                choices={zonesArray}
                placeholder="مثال : زون شماره اول"
                title="نام زون"
                required
                mode={"BOTTOM"}
            /> */}
      {renderScreen(reportsArray, loading)}
      <View style={styles.addButtonView}>
        <CircularIcon
          // onPress={() => props.navigation.navigate("ProjectCreation")}
          Icon={
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={colors.white}
            />
          }
          color={colors.yellow}
          size={50}
          onPress={() => props.navigation.navigate('UserAddReportScreen')}
        />
      </View>
    </View>
  )
}

export default UserReportsListScreen