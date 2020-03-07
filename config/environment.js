var environments = {
    staging: {
        FIREBASE_API_KEY: 'AIzaSyBd4m_kVNLcN7eMSOWIYEEiSFXpFa2Uonk',
        FIREBASE_AUTH_DOMAIN: 'ecological-footprint.firebaseapp.com',
        FIREBASE_DATABASE_URL: 'https://ecological-footprint.firebaseio.com',
        FIREBASE_PROJECT_ID: 'ecological-footprint',
        FIREBASE_STORAGE_BUCKET: 'ecological-footprint.appspot.com',
        FIREBASE_MESSAGING_SENDER_ID: '29979249962',
        GOOGLE_CLOUD_VISION_API_KEY: 'caa02c323f03216eff844e3e14d8b303fe6f5631'
    },
    production: {
        // Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
    }
};

function getReleaseChannel() {
    let releaseChannel = Expo.Constants.manifest.releaseChannel;
    if (releaseChannel === undefined) {
        return 'staging';
    } else if (releaseChannel === 'staging') {
        return 'staging';
    } else {
        return 'staging';
    }
}
function getEnvironment(env) {
    console.log('Release Channel: ', getReleaseChannel());
    return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;