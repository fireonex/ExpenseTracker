import React from 'react';
import {TextField, MenuItem, Button, FormControl, InputLabel, Select, SelectChangeEvent} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {CategoryType} from "./BLL/TransactionForm-reducer";
import {expenseCategories, incomeCategories} from "./utils/TransactionCategories";

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
        margin: 'auto',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px',
    },
});

interface AddTransactionFormProps {
    type: 'income' | 'expense';
    amount: number | string;
    category: CategoryType;
    date: Date;
    setTransactionType: (type: 'income' | 'expense') => void;
    setAmount: (amount: number) => void;
    setTransactionCategory: (category: CategoryType) => void;
    setTransactionDate: (date: Date) => void;
}


const AddTransactionForm: React.FC<AddTransactionFormProps> = ({
                                                                   type,
                                                                   amount,
                                                                   category,
                                                                   date,
                                                                   setTransactionType,
                                                                   setAmount,
                                                                   setTransactionCategory,
                                                                   setTransactionDate
                                                               }) => {
    const classes = useStyles();

    const handleTypeChange = (event: SelectChangeEvent<'income' | 'expense'>) => {
        setTransactionType(event.target.value as 'income' | 'expense');
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
        // Handle form submission
        console.log({type, amount, category, date});
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
                value={date.toISOString().substring(0, 10)}
                onChange={handleDateChange}
                InputLabelProps={{
                    shrink: true,
                }}
                required
            />

            <Button type="submit" variant="contained" color="primary">
                Добавить транзакцию
            </Button>
        </form>
    );
};

export default AddTransactionForm;
