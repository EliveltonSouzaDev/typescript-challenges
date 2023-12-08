import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { SecondaryAccount } from "./class/SecondaryAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Eli", 10);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
const secondaryAccount = new SecondaryAccount("Nath", 30);

peopleAccount.deposit(10);
console.log(peopleAccount);

companyAccount.deposit(10);
companyAccount.withdraw(20);
companyAccount.getLoan(50);
console.log(companyAccount);

secondaryAccount.deposit(150);
secondaryAccount.getBalance();
console.log(secondaryAccount);
