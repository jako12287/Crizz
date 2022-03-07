import {CONTINENT, DETAIL, GETALL, SEARCH} from '../actions/types'

let initialState = {
    countries:[],
    detail:[],
    search:'',
    continent:''
    
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case GETALL:
            return{
                ...state,
                countries: [...action.payload]
            } 
        case SEARCH:
            return{
                ...state,
                search: action.payload
            }
        case CONTINENT:
            return{
                ...state,
                continent: action.payload
            }
        case DETAIL:
            return{
                ...state,
                detail: [...action.payload]
            }

        default: 
            return state

    }

}