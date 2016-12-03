import React from "react";
import ExpenseListItem from './ExpenseListItem';
import Expense from '../model/Expense';
import Append from './Append';
import Storage from '../model/BrowserStorage';

export default class ExpenseList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expenses: Storage.load('array', [])
        }
    }
    onInsert = (value, isIncome) => {
        const {expenses} = this.state;
        expenses.push(new Expense(isIncome, value));
        Storage.save('array', expenses);
        this.setState({expenses});
    };
    onDelete = (id)=>{
        const {expenses} = this.state;
        expenses.splice(id,1);
        Storage.save('array', expenses);
        this.setState({expenses});
    };
    render() {
        const {expenses} = this.state;
        return (
            <div className="ExpenseList">
                <div>
                    <Append fnInsert={this.onInsert} />
                </div>
                <ul>
                    {expenses.map((x, i)=> {
                            return <li key={i}>
                                <ExpenseListItem id={i}
                                                 isIncome={x.getIsIncome()}
                                                 value={x.getValue()}
                                                 fnDelete={this.onDelete}
                                />
                            </li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}