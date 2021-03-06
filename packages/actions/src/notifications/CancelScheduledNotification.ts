// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * @param {string} notificationId - This field is required.
 * @returns {boolean}
 */
function CancelScheduledNotification(notificationId?: string): boolean {
    // BEGIN USER CODE

    const firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    if (!notificationId) {
        throw new TypeError("Input parameter 'Notification id' is required");
    }

    firebase.notifications().cancelNotification(notificationId);
    return true;

    // END USER CODE
}
