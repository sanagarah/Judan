//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import TrainerProfile from "../screens/Trainer/Profile";
import TrainerRequestList from "../screens/Trainer/RequestList";
import TrainerAbout from "../screens/Trainer/About";
import TrainerChat from "../screens/Trainer/Chat";
import TrainerChatList from "../screens/Trainer/ChatList";
import UpdatedProgress from "../screens/Trainer/UpdateProgress";

const rootNavigation = createStackNavigator(
  {
    Profile: TrainerProfile,
    Request: TrainerRequestList,
    About: TrainerAbout,
    Chating: TrainerChat,
    Chat: TrainerChatList,
    Progress: UpdatedProgress,

  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#247BA0",
      },
      headerTintColor: "#FFF",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const rootDrawerNavigation = createDrawerNavigator(
  {
    Profile: rootNavigation,
    Requested: TrainerRequestList,
    Chat: TrainerChatList,
    About: TrainerAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profile") {
          iconName = "person";
        } else if (routeName === "Requested") {
          iconName = "view-list";
        } else if (routeName === "Chat") {
          iconName = "chat";
        } else if (routeName === "About") {
          iconName = "info";
        }
        return <MaterialIcons name={iconName} size={20}></MaterialIcons>;
      },
    }),
    drawerType: "back",
    drawerBackgroundColor: "#FFF",
    contentOptions: {
      activeTintColor: "#000000",
      activeBackgroundColor: "#FFF",
    },
  }
);

const rootBottomTabNavigation = createBottomTabNavigator(
  {
    Profile: rootDrawerNavigation,
    Requested: TrainerRequestList,
    Chat: TrainerChatList,
    About: TrainerAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Profile") {
          iconName = "person";
        } else if (routeName === "Requested") {
          iconName = "view-list";
        }
        else if (routeName === "Chat") {
          iconName = "chat";
        }
        else {
          if (routeName === "About") {
            iconName = "info";

          }
        }
        return <MaterialIcons name={iconName} size={20}></MaterialIcons>;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#FFF",
      style: {
        backgroundColor: "#247BA0",
      },
      inactiveTintColor: "#000000",
      inactiveBackgroundColor: "#FFF",
    },
  }
);

const AppProject = createAppContainer(rootBottomTabNavigation);

//The beginning of the class
export default class TrainerNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppProject />
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
