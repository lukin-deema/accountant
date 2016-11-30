import React from "react";
import Expense from "../model/Expense";

export default class Append extends React.Component {
    static defaultProps = {
        Insert: ()=>{ }
    };
    static propTypes = {
        Insert: React.PropTypes.func,
    };
    insert = () => {
        const value = 2;
        const isIncome = true;
        this.props.Insert(value, isIncome);
    };
    render() {
        return (
            <form onSubmit={this.insert()}>
                <input type="number" />
                <input type="checkbox" />
                <button type="submit">Add</button>
            </form>
        )
    }
}