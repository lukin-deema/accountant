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
        const predicate = this.props.isIncome?"+":"-";
        return (
            <div className="ExpenseListItem">
                <div className="ExpenseListItemValue" >{predicate}{this.props.value}</div>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
}