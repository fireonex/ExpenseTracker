//---------types----------------------------------------------------//

export type TransactionActionType = ReturnType<typeof setTransactionTypeAC>
    | ReturnType<typeof setTransactionCategoryAC>
    | ReturnType<typeof setAmountAC>
    | ReturnType<typeof setTransactionDateAC>


export type TransactionsType = 'income' | 'expense'

export type TransactionStateType = {
    id: string;
    type: TransactionsType;
    amount: number;
    category: CategoryType;
    date: Date;
}

export type CategoryType = 'Food' | 'Clothes' | 'Bills' | 'Entertainment' | 'Health' | 'Hygiene' | 'Minecraft' | 'BadHabits';

//-----------------------------------------------------------------//


let initialState: TransactionStateType = {
    id: '1',
    type: 'expense',
    amount: 1000,
    category: 'Food',
    date: new Date('2020-01-01')
}



export const TransactionReducer = (state = initialState, action: TransactionActionType) => {

    switch (action.type) {
        case "SET-TRANSACTION-TYPE": return {...state, type: action.transactionType}
        case "SET-AMOUNT": return {...state, amount: action.amount}
        case "SET-TRANSACTION-CATEGORY": return {...state, category: action.category}
        case "SET-TRANSACTION-DATE": return {...state, date: action.date}
        default:
            return state;
    }
}


export const setTransactionTypeAC = (transactionType: TransactionsType) => ({
    type: "SET-TRANSACTION-TYPE", transactionType
}) as const;

export const setAmountAC = (amount: number) => ({
    type: "SET-AMOUNT", amount
}) as const;

export const setTransactionCategoryAC = (category: CategoryType) => ({
    type: "SET-TRANSACTION-CATEGORY", category
}) as const;

export const setTransactionDateAC = (date: Date) => ({
    type: "SET-TRANSACTION-DATE", date
}) as const;






