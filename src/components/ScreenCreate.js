import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import UserInput from './UserInput';

const ScreenCreate=({input1val,input2val,oninput1change,oninput2change,text1,text2,onSave})=>{

    return (
        <View style={{margin:10}}>
            <UserInput 
            text={text1} 
            val={input1val}
            onTextChange={newValue=>oninput1change(newValue)}
            />
            <UserInput 
            text={text2} 
            val={input2val} 
            onTextChange={newValue=>oninput2change(newValue)}
            />
            <Button title="Save" onPress={onSave}/>
        </View>
    )
}

const styles=StyleSheet.create({})

export default ScreenCreate;