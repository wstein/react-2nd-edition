import {createStore} from "redux";

let initState = {
    count: 0
};

const store = createStore((state = initState, action) => {
    switch (action.type) {
        case 'DECREMENT':
            return {
                count: state.count - (action.by || 1)
            };
        case 'INCREMENT':
            return {
                count: state.count + (action.by || 1)
            };
        case 'SET':
            return {
                count: action.to
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    by: 10
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
    by: 3
});

store.dispatch({
    type: 'SET',
    to: 101
});

unsubscribe()
