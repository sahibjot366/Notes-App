import React,{useContext,useState} from "react";
import {View,Text,StyleSheet} from 'react-native';
import ScreenCreate from "../components/ScreenCreate";
import { Context } from "../contexts/NotesContext";
const EditScreen=({navigation})=>{
    const {state,editNote}=useContext(Context);
    const id=navigation.getParam('id');
    const selected_item=state.find((item)=>{
        return item.id==id;
    })
    const [title,setTitle]=useState(selected_item.title);
    const [content,setContent]=useState(selected_item.content);
    return(
        <ScreenCreate
        input1val={title} 
        input2val={content} 
        oninput1change={newValue=>setTitle(newValue)} 
        oninput2change={newValue=>setContent(newValue)} 
        text1="Title : "
        text2="Content : "
        onSave={()=>{
            if(title){
                editNote(selected_item.id,title,content);
                navigation.goBack();
            }
            else{
                alert('Title is empty')
            }
        }}
        
        
        />
    )
}



const styles=StyleSheet.create({});

export default EditScreen;