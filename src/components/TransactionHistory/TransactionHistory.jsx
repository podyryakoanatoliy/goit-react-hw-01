import TransactionHistoryHead from "../TransactionHistoryHead/TransactionHistoryHead";
import TransactionHistoryList from "../TransactionHistoryList/TransactionHistoryList";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.mainTable}>
      <thead className={css.tableHead}>
        <TransactionHistoryHead />
      </thead>

      <tbody className={css.tableBody}>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionHistoryList item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
