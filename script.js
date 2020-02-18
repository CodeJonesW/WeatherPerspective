

let temperatures = []
let dates = []

window.addEventListener("load", function () {
    let key = ""


    $.ajax({
        type: "GET",
        url: `http://api.openweathermap.org/data/2.5/forecast?q=Brevard,us&units=imperial&appid=${key}`
    })
        .then(function (data) {
            console.log(data)

            for (let i = 0; i < data.list.length; i++) {
                temperatures.push(data.list[i].main.temp)
            }

            for (let i = 0; i < data.list.length; i++) {
                dates.push(data.list[i].dt_txt)
            }

            let myChart = document.getElementById("myChart").getContext("2d")
            let massPopChart = new Chart(myChart, {
                type: "line", // bar, horizontal, bar, line, donut, pie, polar area
                data: {
                    labels: dates,
                    datasets: [{
                        label: "Temperature (Imperial)",
                        data: temperatures
                    }]
                },
                options: {}

            })

        })





})




// let count = "16"
// let cityName = "Atlanta"
// let queryUrl = `"http://api.openweathermap.org/data/2.5/forecast?q=Atlanta,us&mode=xml&appid=9d900c46a82ac29300d02baa0107cbe8"`

// $.ajax({
//     type: "GET",
//     url: queryUrl
// }).then(function (data) {
//     console.log(data)
// })
