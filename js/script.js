var ctx = document.getElementById('myChart').getContext("2d");
var c = document.getElementById("myChart");
var ctx = c.getContext("2d");
var color = ctx.createLinearGradient(0, 0, 0, 170);
color.addColorStop(0, "rgba(243, 156, 27, 0.5)");
color.addColorStop(1, "rgba(243, 156, 27, 0)");
ctx.fillStyle = color;
ctx.fillRect(20, 20, 150, 100);

var myChart = new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
        labels: [0, 5, 10, 15, 20, 25, 30],
        datasets: [
            {
                data: [17, 20, 33, 10, 48, 10, 18],
                label: "Tickets",
                borderColor: "#f39c1b",
                fill: true,
                backgroundColor: color
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                    max: 50,
                    stepSize: 10
                },
                scaleLabel: {
                    display: true,
                    labelString: 'تعداد',
                    fontFamily: 'Shabnam'
                }
            }]
        },
        elements: {
            line: {
                tension: 0,
                strokeWidth: 100
            }
        }
    }
});






$(document).scroll(function () {
    let height = $(this).scrollTop();
    if (height > 40) {
        $('.search-box').fadeIn();
    } else {
        $('.search-box').fadeOut();
    }
});