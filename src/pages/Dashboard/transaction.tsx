class Transaction {
  id: string;

  title: string;

  value: number;

  formattedValue: string;

  formattedDate: string;

  type: 'income' | 'outcome';

  category: {
    title: string;
  };

  created_at: Date;
}

export default Transaction;