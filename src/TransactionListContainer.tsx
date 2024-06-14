// // import {TransactionList} from "./TransactionList";
// // import React from "react";
// // import {connect} from "react-redux";
// // // import {rootStateType} from "./BLL/store";
// //
// // export interface AppState {
// //     transactions: TransactionsState;
// //     filter: FilterState;
// // }
// //
// interface TransactionsState {
//     transactions: Transaction[];
// }
//
// import {connect} from "react-redux";
// import {rootStateType} from "./BLL/store";
//
export interface FilterState {
    selectedMonth: string; // В формате 'YYYY-MM'
}
// //
// class Transaction {
//     constructor(
//         public id: number,
//         public type: 'income' | 'expense',
//         public amount: number,
//         public category: string,
//         public date: Date
//     ) {}
// }
//
// type TransactionListContainerPropsType = MapStatePropsType & MapDispatchPropsType
//
// type MapStatePropsType = {
//
// }
//
// type MapDispatchPropsType = {
//
// }
//
//
//
// type PropsType = TransactionListContainerPropsType
//
// class TransactionListContainer extends React.Component<PropsType> {
//     componentDidMount() {
//
//     }
//
//     render() {
//         if (!this.props) {
//             return <div>Loading...</div>;
//         }
//
//
//         return (
//             <TransactionList/>
//         );
//     }
// }
//
// const mapStateToProps = (state: rootStateType): MapStatePropsType => ({
//
// });
//
//
//
// export default connect(mapStateToProps, {})(TransactionListContainer);
