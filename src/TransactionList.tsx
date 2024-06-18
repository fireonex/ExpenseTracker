import {TransactionStateType} from "./BLL/TransactionForm-reducer";
import {List, ListItem, ListItemText} from "@mui/material";

type TransactionListPropsType = {
    transactions: TransactionStateType[]
}

export function TransactionList({transactions}: TransactionListPropsType) {
    return (
        <List>
            {transactions.map((transaction) => (
                <ListItem key={transaction.id}>
                    <ListItemText
                        primary={`${transaction.type === 'income' ? 'Доход' : 'Расход'}: ${transaction.amount} - ${transaction.category}`}
                        secondary={transaction.date.toLocaleDateString()}
                    />
                </ListItem>
            ))}
        </List>
    )
}