//---------types----------------------------------------------------//

import {TransactionStateType} from "./TransactionForm-reducer";

export type TransactionsActionType =
    | ReturnType<typeof submitTransactionAC>



//-----------------------------------------------------------------//


let initialState: TransactionStateType[] = [{
    id: '1',
    type: 'expense',
    amount: 1000,
    category: 'Food',
    date: new Date('2020-01-01')
}]



export const TransactionsReducer = (state = initialState, action: TransactionsActionType) => {

    switch (action.type) {
        case "SUBMIT-TRANSACTION":
            return [
                ...state, action.transaction
            ]
        default:
            return state;
    }
}

export const submitTransactionAC = (transaction: TransactionStateType) => ({
    type: "SUBMIT-TRANSACTION", transaction
}) as const;





