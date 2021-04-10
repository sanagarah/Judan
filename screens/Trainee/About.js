//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, View, Linking, ScrollView, TouchableOpacity, Text, Image } from "react-native";
import Settinglist from "../../components/Settinglist";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RNPickerSelect from "react-native-picker-select";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";

//The beginning of the class
export default class About extends Component {
  constructor(props) {
    super(props)

    //Declare the initial values for states
    this.state = {
      show1: false,
      show2: false,
      show3: false,
      text: ""
    }
  }

  //Function used to change the show state 
  onShow1 = () => {
    this.setState({ show1: true });
  }

  //Function used to change the show state 
  onHide1 = () => {
    this.setState({ show1: false });
  }

  //Function used to change the show state 
  onShow2 = () => {
    this.setState({ show2: true });
  }

  //Function used to change the show state 
  onShow3 = () => {
    this.setState({ show3: true });
  }

  //Function used to change the show state 
  onHide2 = () => {
    this.setState({ show2: false });
  }

  //Function used to change the show state 
  onHide3 = () => {
    this.setState({ show3: false });
  }

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
      <View style={styles.container}>

        {/*View for setting components*/}
        <View style={styles.SettingContainer}>
          <ScrollView style={styles.scroll}>
            <View style={styles.ScrollViewSetting}>


              <RNPickerSelect
                onValueChange={value => (
                  AorE.A == true ? (AorE.A = false) : (AorE.A = true),
                  this.forceUpdate()
                )}
                items={[
                  { label: "العربيه", value: "العربيه" },
                  { label: "English", value: "English" }
                ]}
              >
                <Settinglist
                  icon={require("../../assets/images/language.png")}
                  name={AorE.A == true ? LangAr.Language : LangEn.Language}
                  right={require("../../assets/images/rightS.png")}>
                </Settinglist>
              </RNPickerSelect>

              <Settinglist
                icon={require("../../assets/images/help.png")}
                name={AorE.A == true ? LangAr.Help : LangEn.Help}
                right={require("../../assets/images/rightS.png")}
                nav={this.makeCall} />

              <Settinglist
                icon={require("../../assets/images/terms.png")}
                name={AorE.A == true ? LangAr.Policy : LangEn.Policy}
                right={require("../../assets/images/rightS.png")}
                nav={() => this.onShow2()} />

              <Settinglist
                icon={require("../../assets/images/about.png")}
                name={AorE.A == true ? LangAr.AboutUs : LangEn.AboutUs}
                right={require("../../assets/images/rightS.png")}
                nav={() => this.onShow1()} />

              <Settinglist
                icon={require("../../assets/images/logout.png")}
                name={AorE.A == true ? LangAr.Logout : LangEn.Logout}
                right={require("../../assets/images/rightS.png")}
                nav={() => this.onShow3()}
              />
            </View>
          </ScrollView>
        </View>
        {/* To render about popup page */}
        <Modal isVisible={this.state.show1}>
          <TouchableOpacity style={styles.container} onPress={this.onHide1}>
            <View style={styles.about}>
              <View style={styles.rowContainer}>
                <Text style={styles.text1}>{AorE.A == true ? LangAr.AboutJudan : LangEn.AboutJudan}</Text>
                <Image source={require("../../assets/images/icon.png")} style={styles.logo}></Image>
              </View>
              <Text style={styles.text2}> {AorE.A == true ? LangAr.AboutUsText1 : LangEn.AboutUsText1}</Text>
              <Text style={styles.text2}> {AorE.A == true ? LangAr.AboutUsText2 : LangEn.AboutUsText2}</Text>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* To render about popup page */}
        <Modal isVisible={this.state.show2}>
          <TouchableOpacity style={styles.container} onPress={this.onHide2}>
            <View style={styles.about}>
              <Text style={styles.text1}>{AorE.A == true ? LangAr.Policy : LangEn.Policy}</Text>
              <Text style={styles.text3}>{AorE.A == true ? LangAr.Updated : LangEn.Updated}</Text>
              <Text style={styles.text2}>{AorE.A == true ? LangAr.Agreement : LangEn.Agreement}</Text>
              <Text style={styles.text3}>{AorE.A == true ? LangAr.PolicyText : LangEn.PolicyText}</Text>
            </View>
          </TouchableOpacity>
        </Modal>

        {/* To render about popup page */}
        <Modal isVisible={this.state.show3}>
          <TouchableOpacity style={styles.container} onPress={this.onHide3}>
            <View style={styles.logout}>
              <Text style={styles.text1}>{AorE.A == true ? LangAr.LogoutConfirm : LangEn.LogoutConfirm}</Text>
              <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => AsyncStorage.removeItem("user")}>
                  <Text>{AorE.A == true ? LangAr.Logout : LangEn.Logout}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.onHide3()}>
                  <Text>{AorE.A == true ? LangAr.Cancel : LangEn.Cancel}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
//Declare the style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  about: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 40
  },
  logout: {
    flex: 0.3,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-around",
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
    flex: 6,
    backgroundColor: "#F9F9F9",
    width: "100%",
  },
  ScrollViewSetting: {
    width: "95%",
    borderRadius: 15,
    marginHorizontal: 10,
    marginTop: 30,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  text2: {
    fontSize: 17,
    marginTop: 30,
    paddingHorizontal: 35,
    textAlign: "center"
  },
  text3: {
    fontSize: 14,
    marginTop: 15,
    paddingHorizontal: 5,
    textAlign: "center"
  },
  row: {
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#FFE066",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    marginHorizontal: 20
  },
  logo: {
    height: 90,
    width: 90
  }
});