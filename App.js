

import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import ViewScreen from "./src/screens/ViewScreen";
import CreateNewNote from "./src/screens/CreateNewNote";
import { Provider } from "./src/contexts/NotesContext";
import EditScreen from "./src/screens/EditScreen";
const navigator=createStackNavigator({
    Index:IndexScreen,
    View:ViewScreen,
    Create:CreateNewNote,
    Edit:EditScreen
},{
    initialRouteName:'Index',
    defaultNavigationOptions:{
        title:'Notes App'
    }
});

const App = createAppContainer(navigator);
export default ()=>{
    return (
    <Provider>
        <App />
    </Provider>
    );
};