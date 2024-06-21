import React from "react";
import { connect } from "react-redux";
import { rootStateType } from "./BLL/store";

import {
    CategoryType,
    setAmountAC,
    setTransactionCategoryAC,
    setTransactionDateAC,
    setTransactionTypeAC, TransactionStateType, TransactionsType
} from "./BLL/TransactionForm-reducer";
import {filterTransactionTypeAC, FilterType, submitTransactionAC} from "./BLL/Transactions-reducer";
import { TransactionList } from "./TransactionList";
import {AddTransactionForm} from "./AddTransactionForm";

interface MapStatePropsType {
    transactionForm: TransactionStateType;
    transactions: TransactionStateType[];
    filter: FilterType;
}

interface MapDispatchPropsType {
    setTransactionType: (transactionType: TransactionsType) => void;
    setAmount: (amount: number) => void;
    setTransactionCategory: (category: CategoryType) => void;
    setTransactionDate: (date: Date) => void;
    submitTransaction: (transaction: TransactionStateType) => void;
    filterTransactionType: (transactionFilter: FilterType) => void;
}

type TransactionListContainerPropsType = MapStatePropsType & MapDispatchPropsType;

class TransactionListContainer extends React.Component<TransactionListContainerPropsType> {
    render() {
        if (!this.props.transactionForm) {
            return <div>Loading...</div>;
        }

        return (
            <>
                <AddTransactionForm
                    type={this.props.transactionForm.type}
                    amount={this.props.transactionForm.amount}
                    category={this.props.transactionForm.category}
                    date={this.props.transactionForm.date}
                    setTransactionType={this.props.setTransactionType}
                    setAmount={this.props.setAmount}
                    setTransactionCategory={this.props.setTransactionCategory}
                    setTransactionDate={this.props.setTransactionDate}
                    setHandleSubmit={this.props.submitTransaction}
                />
                <TransactionList
                    transactions={this.props.transactions}
                    filter={this.props.filter}
                    filterTransactionType={this.props.filterTransactionType}
                />
            </>
        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    transactionForm: state.transactionForm,
    transactions: state.transactions.transactions,
    filter: state.transactions.filter,
});

const mapDispatchToProps: MapDispatchPropsType = {
    setTransactionType: setTransactionTypeAC,
    setAmount: setAmountAC,
    setTransactionCategory: setTransactionCategoryAC,
    setTransactionDate: setTransactionDateAC,
    submitTransaction: submitTransactionAC,
    filterTransactionType: filterTransactionTypeAC
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer);
