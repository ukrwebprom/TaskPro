import { useAuth } from 'hooks/useAuth';
import avaDark from '../../images/user_dark.svg';
import avaLight from '../../images/user_light.svg';
import avaViolet from '../../images/user_violet.svg';

export const Avatar = ({size, onClick}) => {
    const {user} = useAuth();
    const defaultAvatar = {
        dark:avaDark,
        light:avaLight,
        violet:avaViolet
    }

    return(
        <img 
        src={user.avatar? user.avatar : defaultAvatar[user.theme]} 
        alt={user.name}
        width={size} 
        height={size} 
        onClick={onClick} 
        style={{borderRadius:"5px", cursor:"pointer"}}
        /> 
    )
}