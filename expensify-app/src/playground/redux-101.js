import {createStore} from "redux";

let initState = {
    count: 0
};

const increment = ({by = 1} = {}) => ({
    type: 'INCREMENT',
    by
});

const decrement = ({by = 1} = {}) => ({
    type: 'DECREMENT',
    by
});

const reset = () => ({
    type: 'RESET'
});


const set = ({to = 1} = {}) => ({
    type: 'SET',
    to
});

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

store.dispatch(increment({by: 5}));
store.dispatch(increment());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(decrement({by: 10}));
store.dispatch(set({to: -100}));

unsubscribe()
