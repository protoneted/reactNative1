import { Button, Image, Text, TouchableOpacity, Vibration, View } from "react-native";
import CsButton from "../components/CustomeButton";

export default function AuthenticationOptionScreen({navigation}) {
    return (
        <View style={{ flex: 2, backgroundColor: "#fff" }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end", paddingTop: 30 }}>
                    <CsButton name={"skip"} textColor="#999" color="#fff" onClick={()=>navigation.replace('HomeScreen')}/>
                </View>

                <Image source={require("../assets/userLoginImage.jpg")} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: "row", justifyContent: 'space-evenly', paddingTop: 40 }}>
                    <View><CsButton name={"Login/SignUp"} color="#d268cc" onClick={()=>navigation.navigate('SignIn')} /></View>
                </View>
            </View>
        </View>
    )
}