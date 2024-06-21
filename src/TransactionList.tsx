import React from 'react';
import { TransactionStateType } from "./BLL/TransactionForm-reducer";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { FilterType } from "./BLL/Transactions-reducer";
import { useStyles } from "./utils/useStyles";

type TransactionListPropsType = {
    transactions: TransactionStateType[];
    filter: FilterType;
    filterTransactionType: (transactionFilter: FilterType) => void;
}

export function TransactionList({ transactions, filter, filterTransactionType }: TransactionListPropsType) {
    const classes = useStyles();

    const filteredTransactions = filter === 'all'
        ? transactions
        : transactions.filter((transaction) => transaction.type === filter);

    const filterTypeIncomeHandler = () => {
        filterTransactionType('income');
    }
    const filterTypeExpenseHandler = () => {
        filterTransactionType('expense');
    }
    const filterTypeAllHandler = () => {
        filterTransactionType('all');
    }

    return (
        <div>
            <div className={classes.filterButtons}>
                <Button onClick={filterTypeIncomeHandler}>
                    Доходы
                </Button>
                <Button onClick={filterTypeExpenseHandler}>
                    Расходы
                </Button>
                <Button onClick={filterTypeAllHandler}>
                    Все
                </Button>
            </div>
            <List className={classes.list}>
                {filteredTransactions.map((transaction) => (
                    <ListItem key={transaction.id} className={classes.listItem}>
                        <ListItemText
                            primary={`${transaction.type === 'income' ? 'Доход' : 'Расход'}: ${transaction.amount} - ${transaction.category}`}
                            secondary={new Date(transaction.date).toLocaleDateString()}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
