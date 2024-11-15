import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import AppText from '../../components/AppText'
import CircularIcon from '../../components/CircularIcon'
import ProjectItem from '../../components/ProjectItem'
import ScreenHeader from '../../components/ScreenHeader'
import colors from '../../config/colors'
import { getProjects } from '../../api/projects'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'

import { styles } from './ProjectsListScreen.style'

function ProjectsListScreen(props) {
  const [projectsArray, setProjectsArray] = useState(null)
  const [active, setActive] = useState(true)

  const isFocused = useIsFocused()

  const userData = useSelector((state) => state.user)
  console.log('props =>>>>> ', props)

  const fetchProjects = async () => {
    const projects = await getProjects(
      userData?.user.result.tokens.access_token
    )
    console.log('my projects => ', projects.data.result.items)
    setProjectsArray(projects.data.result.items)
  }

  useEffect(() => {
    fetchProjects()
  }, [isFocused])

  return (
    <View style={styles.container}>
      <ScreenHeader
        profilePicture={require('../../assets/list_report_screen/sample-profile.jpg')}
        headerText="پروژه ها"
        onPressNavigation={() => props.navigation.openDrawer()}
        hasSearchField
      />
      <View style={styles.projectKindContainer}>
        <TouchableWithoutFeedback onPress={() => setActive(false)}>
          <View
            style={
              active
                ? styles.unactiveProjectContainer
                : styles.activeProjectContainer
            }
          >
            <AppText
              style={
                active ? styles.unactiveProjectText : styles.activeProjectText
              }
            >
              پروژه های غیر فعال
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setActive(true)}>
          <View
            style={
              active
                ? styles.activeProjectContainer
                : styles.unactiveProjectContainer
            }
          >
            <AppText
              style={
                active ? styles.activeProjectText : styles.unactiveProjectText
              }
            >
              پروژه های فعال
            </AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>
      {projectsArray && projectsArray.length === 0 ? (
        <View style={styles.unactiveProjectDetails}>
          <Image
            source={require('../../assets/list_report_screen/empty-list.png')}
            style={styles.emptyListImage}
            resizeMode="cover"
          />
          <AppText style={styles.notFoundText}>
            هنوز پروژه ای ثبت نشده است
          </AppText>
        </View>
      ) : (
        <ScrollView style={styles.activeProjectPage}>
          <View style={styles.textContainer}>
            {projectsArray &&
              projectsArray.map((item, index) => (
                <ProjectItem
                  key={index}
                  title={item.header}
                  image={item.image}
                  scheduled_end={item.scheduled_end}
                  progress={item.progress}
                  onPress={() =>
                    props.navigation.navigate('ProjectDetail', item)
                  }
                />
              ))}
          </View>
        </ScrollView>
      )}
      <View style={styles.addNewProjectButton}>
        <CircularIcon
          onPress={() =>
            props.navigation.navigate('ProjectCreation', {
              screen: 'step1',
              params: {
                access_token: userData?.user.result.tokens.access_token,
              },
            })
          }
          Icon={
            <MaterialCommunityIcons
              name="plus"
              size={30}
              color={colors.white}
            />
          }
          color={colors.yellow}
          size={50}
        />
      </View>
    </View>
  )
}

export default ProjectsListScreen
