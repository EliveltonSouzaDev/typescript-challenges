import { DioAccount } from "./DioAccount";

export class SecondaryAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value + 10;
    }
  };
}
