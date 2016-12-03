
export default class Expense {
    constructor(isIncome, value){
        this.isIncome = isIncome;
        this.value = value;
    }
    getValue(){
        return this.value;
    }
    getIsIncome(){
        return this.isIncome;
    }
    parse(){
        return {value: this.value, isIncome: this.isIncome};
    }
}