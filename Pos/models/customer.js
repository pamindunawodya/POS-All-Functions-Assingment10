export default class Customer{

    get customer_id() {
        return this._customer_id;
    }

    set customer_id(value) {
        this._customer_id = value;
    }

    get customer_name() {
        return this._customer_name;
    }

    set customer_name(value) {
        this._customer_name = value;
    }

    get customer_address() {
        return this._customer_address;
    }

    set customer_address(value) {
        this._customer_address = value;
    }

    get customer_salary() {
        return this._customer_salary;
    }

    set customer_salary(value) {
        this._customer_salary = value;
    }

    constructor(customer_id,customer_name,customer_address,customer_salary) {


    this._customer_id = customer_id;
        this._customer_name = customer_name;
        this._customer_address = customer_address;
        this._customer_salary = customer_salary;
    }
}