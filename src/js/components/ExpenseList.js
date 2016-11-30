import React from "react";
import ExpenseListItem from './ExpenseListItem';
import Expense from '../model/Expense';
import Append from './Append';

export default class ExpenseList extends React.Component {
    constructor(){
        this.state = {
            expenses: []
        }
    }
    insert = (value, isIncome) => {
        const {expenses} = this.state;
        expenses.push(new Expense(isIncome, value));
        this.setState({expenses: expenses});
    };
    render() {
        return (
            <div>
                <div>
                    <Append Insert={this.insert} />
                </div>
                <div>
                    {this.state.expenses.map(x=>
                        <ExpenseListItem isIncome={x.getIsIncome()} value={x.getValue()}/>
                    )}
                </div>
            </div>
        )
    }
}