
import createDataContext from './createDataContext';
import JsonServer from '../api/JsonServer';
const reducer=(state,action)=>{
    switch(action.type){
        case 'viewNotes':
            return action.payload;
        
        case 'deleteNote':
            return state.filter(item=>{
                    return item.id!==action.payload.id
                })
        case 'editNote':
            return state.map((note)=>{
                if(note.id===action.payload.id){
                    return action.payload;
                }
                else{
                    return note;
                }
            })
        default:
            return state;
    }
}
const viewNotes=(dispatch)=>{
    return async ()=>{
        const response= await JsonServer.get('notesPosts');
        dispatch({type:'viewNotes',payload:response.data})
    }
}
const addNote=(dispatch)=>{
    return async (title,content,callback)=>{
           await JsonServer.post('notesPosts',{title,content})
        // dispatch({type:'addNote',payload:{title,content}});
        if(callback){
            callback();
        }
    }
    
}
const deleteNote=(dispatch)=>{
    return async (id)=>{
            await JsonServer.delete(`notesPosts/${id}`)
            dispatch({type:'deleteNote',payload:{id}});
        }
}
const editNote=(dispatch)=>{
    return async (id,title,content)=>{
            await JsonServer.put(`notesPosts/${id}`,{title,content})
            dispatch({type:'editNote',payload:{id,title,content}})
        }
    
}


export const {Provider, Context}=createDataContext(reducer,{addNote,deleteNote,editNote,viewNotes},[])

