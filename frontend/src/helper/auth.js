import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/user";

function useIsUserValid() {
    const dispatch = useDispatch();
    const user = useSelector(s => s.user.user);

    let data;
    const check = () => {
        if(!user) return 
        try {
            data = jwt_decode(user?.token)
            if (data.exp * 1000 < Date.now()) {      
                dispatch(logout())
                return false
            }
        } catch (err) {
            console.log(err)
            dispatch(logout())
            return false
        }
    }
    check()
    
    return [data, check]
  }

export default useIsUserValid;