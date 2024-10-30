import css from "./FriendList.module.css"


export default function FriendList({friends}) {

    function FriendListItem({avatar,name,isOnline}) {
        return (
    
            <div className={css.friendListItem}>
            <img src={avatar} alt="Avatar" width="100" />
            <p className={css.friendName}>{name}</p>
            <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
            {isOnline ? "Online" : "Offline"}</p>
            </div>
        )
    }

return (

    <ul className={css.friendList}>
        {friends.map(friend => (
            <li key={friend.id}>
                <FriendListItem 
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            </li>
        ))}
    </ul>

    )
} 