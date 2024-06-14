import {combineReducers, createStore, Store} from "redux";
import {TransactionActionType, TransactionReducer, TransactionStateType} from "./TransactionForm-reducer";


export type rootStateType = {
    transactionForm: TransactionStateType
}


export type actionType = TransactionActionType


let reducers = combineReducers({
    transactionForm: TransactionReducer
});

export let store: Store<rootStateType, actionType> = createStore(reducers)

//@ts-ignore
window.store = store


