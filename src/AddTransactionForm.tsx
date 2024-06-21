import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material';
import {CategoryType, TransactionStateType, TransactionsType} from "./BLL/TransactionForm-reducer";
import {expenseCategories, incomeCategories} from "./utils/TransactionCategories";
import {v1} from 'uuid';
import {useStyles} from "./utils/useStyles";


interface AddTransactionFormProps {
    type: TransactionsType;
    amount: number | string;
    category: CategoryType;
    date: Date | string;
    setTransactionType: (type: TransactionsType) => void;
    setAmount: (amount: number) => void;
    setTransactionCategory: (category: CategoryType) => void;
    setTransactionDate: (date: Date) => void;
    setHandleSubmit: (transaction: TransactionStateType) => void;
}

export const AddTransactionForm: React.FC<AddTransactionFormProps> = ({
                                                                          type,
                                                                          amount,
                                                                          category,
                                                                          date,
                                                                          setTransactionType,
                                                                          setAmount,
                                                                          setTransactionCategory,
                                                                          setTransactionDate,
                                                                          setHandleSubmit
                                                                      }) => {
    const classes = useStyles();

    const handleTypeChange = (event: SelectChangeEvent<TransactionsType>) => {
        setTransactionType(event.target.value as TransactionsType);
        setTransactionCategory('' as CategoryType); // сброс категории при изменении типа
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleCategoryChange = (event: SelectChangeEvent<CategoryType>) => {
        setTransactionCategory(event.target.value as CategoryType);
    };

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionDate(new Date(event.target.value));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTransaction: TransactionStateType = {
            id: v1(),
            type,
            amount: Number(amount),
            category,
            date: new Date(date)
        };
        setHandleSubmit(newTransaction);
    };

    const categories = type === 'income' ? incomeCategories : expenseCategories;

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <FormControl fullWidth>
                <InputLabel id="type-label">Тип</InputLabel>
                <Select
                    labelId="type-label"
                    value={type}
                    onChange={handleTypeChange}
                >
                    <MenuItem value="income">Доход</MenuItem>
                    <MenuItem value="expense">Расход</MenuItem>
                </Select>
            </FormControl>

            <TextField
                label="Сумма"
                type="number"
                fullWidth
                value={amount}
                onChange={handleAmountChange}
                required
            />

            <FormControl fullWidth>
                <InputLabel id="category-label">Категория</InputLabel>
                <Select
                    labelId="category-label"
                    value={category}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <MenuItem key={category} value={category}>
                            {category}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                label="Дата"
                type="date"
                fullWidth
                value={date instanceof Date ? date.toISOString().substring(0, 10) : new Date(date).toISOString().substring(0, 10)}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
                required
            />

            <Button type="submit" variant="contained" className={classes.button}>
                Добавить транзакцию
            </Button>
        </form>
    );
};
