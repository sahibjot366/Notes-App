import React from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native';

const UserInput=({text,val,onTextChange})=>{
    return (
        <View style={styles.ViewStyle}>
        <Text style={styles.TextStyle}>{text}</Text>
        <TextInput 
        style={styles.TextInputStyle}
        value={val}
        onChangeText={newValue=>onTextChange(newValue)}
        />
        </View>
    )
}

const styles=StyleSheet.create({
    TextStyle:{
        alignSelf:'center'
    },
    TextInputStyle:{
        borderWidth:2,
        flex:1,
        alignSelf:'stretch',
        fontSize:20
    },
    ViewStyle:{
        flexDirection:'row',
        justifyContent:'center',
        margin:10
    }
})

export default UserInput;