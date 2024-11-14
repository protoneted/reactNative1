import { View } from "react-native";
import CustomeCard from "../components/CustomeCards";

export default function HomeScreen() {
    return(
        <View style={{flex:1, backgroundColor:"#D3C5E5", paddingHorizontal:20, paddingTop:20}}>
            <View style={{flexDirection:"row",flexWrap:"wrap", justifyContent:"space-between", rowGap:20}}>
    
   <CustomeCard title={"prasad1"} bgColor={"white"}/>
   <CustomeCard title={"prasad2"} bgColor={"white"}/>
   <CustomeCard title={"prasad3"} bgColor={"white"}/>
   <CustomeCard title={"prasad4"} bgColor={"white"}/>
   <CustomeCard title={"prasad5"} bgColor={"white"}/>

        </View>
        </View>
    )
}