import Transaction from './transaction';
import Balance from './balance';

class Response {
  transactions: Transaction[] = [];

  balance: Balance;
}

export default Response;
