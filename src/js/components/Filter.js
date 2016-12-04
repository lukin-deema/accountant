import React from "react";
import {RadioGroup, Radio} from 'react-radio-group';
import {filter} from "../model/constants";

export default class Filter extends React.Component {
    static defaultProps = {
        fnFilter: ()=>{},
        filter: filter.none,
    };
    static propTypes = {
        fnFilter: React.PropTypes.func,
        filter: filter.none,
    };
    onFilter = (value)=>{
        this.props.fnFilter(value);
    };
    render() {
        return (
            <RadioGroup name="filter" selectedValue={this.props.filter} onChange={this.onFilter}>
                <Radio value={filter.none} />None
                <Radio value={filter.income} />Incomes
                <Radio value={filter.expense} />Expanses
            </RadioGroup>
        )
    }
}