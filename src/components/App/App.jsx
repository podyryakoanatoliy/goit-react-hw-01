import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import profileData from "../../data/userData.json";
import friendData from "../../data/friendData.json";
import transactions from "../../data/transactions.json";

import "./App.module.css";

export default function App() {
  return (
    <div>
      <Profile profile={profileData} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
