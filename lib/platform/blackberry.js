module.exports = {
    id: "blackberry",
    objects: {
        PhoneGap: {
            path: "phonegap",
            children: {
                exec: {
                    path: "phonegap/exec/blackberry"
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
                    path: "phonegap/plugin/blackberry/device"
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
