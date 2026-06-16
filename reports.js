window.onload = function () {

    loadReport();
    drawChart();

};



function loadReport() {


    // Sample data (you will later connect backend DB)

    let students = 100;
    let present = 82;
    let absent = students - present;


    let percentage = ((present / students) * 100).toFixed(2);



    document.getElementById("totalStudents").innerText = students;
    document.getElementById("totalPresent").innerText = present;
    document.getElementById("totalAbsent").innerText = absent;
    document.getElementById("percentage").innerText = percentage + "%";

}



function drawChart() {


    const ctx = document.getElementById("chart").getContext("2d");


    new Chart(ctx, {

        type: "doughnut",

        data: {

            labels: ["Present", "Absent"],

            datasets: [{

                data: [82, 18],

                backgroundColor: ["#16a34a", "#ef4444"]

            }]

        },

        options: {

            responsive: true

        }

    });

}



function exportReport() {


    let report = `
ATTENDANCE REPORT

-----------------------
Total Students: ${document.getElementById("totalStudents").innerText}
Present: ${document.getElementById("totalPresent").innerText}
Absent: ${document.getElementById("totalAbsent").innerText}
Attendance %: ${document.getElementById("percentage").innerText}
-----------------------
Generated Successfully
`;


    let blob = new Blob([report], { type: "text/plain" });

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "attendance_report.txt";

    link.click();

}



function logout() {

    localStorage.clear();

    window.location.href = "login.html";

}