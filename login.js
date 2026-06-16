function login() {


    let username =
        document.getElementById("username").value;


    let password =
        document.getElementById("password").value;



    if (username == "admin" && password == "admin123") {


        document.getElementById("loginBtn").href =
            "dashboard.html";


    }

    else {


        document.getElementById("msg").innerHTML =
            "Invalid Username or Password";


    }


}