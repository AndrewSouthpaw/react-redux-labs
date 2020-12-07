import { Platform } from 'react-native'

const PORT = 3007

/**
 * Your host will vary based on your simulation environment. For example, iOS simulators can talk to localhost without
 * issue, but Android emulator via Android Studio cannot because it's on a different virtual machine. If you're running
 * on a real device, it similarly won't be able to reach localhost.
 *
 * "http://localhost:3007";  Works on iOS simulators but fails on Android emulator
 * "http://10.0.2.2:3007";   Works on Android emulator via Android Studio
 * "http://10.0.3.2:3007";   Works on Android emulator via Genymotion
 *
 * A tethered device will need to use your laptop's IP address
 * you can find your laptop's IP address by running this in the shell:
 *    $ ipconfig getifaddr en0
 */
export const host = Platform.select({
  ios: `http://localhost:${PORT}`,
  android: `http://10.0.2.2:${PORT}`,
})

// uncomment when you're testing on a real device, replace with your actual local IP
// const LOCAL_IP = `192.168.1.2`
// export const host = `http://${LOCAL_IP}:${PORT}`
