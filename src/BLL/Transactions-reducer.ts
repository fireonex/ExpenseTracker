import { TransactionStateType, TransactionsType } from "./TransactionForm-reducer";

export type FilterType = TransactionsType | 'all';

export type TransactionsActionType =
    | ReturnType<typeof submitTransactionAC>
    | ReturnType<typeof filterTransactionTypeAC>;

export type TransactionsStateType = {
    transactions: TransactionStateType[];
    filter: FilterType;
}

const initialState: TransactionsStateType = {
    transactions: [{
        id: '1',
        type: 'expense',
        amount: 1000,
        category: 'Food',
        date: new Date('2020-01-01')
    }],
    filter: 'all'
};

export const TransactionsReducer = (state = initialState, action: TransactionsActionType): TransactionsStateType => {
    switch (action.type) {
        case "SUBMIT-TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions, action.transaction]
            };
        case "FILTER-TRANSACTION-TYPE":
            return {
                ...state,
                filter: action.transactionFilter
            };
        default:
            return state;
    }
};

export const submitTransactionAC = (transaction: TransactionStateType) => ({
    type: "SUBMIT-TRANSACTION",
    transaction
}) as const;

export const filterTransactionTypeAC = (transactionFilter: FilterType) => ({
    type: "FILTER-TRANSACTION-TYPE",
    transactionFilter
}) as const;
