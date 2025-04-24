import { combineReducers } from "redux"

function UserReducer(state=JSON.parse(localStorage.getItem("authInfo")) || null,action){
    const {type,payload}=action

    switch(type){
        case "SET_USER":{
            return state=payload
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
            return state=payload
        }
        case "ADD_TICKET":{
            return [...state,payload]
        }
        case "UPDATE_TICKET":{
            return {
                ...state,
                tickets: state.tickets.map(ticket =>
                  ticket.id === action.payload.id
                    ? { ...ticket, ...action.payload.data }
                    : ticket
                ),
              };
        }
        case 'DELETE_TICKET':
            return {
              ...state,
              tickets: state.tickets.filter(ticket => ticket.id !== action.payload.id),
            };
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

    
function NotesReducer(state=[],action){
    const {type,payload}=action

    switch(type){
        case "SET_NOTES":{
            return state=payload
        }
        case "ADD_NOTES":{
            return [...state,payload]
        }
       case "UPDATE_NOTE":{
            return {
                ...state,
                notes: state.notes.map(note =>
                  note.id === action.payload.id
                    ? { ...note, ...action.payload.data }
                    : note
                ),
              };
        }
        
        default:{
            return state    
        }
    }

}






export const allReducers=combineReducers({
    SelectedMenu,
    TicketReducer,UserReducer,
    NotesReducer
})