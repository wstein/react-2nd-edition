import {createStore} from "redux";

let initState = {
    count: 0
};

const store = createStore((state = initState, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});


console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
    type: 'RESET'
});

console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());
