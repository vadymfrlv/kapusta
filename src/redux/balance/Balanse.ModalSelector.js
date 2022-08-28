export const isTransaction = state =>
  state.balance === 0 && state.transactions.items.length !== 0;
