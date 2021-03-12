import AsyncStorage from "@react-native-async-storage/async-storage";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import * as Facebook from "expo-facebook";

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })

    } else {
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    await Facebook.initializeAsync({
        appId: "1763096950517235",
    });
    const {
        type,
        token,
    } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"]
    });
    if (type === "cancel") {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    await AsyncStorage.setItem("fb_token", token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};

