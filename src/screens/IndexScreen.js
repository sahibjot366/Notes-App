

import React, { useContext,useEffect } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { Context } from '../contexts/NotesContext';
import { Feather,AntDesign } from '@expo/vector-icons';

const IndexScreen=({navigation})=>{
    const {state,deleteNote,viewNotes}=useContext(Context);

    useEffect(()=>{
        viewNotes();
        const listener=navigation.addListener('didFocus',()=>{
            viewNotes();
        })
        return ()=>{
            listener.remove();
        }
    },[])
    return (
        <View>
            <FlatList 
            data={state}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return (
                    <View style={styles.ViewStyle}>

                        <TouchableOpacity style={{flex:1,alignSelf:'center'}} onPress={()=>navigation.navigate('View',{'id':item.id })}>
                        <Text style={{padding:5,fontSize:25}}>{item.title}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignSelf:'center',marginRight:3}} onPress={()=>deleteNote(item.id)}>
                            <AntDesign name="delete" size={30} />
                        </TouchableOpacity>

                    </View>
                );
            }}
            />
        </View>
    );
};
IndexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Create')} >
            <Feather name="plus" size={30} />
          </TouchableOpacity>
        ),
      };
    
}
const styles=StyleSheet.create({
    ViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:2,
        marginLeft:2
    }
});

export default IndexScreen;
