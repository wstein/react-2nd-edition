import {combineReducers, createStore} from "redux";

// Expenses Reducer
const expensesReducerDefaults = [];

const expensesReducer = (state = expensesReducerDefaults, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filters Reducer
const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

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