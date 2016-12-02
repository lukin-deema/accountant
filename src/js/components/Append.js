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
        const value = this.refs.num.value;
        const isIncome = this.refs.check.checked;
        this.props.Insert(value, isIncome);
    };
    render() {
        return (
            <form onSubmit={this.insert}>
                <input type="number" ref="num" />
                <input type="checkbox" ref="check" />
                <button type="submit">Add</button>
            </form>
        )
    }
}