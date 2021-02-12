import React from "react";
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
    Chat: TrainerChat,
    ChatList: TrainerChatList,
    UpdatedProgress: UpdatedProgress,

  },
  {
    initialRouteName: "Profile",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#247ba0",
      },
      headerTintColor: "white",
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
    Chat: TrainerChat,
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
          iconName = "person";
        } else if (routeName === "About") {
          iconName = "info";
        }
        return <MaterialIcons name={iconName} size={20}></MaterialIcons>;
      },
    }),
    drawerType: "back",
    drawerBackgroundColor: "white",
    contentOptions: {
      activeTintColor: "#000000",
      activeBackgroundColor: "white",
    },
  }
);

const rootBottomTabNavigation = createBottomTabNavigator(
  {
    Profile: rootDrawerNavigation,
    Requested: TrainerRequestList,
    Chat: TrainerChat,
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
      activeTintColor: "white",
      style: {
        backgroundColor: "#247ba0",
      },
      inactiveTintColor: "black",
      inactiveBackgroundColor: "white",
    },
  }
);

const AppProject = createAppContainer(rootBottomTabNavigation);

export default class app extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppProject />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
