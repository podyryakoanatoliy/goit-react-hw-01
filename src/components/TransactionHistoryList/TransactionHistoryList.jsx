import css from "./TransactionHistoryList.module.css";

export default function TransactionHistoryList({
  item: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.operationInfo}>{type}</td>
      <td className={css.operationInfo}>{amount}</td>
      <td className={css.operationInfo}>{currency}</td>
    </>
  );
}
