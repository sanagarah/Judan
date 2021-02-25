//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, SafeAreaView, Linking, ScrollView } from "react-native";
import Settinglist from "../../components/Settinglist"

//The beginning of the class
export default class About extends Component {

  state = { text: "" }
  
 //Function to open the call service in the phone
  makeCall = () => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = "tel:${0539136880}";
    } else {
      phoneNumber = "telprompt:${0539136880}";
    }
    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>

        {/*View for header box*/}
        <View style={styles.header}>
        </View>

        {/*View for setting components*/}
        <View style={styles.SettingContainer}>
          <ScrollView style={styles.scroll}>
            <View style={styles.ScrollViewSetting}>
              <Settinglist
                icon={require("../../assets/images/language.png")}
                name="language"
                right={require("../../assets/images/rightS.png")} />

              <Settinglist
                icon={require("../../assets/images/user.png")}
                name="Account Settings"
                right={require("../../assets/images/rightS.png")} />

              <Settinglist
                icon={require("../../assets/images/payment.png")}
                name="Payment Settings"
                right={require("../../assets/images/rightS.png")} />

              <Settinglist
                icon={require("../../assets/images/Help.png")}
                name="Help Center"
                right={require("../../assets/images/rightS.png")}
                nav={this.makeCall} />

              <Settinglist
                icon={require("../../assets/images/terms.png")}
                name="Terms and Policies"
                right={require("../../assets/images/rightS.png")} />

              <Settinglist
                icon={require("../../assets/images/about.png")}
                name="About"
                right={require("../../assets/images/rightS.png")} />

              <Settinglist
                icon={require("../../assets/images/Logout.png")}
                name="Logout"
                right={require("../../assets/images/rightS.png")} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 15,
    backgroundColor: "#F9F9F9",
  },
  scroll: {
    height: 300,
    width: "100%",
    padding: "2%",
    paddingTop: "10%"
  },
  SettingContainer: {
    flex: 5,
    backgroundColor: "#F9F9F9",
    width: "100%",
  },
  ScrollViewSetting: {
    width: "95%",
    borderRadius: 15,
    marginHorizontal: "2%"
  },
});