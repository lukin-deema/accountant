import React from "react";

export default class Append extends React.Component {
    static defaultProps = {
        fnInsert: ()=>{ }
    };
    static propTypes = {
        fnInsert: React.PropTypes.func,
    };
    insert = () => {
        const value = this.refs.value.value;
        const isIncome = this.refs.check.checked;
        this.props.fnInsert(value, isIncome);
    };
    render() {
        return (
            <form onSubmit={this.insert}>
                <input type="number" ref="value" />
                <input type="checkbox" ref="check" />
                <button type="submit">Add</button>
            </form>
        )
    }
}