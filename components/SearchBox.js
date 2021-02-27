// import React in our code
import React, { Component } from "react";
// import all the components we are going to use
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import { SearchBar } from "react-native-elements";
import jsonData from "../trainersInfo.json";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);

//The beginning of the class
export default class SearchBox extends Component {
    constructor(props) {
        super(props)

        //Declare the initial values for states
        this.state = {
            search: "",
            filteredDataSource: jsonData,
            masterDataSource: jsonData
        }
    }

    searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = this.state.masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            this.setState({ filteredDataSource: newData });
            this.setState({ search: text });
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            this.setState({ filteredDataSource: this.state.masterDataSource });
            this.setState({ search: text });
        }
    };

    ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style={styles.separation} />
        );};

    render() {
        return (
            <ScrollView style={styles.container}>
                <SearchBar
                    lightTheme
                    searchIcon={{ size: 24 }}
                    containerStyle={styles.container}
                    inputStyle={styles.container}
                    inputContainerStyle={styles.container}
                    backgroundColor="#FFF"
                    onChangeText={(text) => this.searchFilterFunction(text)}
                    onClear={(text) => this.searchFilterFunction('')}
                    placeholder="Type here"
                    value={this.state.search}
                />
                    <FlatList
                        data={this.state.filteredDataSource}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorView}
                        renderItem={({ item }) => {
                            return (
                                // Flat List Item
                                <Text style={styles.itemStyle} onPress={this.props.nav}>
                                    {item.title}
                                    {"\n" + "\n"}
                                    { item.body}
                                </Text>
                            );
                        }}
                    />
            </ScrollView>
        );
    };
}
//Declare the style
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
    },
    itemStyle: {
        padding: 19,
    },
    separation: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#C8C8C8",
    }
});
