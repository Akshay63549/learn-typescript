class BankAccount{
    private _balance:number=0;

    public get balance():number{
        return this._balance;
    }

    public set balance(newbalance:number){
                if (newbalance <0) {
                    throw new Error("Amount must be greater than 0");
                    
                } else {
                    this._balance = newbalance;
                }
    }

}
const account= new BankAccount();
account.balance=10;
console.log(account)

class Temprature{
    private _celsius:number=0;

    public get celsius():number{
        return this._celsius;
    }

    public set celsius(newcelsius:number){
                if (newcelsius <0) {
                    throw new Error("Amount must be greater than 0");
                    
                } else {
                    this._celsius = newcelsius;
                }
    }

    public get fahrenheit():number{
        return (this._celsius*9)/5+32;
    }

    public set fahrenheit(newfahrenheit:number){
        if (newfahrenheit <0) {
            throw new Error("Amount must be greater than 0");
            
        } else {
            this._celsius = ((newfahrenheit-32)*5)/9;

        }
}

}


const temp =new Temprature()
temp.celsius=25
console.log(temp.fahrenheit)
temp.fahrenheit=77
console.log(temp.celsius)
