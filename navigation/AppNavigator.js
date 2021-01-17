import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import TraineeHome from "../screens/Trainee/Home";
import TraineeProgress from "../screens/Trainee/Progress";
import TraineeCompetition from "../screens/Trainee/Competition";
import TraineeAbout from "../screens/Trainee/About";

const rootNavagation = createStackNavigator(
  {
    Home: TraineeHome,
    Progress: TraineeProgress,
    Competition: TraineeCompetition,
    About: TraineeAbout,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const rootDrawerNavagation = createDrawerNavigator(
  {
    Home: rootNavagation,
    Progress: TraineeProgress,
    Competition: TraineeCompetition,
    About: TraineeAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Competition") {
          iconName = "favorite";
        } else if (routeName === "Progress") {
          iconName = "details";
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

const rootBottomTabNavagation = createBottomTabNavigator(
  {
    Home: rootDrawerNavagation,
    Progress: TraineeProgress,
    Competition: TraineeCompetition,
    About: TraineeAbout,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Competition") {
          iconName = "favorite";
        }
      else if (routeName === "Progress") {
        iconName = "details";
      }
      else { if (routeName === "About") {
        iconName = "info";

      }}
        return <MaterialIcons name={iconName} size={20}></MaterialIcons>;
      },
    }),
    tabBarOptions: {
      activeTintColor: "gray",
      style: {
        backgroundColor: "white",
      },
      inactiveTintColor: "black",
      inactiveBackgroundColor: "white",
    },
  }
);

const AppProject = createAppContainer(rootBottomTabNavagation);

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
