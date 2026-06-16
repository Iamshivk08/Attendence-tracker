function logout(){

    // clear session
    localStorage.clear();

    // redirect to login page
    window.location.href = "login.html";

}