//LOG-IN -------------------------------------------------------------------------------

export const setLogInUser = (userCredentials) => {
    fetch("https://insta-cart-api.herokuapp.com/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })
        .then(async (res) => {
            const resData = await res.json();
            if (resData.status === 0) {
                return window.alert(resData.error);
            }

            localStorage.setItem("user-info", JSON.stringify(resData));
            localStorage.setItem("isLogIn", JSON.stringify(true));

            return window.alert(resData.message);

        }).catch(err => {
            console.log(err);
        })
}



//SIGN-UP-----------------------------------------------------------------------------------

export const setSignUpUser = (userCredentials) => {
    fetch("https://insta-cart-api.herokuapp.com/auth/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userCredentials)
    })

        .then(async (res) => {
            const resData = await res.json();
            console.log(resData);
            if (resData.status === 0) {
                return window.alert(resData.error);
            }
            localStorage.setItem("reg-user-info", JSON.stringify(resData));
            return window.alert(resData.message);
        }).catch(err => {
            console.log(err);
        })
}


//Log-out-----------------------------------------------------------------------------------

export const setLogOut = () => {

    const parsedUser = JSON.parse(localStorage.getItem('user-info'))

    fetch('https://insta-cart-api.herokuapp.com/auth/logout', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + parsedUser.token
        },
    }).then(async (res) => {
        localStorage.clear('user-info')
        localStorage.setItem("isLogIn", JSON.stringify(false));
        const resJSON = await res.json();
        window.alert(resJSON.message)
        console.log(resJSON)

    }).catch((err) => {
        console.log(err);
    });
}


//If user login or not-------------------------------------------------
