//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
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
import TraineeChat from "../screens/Trainee/Chat";
import TraineeChatList from "../screens/Trainee/ChatList";
import TraineeMatch from "../screens/Trainee/Match";
import Card from "../screens/Trainee/Card";
import Profile from "../screens/Trainee/TrainerProfile";
import Request from "../screens/Trainee/Request";
import Payment from "../screens/Trainee/Payment";
import BankCard from "../screens/Trainee/BankCard";
import Thanks from "../screens/Trainee/Thanks";
import Search from "../screens/Trainee/Search";

const rootNavigation = createStackNavigator(
  {
    Home: TraineeHome,
    Progress: TraineeProgress,
    Competition: TraineeCompetition,
    About: TraineeAbout,
    Chating: TraineeChat,
    Chat: TraineeChatList,
    Match: TraineeMatch,
    Card: Card,
    Profile: Profile,
    Request: Request,
    Payment: Payment,
    BankCard: BankCard,
    Thanks: Thanks,
    Search: Search
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#F25F5C",
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
    Home: rootNavigation,
    Progress: TraineeProgress,
    Chat: TraineeChatList,
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
          iconName = "assistant-photo";
        } else if (routeName === "Progress") {
          iconName = "straighten";
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
    Home: rootDrawerNavigation,
    Progress: TraineeProgress,
    Chat: TraineeChatList,
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
          iconName = "assistant-photo";
        }
        else if (routeName === "Progress") {
          iconName = "straighten";
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
        backgroundColor: "#F25F5C",
      },
      inactiveTintColor: "#000000",
      inactiveBackgroundColor: "#FFF",
    },
  }
);

const AppProject = createAppContainer(rootBottomTabNavigation);

//The beginning of the class
export default class TraineeNavigator extends Component {
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
