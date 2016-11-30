import React from "react";

export default class ExpenseListItem extends React.Component {
    static defaultProps = {
        isIncome: false,
        value: 0,
    };
    static propTypes = {
        isIncome: React.PropTypes.bool,
        value: React.PropTypes.number,
    };
    render() {
        return (
            <div style={{'color':this.props.isIncome?"green":"red"}}>
                {this.props.value}
            </div>
        )
    }
}