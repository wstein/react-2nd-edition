import {createStore, combineReducers} from "redux";

const demoState = {
    expenses: [{
        id: 'fjhlkasdejkl',
        description: 'January Rent',
        note: 'This was the final payment for this address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // or date
        startDate: undefined,
        endDate: undefined
    }
};