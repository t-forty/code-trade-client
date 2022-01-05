// get cookie value from "auth" key -- boolean

/** FROM THE INTERNET == TRY IT OUT WHEN COOKIES SETUP */
// function getCookie(name) {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   }

module.exports = {
    isAuthenticated: false
};