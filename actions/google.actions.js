import AsyncStorage from "@react-native-async-storage/async-storage";
import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAIL } from "./types";
import * as Google from 'expo-google-app-auth';

export const googleLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");
    if (token) {
        dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: token })

    } else {
        doGoogleLogin(dispatch);
    }
};

const doGoogleLogin = async dispatch => {
//jD70oKoku_gcd-IuBsrbzPoL
    const config = {
        clientId: "465180122292-h4gium3chou2gtrolcpqje9k6dqof0af.apps.googleusercontent.com"
    }

    setLoginStatus('LOADING')
    const { type, accessToken, user} = await Google.logInAsync(config);
    if (type === "cancel") {
        return dispatch({ type: GOOGLE_LOGIN_FAIL });
    }
    setLoginStatus('IN')
    await AsyncStorage.setItem("fb_token", accessToken);
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: accessToken});
};
