import React,  {Component} from "react"
import {Navigationcontainer} from "react-navigation/native"
import {createBottomTabNavigator} from " @react-navigation/bottom-tabs"
import TransactionScreen from "../screens/Transaction"
import SearchScreen from "../screens/Search"

const Tab = createBottomTabNavigator ()
export default class BottomTabNavigator extends Component{
    render(){
        return(
        <Navigationcontainer >
         <Tab.Navigator>
            <Tab.Screen name = "Transaction" Component = {TransactionScreen}>
            </Tab.Screen>
            <Tab.Screen name = "Search" Component = {SearchScreen}>
            </Tab.Screen>
            </Tab.Navigator>   
        </Navigationcontainer>
        )
    }
}
