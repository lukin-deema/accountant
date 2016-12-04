import React from "react";
import ExpenseListItem from './ExpenseListItem';
import Expense from '../model/Expense';
import Append from './Append';
import Storage from '../model/BrowserStorage';
import Filter from './Filter'
import {filter} from "../model/constants";

export default class ExpenseList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expenses: Storage.load('array', []),
            filter: filter.none, // 0-none, 1-income, 2-expense
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
    onFilter=(v)=>{
        this.setState({filter: v});
    };
    filtering=(item)=>{
        if(this.state.filter==filter.none) return true;
        if(this.state.filter==filter.income) return item.isIncome;
        if(this.state.filter==filter.expense) return !item.isIncome;
    };
    render() {
        const {expenses} = this.state;
        return (
            <div className="ExpenseList">
                <Append fnInsert={this.onInsert} />
                <Filter fnFilter={this.onFilter} filter={this.state.filter}/>
                <ul>
                    {expenses.filter(x=>this.filtering(x)).map((x, i)=> {
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