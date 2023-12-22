// Scroll to the top when the page is refreshed or loaded
$(document).ready(function () {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});


// Define tax slabs and rates statically
const taxSlabs = [
    {
        minAmount: 0,
        maxAmount: 600000,
        rate: 0,
        fixedAmount: 0,
        desc: "the annual salary income does not exceed PKR. 600,000 then the rate of the income tax is 0%"
    },
    {
        minAmount: 600001,
        maxAmount: 1200000,
        rate: 2.5,
        fixedAmount: 0,
        desc: "the annual salary income exceeds PKR. 600,000 but does not exceed PKR. 1.2 million then the rate of income tax is 2.5% of the amount exceeding PKR. 600,000."
    },
    {
        minAmount: 1200001,
        maxAmount: 2400000,
        rate: 12.5,
        fixedAmount: 15000,
        desc: "the taxable annual income exceeds PKR. 1.2 million but does not exceed PKR. 2.4 million then the rate of income tax is PKR. 15,000 + 12.5% of the amount exceeding PKR. 1.2 million."
    },
    {
        minAmount: 2400001,
        maxAmount: 3600000,
        rate: 22.5,
        fixedAmount: 165000,
        desc: "the annual salary income exceeds PKR. 2.4 million but does not exceed PKR. 3.6 million then the rate of income tax is flat PKR 165,000 + 22.5% of the amount exceeding PKR. 2.4 million"
    },
    {
        minAmount: 3600001,
        maxAmount: 6000000,
        rate: 27.5,
        fixedAmount: 435000,
        desc: "the annual salary income exceeds PKR. 3.6 million but does not exceed PKR. 6 million then the rate of income tax is flat PKR. 435,000 + 27.5% of the amount exceeding PKR. 3.6 million"
    },
    {
        minAmount: 6000001,
        maxAmount: 2147483647,
        rate: 35,
        fixedAmount: 1095000,
        desc: "the annual salary income exceeds PKR. 6 million then the rate of income tax is flat PKR 1,095,000 + 35% of the amount exceeding PKR. 6 million"
    },
    // Add more slabs as needed
];

// Function to calculate total tax based on income
function calculateTotalTax() {

    income = parseInt($("#income").val());
    if (!isNaN(income)) {
        is_annual = parseInt($("#is_annual").val());
        if (is_annual === 0)
            income = income * 12;
        let totalTax = 0;

        for (const slab of taxSlabs) {
            if (income > slab.minAmount && income <= slab.maxAmount) {
                totalTax = Math.ceil(((income - slab.minAmount) * slab.rate / 100) + slab.fixedAmount);
                $("#placerholder").text("When " + slab.desc);

                monSal = income / 12;
                monTax = totalTax / 12;

                $('#atotal').text(Math.ceil(monSal));
                $('#atax').text(Math.ceil(monTax));
                $('#anet').text(Math.ceil((monSal - monTax)));

                $('#btotal').text(Math.ceil(income));
                $('#btax').text(Math.ceil(totalTax));
                $('#bnet').text(Math.ceil((income - totalTax)));


                $('#cfixedTax').text(Math.ceil(slab.fixedAmount));
                $('#cpercentTax').text(Math.ceil(((income - slab.minAmount) * slab.rate / 100)));
                $('#ctotalTax').text(Math.ceil(totalTax));


                break; // Exit loop once the slab is found
            }
        }
        $('#intro').show();
        showPieChart(income - totalTax, totalTax);
        document.querySelector('#intro').scrollIntoView({
            behavior: 'smooth' // Scroll behavior: smooth for smooth scrolling
        });

        console.log('Total tax calculated using static data and JavaScript (including fixed amount):', totalTax);
    } else {
        alert("Enter a valid value for income");
    }

}


function showPieChart(net, tax) {
    var total = net + tax;
    var netPercentage = ((net / total) * 100).toFixed(2); // Calculate percentage for net income
    var taxPercentage = ((tax / total) * 100).toFixed(2); // Calculate percentage for tax

    var pieChartCanvas = $('#pieChart').get(0).getContext('2d');
    new Chart(pieChartCanvas, {
        type: 'doughnut',
        data: {
            labels: ['Income %', 'Tax %'],
            datasets: [{
                data: [netPercentage, taxPercentage],
                backgroundColor: [
                    'rgba(0, 128, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

