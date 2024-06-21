//---------types----------------------------------------------------//

export type TransactionActionType =
    | ReturnType<typeof setTransactionTypeAC>
    | ReturnType<typeof setTransactionCategoryAC>
    | ReturnType<typeof setAmountAC>
    | ReturnType<typeof setTransactionDateAC>
    | ReturnType<typeof resetTransactionAC>;

export type TransactionsType = 'income' | 'expense';

export type TransactionStateType = {
    id: string;
    type: TransactionsType;
    amount: number | string;
    category: CategoryType;
    date: Date;
};

export type CategoryType =
    'Food' | 'Clothes' | 'Bills' | 'Entertainment' | 'Health' | 'Hygiene' | 'Minecraft' | 'BadHabits';

//-----------------------------------------------------------------//

const initialTransactionState: TransactionStateType = {
    id: '',
    type: 'income',
    amount: 0,
    category: 'Food',
    date: new Date(),
};

export const TransactionReducer = (state = initialTransactionState, action: TransactionActionType): TransactionStateType => {
    switch (action.type) {
        case "SET-TRANSACTION-TYPE":
            return {...state, type: action.transactionType};
        case "SET-AMOUNT":
            return {...state, amount: action.amount};
        case "SET-TRANSACTION-CATEGORY":
            return {...state, category: action.category};
        case "SET-TRANSACTION-DATE":
            return {...state, date: action.date};
        case "RESET-TRANSACTION":
            return initialTransactionState;
        default:
            return state;
    }
};

export const setTransactionTypeAC = (transactionType: TransactionsType) => ({
    type: "SET-TRANSACTION-TYPE",
    transactionType
}) as const;

export const setAmountAC = (amount: number | string) => ({
    type: "SET-AMOUNT",
    amount
}) as const;

export const setTransactionCategoryAC = (category: CategoryType) => ({
    type: "SET-TRANSACTION-CATEGORY",
    category
}) as const;

export const setTransactionDateAC = (date: Date) => ({
    type: "SET-TRANSACTION-DATE",
    date
}) as const;

export const resetTransactionAC = () => ({
    type: "RESET-TRANSACTION"
}) as const;
