function saveAttendance() {


    let date =
        document.getElementById("date").value;



    if (date == "") {

        alert("Please select date");

        return;

    }



    let status =
        document.querySelectorAll(".status");



    let present = 0;

    let absent = 0;



    status.forEach(item => {


        if (item.value == "Present") {

            present++;

        }

        else {

            absent++;

        }


    });



    alert(

        "Attendance Saved Successfully\n\n" +
        "Present : " + present +
        "\nAbsent : " + absent

    );


}





function searchStudent() {


    let search =
        document.getElementById("search")
            .value
            .toLowerCase();



    let rows =
        document.querySelectorAll(
            "#attendanceTable tr"
        );



    rows.forEach(row => {


        if (row.innerText
            .toLowerCase()
            .includes(search)) {

            row.style.display = "";

        }

        else {

            row.style.display = "none";

        }


    });


}




function logout() {


    localStorage.clear();


    window.location.href = "login.html";


}