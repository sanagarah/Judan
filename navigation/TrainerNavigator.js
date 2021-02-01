import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import TrainerHome from "../screens/Trainer/Home";
import TrainerProfile from "../screens/Trainer/Profile";
import TrainerRequestList from "../screens/Trainer/RequestList";
import TrainerAbout from "../screens/Trainer/About";
import TrainerChat from "../screens/Trainer/Chat";
import TrainerChatList from "../screens/Trainer/ChatList";
import UpdatedProgress from "../screens/Trainer/UpdateProgress";

const rootNavigation = createStackNavigator(
  {
    Home: TrainerHome,
    Profile: TrainerProfile,
    Request: TrainerRequestList,
    About: TrainerAbout,
    Chat: TrainerChat,
    ChatList: TrainerChatList,
    UpdatedProgress: UpdatedProgress,

  },
  {
    initialRouteName: "Home",
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
    Home: rootNavigation,
    Profile: TrainerProfile,
    Requested: TrainerRequestList,
    About: TrainerAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Requested") {
          iconName = "view-list";
        } else if (routeName === "Profile") {
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
    Home: rootDrawerNavigation,
    Profile: TrainerProfile,
    Requested: TrainerRequestList,
    About: TrainerAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Requested") {
          iconName = "view-list";
        }
        else if (routeName === "Profile") {
          iconName = "person";
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
