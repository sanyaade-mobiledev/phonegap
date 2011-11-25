module.exports = {
    id: "wp7",
    objects: {
        PhoneGap: {
            path: "phonegap",
            children: {
                exec: {
                    path: "phonegap/exec/wp7"
                }
            }
        },
        navigator: {
            path: "phonegap/plugin/navigator",
            children: {
                notification: {
                    path: "phonegap/plugin/notification"
                },
                accelerometer: {
                    path: "phonegap/plugin/accelerometer"
                },
                camera: {
                    path: "phonegap/plugin/Camera"
                },
                network: {
                    children: {
                        connection: {
                            path: "phonegap/plugin/network"
                        }
                    }
                },
                device: {
                    path: "phonegap/plugin/wp7/device"
                }
            }
        },
        Connection: {
            path: "phonegap/plugin/Connection"
        },
        Camera: {
            path: "phonegap/plugin/Camera"
        }
    }

};
