import css from "./Profile.module.css"


export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.profileContainer}>
            <div>
                <img
                className={css.img}
                src={image}
                alt="User avatar"
                width={200}
                />
                <p className={css.name}>{name}</p>
                <p className={css.userData}>@{tag}</p>
                <p className={css.userData}>{location}</p>
            </div>
            <ul className={css.statList}>
                <li className={css.statListItem}>
                <span>Followers</span>
                <span>{stats.followers}</span>
                </li>
                <li className={css.statListItem}>
                <span>Views</span>
                <span>{stats.views}</span>
                </li>
                <li className={css.statListItem}>
                <span>Likes</span>
                <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
        
    )
};

