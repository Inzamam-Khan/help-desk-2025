import { combineReducers } from "redux"

function UserReducer(state=null,action){
    const {type,payload}=action

    switch(type){
        case "SET_USER":{
            return
        }
        default:{
            return state
        }
    }

}




function TicketReducer(state=null,action){
    const {type,payload}=action

    switch(type){
        case "SET_TICKET":{
            return
        }
        default:{
            return state
        }
    }

}





function SelectedMenu(state="dashboard",action){
    const {type,payload}=action

    switch(type){
        case "SET_MENU":{
            return state=payload
        }
        default:{
            return state
        }
    }

}


export const allReducers=combineReducers({
    SelectedMenu,
    TicketReducer,UserReducer
})