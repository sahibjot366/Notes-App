import React,{useContext} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Context } from "../contexts/NotesContext";
import { AntDesign } from "@expo/vector-icons";

const ViewScreen=({navigation})=>{
    const id=navigation.getParam('id');
    const {state}=useContext(Context);
    const selected_item=state.find((item)=>{
        return item.id==id;
    })

    return (
        <View>
            <Text>{selected_item.title}</Text>
            <Text>{selected_item.content}</Text>
        </View>
    )
}

ViewScreen.navigationOptions=({navigation})=>{
  const id=navigation.getParam('id');
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Edit',{'id':id})}>
            <AntDesign name="edit" size={30} />
          </TouchableOpacity>
        ),
      };
    
}
const styles=StyleSheet.create({});

export default ViewScreen;