import css from "./TransactionHistoryHead.module.css";

export default function TransactionHistoryHead() {
  return (
    <tr>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
  );
}
