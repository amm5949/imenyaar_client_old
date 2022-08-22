import React from 'react'
import {
  ImageBackground,
  ScrollView,
  View,
} from 'react-native'
import AppText from '../../components/AppText'
import ProjectPersonIcon from '../../components/icons/ProjectPersonIcon'
import TelephoneIcon from '../../components/icons/TelephoneIcon'
import colors from '../../config/colors'
import { styles } from './PersonDetailsScreen.style'
import CircularIcon from '../../components/CircularIcon'
import { MaterialCommunityIcons } from '@expo/vector-icons'

function PersonDetailsScreen(props) {
  return (
    <ScrollView style={styles.mainStyle}>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('../../assets/list_report_screen/background-2.jpg')}
            style={styles.imageBackground}
            resizeMode="cover"
          >
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
              color={colors.yellow}
              style={styles.backButton}
            />
          </ImageBackground>
        </View>

        <View style={styles.detailsView}>
          <ScrollView style={styles.personDetailsContainer}>
            <AppText style={styles.headerText}>
              جزئیات افراد پروژه برج مروارید
            </AppText>
            <View style={styles.zoneDetailsView}>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.darkBlue }]}
                >
                  نام:{' '}
                  <AppText style={styles.detailsHeaderText}>
                    {props.route.params.firstName}
                  </AppText>
                </AppText>
                <ProjectPersonIcon color={colors.darkBlue} size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: '#58508d' }]}
                >
                  نام خانوادگی:{' '}
                  <AppText style={styles.detailsHeaderText}>
                    {props.route.params.lastName}
                  </AppText>
                </AppText>
                <ProjectPersonIcon color="#58508d" size={25} />
              </View>
              <View style={styles.zoneDetailsHeaderView}>
                <AppText
                  style={[styles.detailsHeaderText, { color: colors.yellow }]}
                >
                  شماره تماس:{' '}
                  <AppText style={styles.detailsHeaderText}>
                    {props.route.params.phoneNumber}
                  </AppText>
                </AppText>
                <TelephoneIcon size={25} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}

export default PersonDetailsScreen
