import {combineReducers, legacy_createStore, Store} from "redux";
import {TransactionActionType, TransactionReducer, TransactionStateType} from "./TransactionForm-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";
import {TransactionsReducer} from "./Transactions-reducer";


export type rootStateType = {
    transactionForm: TransactionStateType,
    transactions: TransactionStateType[]
}

export type actionType = TransactionActionType




let rootReducer = combineReducers({
    transactionForm: TransactionReducer,
    transactions: TransactionsReducer
});

export let store: Store<rootStateType, actionType> = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        transactionForm: store.getState().transactionForm,
        transactions: store.getState().transactions
    });
});

//@ts-ignore
window.store = store


