class BankAccount{
    constructor(accountNumber,ownerName,balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if (amount <= this.balance)
        {
            this.balance -= amount;
        }
        else{
            console.log('Insufficient funds');
        }
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        console.log('Account Number: '+ this.accountNumber + '\nOwner Name: '+ this.ownerName +'\nBalance: $'+ this.balance +'\n');
    }
}


const account1 = new BankAccount(1001,'Ostad',200);
account1.deposit(200);
account1.withdraw(100);
account1.displayAccountInfo();

const account2 = new BankAccount(1002,'Didarul Islam',500);
account2.deposit(200);
account2.withdraw(300);
account2.displayAccountInfo();


