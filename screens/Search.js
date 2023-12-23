import React, {components} from "react" ;
import{View,Text,StyleSheet} from "react-native"

export default class SearchScreen extends component {
render(){
     return(
        <View style = {styles.container}>
            <Text style = {styles.text}>
               SearchScreen
            </Text>
        </View>
     )
     }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        backgroundColor : "#5653d4"
    },
    text : {
color : "#FFF",
fontSize : "30",


    }
})