// import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.mainInfo}>
        <img src={avatar} alt={username} className={css.avatar} />
        <div className={css.userInfo}>
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.numberStats}>
          <span>Followers </span>
          <span>{followers}</span>
        </li>
        <li className={css.numberStats}>
          <span>Views </span>
          <span>{views}</span>
        </li>
        <li className={css.numberStats}>
          <span>Likes </span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
