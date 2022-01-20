import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useTransactions() {
  const context = useContext(TransactionsContext);

  if (!Object.keys(context).length) {
    throw new Error(
      "useTransactions hook must be used inside a TransactionsContext Provider"
    );
  }

  return context;
}
