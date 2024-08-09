import css from "./FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css.listFriend}>
      {friends.map((item) => {
        return (
          <li key={item.id} className={css.itemFriends}>
            <FriendListItem friend={item} />
          </li>
        );
      })}
    </ul>
  );
}
