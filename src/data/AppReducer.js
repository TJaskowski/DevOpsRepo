export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            console.log("edit pushed")
            return state;
        case "rate":{
            return state.map(item => item.id === action.id ? 
                { ...item, rating: item.rating === 10 ? 0 : item.rating +1}
                : item
            );
        }
        case "delete":
            return state.filter(item => item.id !== action.id);       
    }
}   