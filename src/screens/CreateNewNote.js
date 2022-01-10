import React,{useState,useContext} from "react";
import {View,Text,StyleSheet,TextInput, Button} from 'react-native';
import ScreenCreate from "../components/ScreenCreate";
import { Context } from "../contexts/NotesContext";

const CreateNewNote=({navigation})=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const {addNote}=useContext(Context);
    return (
        <ScreenCreate 
        input1val={title} 
        input2val={content} 
        oninput1change={newValue=>setTitle(newValue)} 
        oninput2change={newValue=>setContent(newValue)} 
        text1="Title : "
        text2="Content : "
        onSave={()=>{
            if(title){
                addNote(title,content,()=>navigation.navigate('Index'));
            }
            else{
                alert('Title is empty')
            }
        }}
        />
    )
}

const styles=StyleSheet.create({});

export default CreateNewNote;