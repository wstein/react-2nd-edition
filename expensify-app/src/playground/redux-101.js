import {createStore} from "redux";

let initState = {
    count: 0
};

const store = createStore((state = initState) => state);

console.log(store.getState());