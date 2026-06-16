let students = [];

let count = 1;



function addStudent() {


    let name =
        document.getElementById("studentName").value;


    let email =
        document.getElementById("studentEmail").value;


    let dept =
        document.getElementById("studentDept").value;



    if (name == "" || email == "" || dept == "") {

        alert("Please fill all fields");

        return;

    }



    students.push({

        id: count++,
        name: name,
        email: email,
        dept: dept

    });



    displayStudents();


}




function displayStudents() {


    let table =
        document.getElementById("studentTable");


    table.innerHTML = "";



    students.forEach((student, index) => {


        table.innerHTML += `

<tr>

<td>${student.id}</td>

<td>${student.name}</td>

<td>${student.email}</td>

<td>${student.dept}</td>


<td>

<button class="delete"
onclick="deleteStudent(${index})">

Delete

</button>

</td>


</tr>


`;


    });


}





function deleteStudent(index) {


    students.splice(index, 1);


    displayStudents();


}





function searchStudent() {


    let value =
        document.getElementById("search").value.toLowerCase();



    let rows =
        document.querySelectorAll("#studentTable tr");



    rows.forEach(row => {


        row.style.display =
            row.innerText.toLowerCase()
                .includes(value)
                ?
                ""
                :
                "none";


    });


}





function logout() {


    localStorage.clear();


    window.location.href = "login.html";


}