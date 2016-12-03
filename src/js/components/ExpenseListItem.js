import React from "react";

export default class ExpenseListItem extends React.Component {
    static defaultProps = {
        id: 0,
        isIncome: false,
        value: 0,
        fnDelete: ()=>{},
    };
    static propTypes = {
        id: React.PropTypes.number,
        isIncome: React.PropTypes.bool,
        value: React.PropTypes.string,
        fnDelete: React.PropTypes.func,
    };
    onDelete = ()=>{
        this.props.fnDelete(this.props.id);
    };
    render() {
        const style = {'border': (this.props.isIncome?"green":"red") + " solid 1px"};
        return (
            <div className="ExpenseListItem" style={style}>
                <div className="ExpenseListItemValue" >{this.props.value}</div>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
}