import React from "react";
import { connect } from "react-redux";
import { rootStateType } from "./BLL/store";
import AddTransactionForm from "./AddTransactionForm";
import {
    CategoryType,
    setAmountAC,
    setTransactionCategoryAC,
    setTransactionDateAC,
    setTransactionTypeAC, TransactionStateType
} from "./BLL/TransactionForm-reducer";
import {submitTransactionAC} from "./BLL/Transactions-reducer";
import {TransactionList} from "./TransactionList";


interface MapStatePropsType {
    transactionForm: TransactionStateType;
    transactions: TransactionStateType[];
}

interface MapDispatchPropsType {
    setTransactionType: (transactionType: 'income' | 'expense') => void;
    setAmount: (amount: number) => void;
    setTransactionCategory: (category: CategoryType) => void;
    setTransactionDate: (date: Date) => void;
    submitTransaction: (transaction: TransactionStateType) => void
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
                <TransactionList transactions={this.props.transactions} />
            </>

        );
    }
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
    transactionForm: state.transactionForm,
    transactions: state.transactions,
});

const mapDispatchToProps: MapDispatchPropsType = {
    setTransactionType: setTransactionTypeAC,
    setAmount: setAmountAC,
    setTransactionCategory: setTransactionCategoryAC,
    setTransactionDate: setTransactionDateAC,
    submitTransaction: submitTransactionAC
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionListContainer);
