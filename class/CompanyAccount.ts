import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanAmount: number): void => {
    if (this.validateStatus()) {
      this.balance += loanAmount;
      console.log(
        `Você pegou um empréstimo de ${loanAmount} reais. Novo saldo: ${this.balance} reais.`
      );
    } else {
      console.log("Conta com status falso. Não é possível fazer empréstimo.");
    }
  };
}
