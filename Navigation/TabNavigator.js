import * as React from 'react'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/CreatePost";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = ()=> {
  return (
    <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Feed") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "CreatePost") {
                    iconName = focused ? "add-circle" : "add-circle-outline";
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={RFValue(25)}
                        color={color}
                        style={styles.icons}
                    />
                );
            }
        })}
        activeColor={"#ee8249"}
        inactiveColor={"gray"}
    >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
bottomTabStyle: {
    backgroundColor: "#2a3c2b",
    height: "9%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
},
icons: {
    width: RFValue(25),
    height: RFValue(25)
}
});

export default BottomTabNavigator