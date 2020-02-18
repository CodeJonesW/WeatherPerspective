
window.addEventListener("load", function () {
    let myChart = document.getElementById("myChart").getContext("2d")
    let massPopChart = new Chart(myChart, {
        type: "line", // bar, horizontal, bar, line, donut, pie, polar area
        data: {
            labels: ["Boston", "Worcester", "Springfield"],
            datasets: [{
                label: "Population",
                data: [10, 22, 18]
            }]
        },
        options: {}

    })
})
