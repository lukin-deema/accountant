import Expense from './Expense';

export default class BrowserStorage{
    /**
     * Save
     * @param storageKey String
     * @param value Expenses[]
     */
    static save(storageKey, value){
        localStorage.setItem(
            'app-key-' + storageKey,
            JSON.stringify(value.map(x => x.parse()))
        );
    }

    /**
     * Load
     * @param storageKey
     * @param byDefault
     * @returns Expenses[]
     */
    static load(storageKey, byDefault){
        const storedArray = localStorage.getItem('app-key-' + storageKey);
        if(!storedArray) {
            return byDefault;
        }
        const array = JSON.parse(storedArray);
        return array.map(x => new Expense(x.isIncome, x.value))
    }
    static delete(storageKey){
        localStorage.removeItem('app-key-' + storageKey);
    }
}