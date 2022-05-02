import {combineReducers, createStore} from "redux";
import uuid from "uuid";

const addExpense = ({
                        description = '',
                        note = '',
                        amount = 0,
                        createdAt = 0
                    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense: {id}
});

// Expenses Reducer
const expensesReducerDefaults = [];

const expensesReducer = (state = expensesReducerDefaults, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.expense.id);
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

store.subscribe(() => {
    console.log(store.getState());
});

const expense1 = store.dispatch(addExpense({description: 'Rent', amount: 100}));
const expense2 = store.dispatch(addExpense({description: 'Coffee', amount: 300}));
store.dispatch(removeExpense({id: expense1.expense.id}));

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