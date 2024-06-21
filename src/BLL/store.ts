import {combineReducers, legacy_createStore, Store} from "redux";

import {TransactionReducer, TransactionStateType} from "./TransactionForm-reducer";
import {TransactionsReducer, TransactionsStateType} from "./Transactions-reducer";

export type rootStateType = {
    transactionForm: TransactionStateType;
    transactions: TransactionsStateType;
}

const rootReducer = combineReducers({
    transactionForm: TransactionReducer,
    transactions: TransactionsReducer
});

export const store: Store<rootStateType> = legacy_createStore(rootReducer);

// @ts-ignore
window.store = store;
