import { Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 20 }}>
            <View style={{ flex: 0.2, borderWidth: 2, width: "100%", height: 30, marginBottom: 20, borderRadius: 15 }}>
                <Text>profile pic and name</Text>
            </View>

            <View style={{ borderWidth: 2, width: "100%", height: 30, marginBottom: 20, borderRadius: 15 }}>
                <Text>settings</Text>

            </View>
            <View style={{ borderWidth: 2, width: "100%", height: 30, marginBottom: 20, borderRadius: 15 }}>
                <Text>About us</Text>

            </View>
            <Text>logout</Text>
        </View>
    )
}