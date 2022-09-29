import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../providers/user/user.provider";

const LogOut = () => {

    const { LogOut } = useContext(UserContext);

     const userlogin = localStorage.getItem('isLogIn')
     const IsLogIn = JSON.parse(userlogin)

    const handlelogout = () => {
        LogOut();
    }

    return (<div>
        { IsLogIn &&
            (<div>
                <button className={'bg-green-600 w-24 h-12 rounded-3xl text-white mt-3 mr-4 font-semibold'} onClick={handlelogout}>
                    Log Out
                </button>
            </div>)}
        
    </div>
    )
};

export default withRouter(LogOut);