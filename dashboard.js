window.onload = function () {

    // login check (important)
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "login.html";
        return;
    }

    // load chart after login check
    loadChart();
};

let chartInstance = null;

function loadChart() {

    const ctx = document.getElementById("trendChart").getContext("2d");

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
                {
                    label: "Present",
                    data: [450, 460, 470, 455, 480, 490, 500],
                    borderColor: "green",
                    fill: true
                },
                {
                    label: "Absent",
                    data: [50, 40, 30, 45, 20, 10, 0],
                    borderColor: "red",
                    fill: true
                }
            ]
        },
        options: {
            responsive: true
        }
    });
}


function animateCounters() {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 100; // speed control

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
}  