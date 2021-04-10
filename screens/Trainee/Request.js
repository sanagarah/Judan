//import React in the code
import React, { Component } from "react";
//import all the components we are going to use
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Place from "../../components/Place";
import Time from "../../components/Time";
import Date from "../../components/Date";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";
//import language files for translation
import LangAr from "../../lang/ar.json";
import LangEn from "../../lang/en.json";
import AorE from "../../lang/AorE";
//import Api link
import Api from "../../Api";

let api = Api.link;


//The beginning of the class
export default class Request extends Component {
    timeBlank = AorE.A == true ? LangAr.TimeBlank : LangEn.TimeBlank;
    dateBlank = AorE.A == true ? LangAr.DateBlank : LangEn.DateBlank;
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            toggle: true,
            show: false,
            border: 0,
            place: "",
            time: this.timeBlank,
            date: this.dateBlank,
            trainerId: 0,
            type: "",
            markerData: {
                latitude: 24.470901,
                longitude: 39.612236,
            },
            initial: {
                latitude: 24.470901,
                longitude: 39.612236,
            },
            mapData: {
                latitude: 24.470901,
                longitude: 39.612236,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
        }
    }

    componentDidMount = async () => {
        const { params } = this.props.navigation.state
        let trainerId = params.id
        let type = params.type
        await this.setState({ trainerId: trainerId });
        await this.setState({ type: type });

        //For map
        let currentCity;
        await axios.get(api + "/IdTrainer/" + this.state.trainerId).then(resp => {
            let items = (resp.data);
            items.filter(function (item) {
                currentCity = item.city
            });
            switch (currentCity) {
                case "Jeddah":
                    this.setState({ mapData: { latitude: 21.543333, longitude: 39.172779, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.543333, longitude: 39.172779 } });
                    break;
                case "Madinah":
                    this.setState({ mapData: { latitude: 24.470901, longitude: 39.612236, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.470901, longitude: 39.612236 } });
                    break;
                case "Makkah":
                    this.setState({ mapData: { latitude: 21.422510, longitude: 39.826168, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.422510, longitude: 39.826168 } });
                    break;
                case "Taif":
                    this.setState({ mapData: { latitude: 21.437273, longitude: 40.512714, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.437273, longitude: 40.512714 } });
                    break;
                case "Yanbu":
                    this.setState({ mapData: { latitude: 24.186848, longitude: 38.026428, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.186848, longitude: 38.026428 } });
                    break;
                case "Qunfudhah":
                    this.setState({ mapData: { latitude: 19.12814, longitude: 41.078739, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 19.12814, longitude: 41.078739 } });
                    break;
                case "Laith":
                    this.setState({ mapData: { latitude: 20.151259, longitude: 40.269649, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 20.151259, longitude: 40.269649 } });
                    break;
                case "Khulays":
                    this.setState({ mapData: { latitude: 22.150369, longitude: 39.341375, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 22.150369, longitude: 39.341375 } });
                    break;
                case "Khurmah":
                    this.setState({ mapData: { latitude: 21.923937, longitude: 42.06494, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.923937, longitude: 42.06494 } });
                    break;
                case "Ranyah":
                    this.setState({ mapData: { latitude: 21.262738, longitude: 42.85404, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 21.262738, longitude: 42.85404 } });
                    break;
                case "Alula":
                    this.setState({ mapData: { latitude: 26.6167, longitude: 37.9167, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 26.6167, longitude: 37.9167 } });
                    break;
                case "Hinakiyah":
                    this.setState({ mapData: { latitude: 24.8797, longitude: 40.5153, latitudeDelta: 0.015, longitudeDelta: 0.0121 } });
                    this.setState({ initial: { latitude: 24.8797, longitude: 40.5153 } });
                    break;
            }
        })
    }

    //To change red marker position and move the map with it
    handleRegionChange = mapData => {
        this.setState({
            markerData: { latitude: mapData.latitude, longitude: mapData.longitude },
            mapData,
        });
        this.distance(this.state.initial.latitude, this.state.initial.longitude, this.state.mapData.latitude, this.state.mapData.longitude, "K");
    };

    //To calculate the distance from longitude and latitude
    distance(lat1, lon1, lat2, lon2, unit) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            if (unit == "K") { dist = dist * 1.609344 }
            if (unit == "N") { dist = dist * 0.8684 }
            if (dist > 80) {
                alert(AorE.A == true ? LangAr.Distance : LangEn.Distance)
            }
        }
    }

    //Function used to change the show state
    onShow = () => {
        if (this.state.toggle)
            this.setState({ border: 1, show: true, toggle: false });
        else {
            this.setState({ border: 0, show: false, toggle: true });
        }
    }

    //Function used to set the choesn value in the box
    setPlace = (value) => {
        this.setState({ place: value });
    }

    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setDate = (date) => {
        var stringDate = date.toLocaleString().substring(0, 10);
        this.setState({ date: stringDate })
    };

    //Function used to set the choesn value in the box after chaning it to String and ignore unnecessary text
    setTime = (time) => {
        var stringTime = time.toLocaleString().substring(10, 16);
        this.setState({ time: stringTime })
    };

    //To validate TextInputs
    checkTextInput = async () => {
        //Check for the place TextInput
        if (this.state.place == "" && this.state.border == 0) {
            alert(AorE.A == true ? LangAr.AlertPlace : LangEn.AlertPlace);
            return;
        }
        //Check for the time TextInput
        if (this.state.time == this.timeBlank) {
            alert(AorE.A == true ? LangAr.AlertTime : LangEn.AlertTime);
            return;
        }
        //Check for the date TextInput
        if (this.state.date == this.dateBlank) {
            alert(AorE.A == true ? LangAr.AlertDate : LangEn.AlertDate);
            return;
        }

        if (this.state.border == 1) {
            let latLong = "lat: " + this.state.markerData.latitude.toString() + " long: " + this.state.markerData.longitude.toString()
            await this.setState({ place: latLong });
        }
        //Checked successfully
        this.props.navigation.navigate("Payment", {
            trainerId: this.state.trainerId,
            type: this.state.border,
            place: this.state.place,
            time: this.state.time,
            date: this.state.date,
            serviceType: this.state.type
        })
    }

    render() {
        return (
            <View style={styles.flex}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Text style={styles.label}>{AorE.A == true ? LangAr.Type : LangEn.Type}</Text>
                    <View style={styles.onlinePersonalContainer}>
                        <TouchableOpacity
                            onPress={this.onShow}
                            style={[styles.onlinePersonal,
                            {
                                borderColor: this.state.border === 0 ? "#F25F5C" : "#808080",
                                borderStyle: this.state.border === 0 ? "solid" : "dotted"
                            }]}>
                            <Text style={styles.text1}> {AorE.A == true ? LangAr.Online : LangEn.Online}</Text>
                            <Image
                                source={require("../../assets/images/online.png")}
                                style={styles.image1} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.onShow}
                            style={[styles.onlinePersonal,
                            {
                                borderColor: this.state.border === 1 ? "#F25F5C" : "#808080",
                                borderStyle: this.state.border === 1 ? "solid" : "dotted"
                            }]}>
                            <Text style={styles.text1}>{AorE.A == true ? LangAr.Personal : LangEn.Personal}</Text>
                            <Image
                                source={require("../../assets/images/personal.png")}
                                style={styles.image2} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.label}>{AorE.A == true ? LangAr.Place : LangEn.Place}</Text>
                    {this.state.show ? null : <Place place={this.state.place} setPlace={this.setPlace} />}
                    {this.state.show ?
                        <View style={styles.mapView}>
                            <MapView
                                style={styles.flex}
                                region={this.state.mapData}
                                onRegionChangeComplete={this.handleRegionChange}>
                                <Marker
                                    coordinate={this.state.markerData}
                                    title="Your location"
                                />
                            </MapView>
                        </View> : null}
                    <Text style={styles.label}>{AorE.A == true ? LangAr.Time : LangEn.Time}</Text>
                    <View style={styles.timeDateContainer}>
                        <Time time={this.state.time} setTime={this.setTime} />
                    </View>
                    <Text style={styles.label}>{AorE.A == true ? LangAr.Date : LangEn.Date}</Text>
                    <View style={styles.timeDateContainer}>
                        <Date date={this.state.date} setDate={this.setDate} />
                    </View>
                    <TouchableOpacity style={styles.paymentButton} onPress={this.checkTextInput}>
                        <Text style={styles.text2}>{AorE.A == true ? LangAr.ToPayment : LangEn.ToPayment}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    flex: {
        flex: 1,
    },
    timeDateContainer: {
        padding: 7,
        marginHorizontal: 40,
        borderWidth: 0.5,
        borderColor: "#808080"
    },
    image: {
        margin: 40,
        width: 60,
        height: 60,
        marginLeft: 9
    },
    textRequest: {
        color: "#FFF",
        margin: 55,
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 9
    },
    onlinePersonalContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    onlinePersonal: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 170,
        height: 110,
        paddingLeft: 5,
        borderRadius: 13,
        borderWidth: 1,
    },
    image1: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    image2: {
        width: 66,
        height: 66,
    },
    text1: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#70C1B3",
        marginHorizontal: 5
    },
    text2: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#FFF",
        margin: 5
    },
    label: {
        fontSize: 20,
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 10,
        color: "#808080"
    },
    paymentButton: {
        width: 300,
        height: 50,
        backgroundColor: "#F25F5C",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 30
    },
    mapView: {
        width: "90%",
        height: 200,
        alignSelf: "center"
    }
});
