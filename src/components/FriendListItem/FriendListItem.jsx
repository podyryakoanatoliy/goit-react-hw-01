import css from "./FriendListItem.module.css";
import clsx from "clsx";
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const checkOnline = clsx(css.status, isOnline ? css.isActive : css.isOffline);
  //   console.log(css);
  //   console.log(checkOnline);
  return (
    <div className={css.wrap}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.nameFriend}>{name}</p>
      <p className={checkOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
