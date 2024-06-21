import { TransactionStateType, TransactionsType } from "./TransactionForm-reducer";

export type FilterType = TransactionsType | 'all';

export type TransactionsActionType =
    | ReturnType<typeof submitTransactionAC>
    | ReturnType<typeof filterTransactionTypeAC>
    | ReturnType<typeof resetTransactionsAC>;

export type TransactionsStateType = {
    transactions: TransactionStateType[];
    filter: FilterType;
};

const initialTransactionsState: TransactionsStateType = {
    transactions: [],
    filter: 'all',
};

export const TransactionsReducer = (state = initialTransactionsState, action: TransactionsActionType): TransactionsStateType => {
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
        case "RESET-TRANSACTIONS":
            return initialTransactionsState;
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

export const resetTransactionsAC = () => ({
    type: "RESET-TRANSACTIONS"
}) as const;
