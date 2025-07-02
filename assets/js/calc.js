// Scroll to the top when the page is refreshed or loaded
$(document).ready(function () {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});
/*
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
*/
// ... Add other objects for different years
const taxSlabs = [
    { slab_year_id: 2, year_id: "2015-2016", slabs: [
        { min_amount: 350001, max_amount: 400000, fixed_amount: 0, rate: 1.5 },
        { min_amount: 400001, max_amount: 450000, fixed_amount: 0, rate: 2.5 },
        { min_amount: 450001, max_amount: 550000, fixed_amount: 0, rate: 3.5 },
        { min_amount: 550001, max_amount: 650000, fixed_amount: 0, rate: 4.5 },
        { min_amount: 650001, max_amount: 750000, fixed_amount: 0, rate: 6 },
        { min_amount: 750001, max_amount: 900000, fixed_amount: 0, rate: 7.5 },
        { min_amount: 900001, max_amount: 1050000, fixed_amount: 0, rate: 9 },
        { min_amount: 1050001, max_amount: 1200000, fixed_amount: 0, rate: 10 },
        { min_amount: 1200001, max_amount: 1450000, fixed_amount: 0, rate: 11 },
        { min_amount: 1450001, max_amount: 1700000, fixed_amount: 0, rate: 12.5 },
        { min_amount: 1700001, max_amount: 1950000, fixed_amount: 0, rate: 14 },
        { min_amount: 1950001, max_amount: 2250000, fixed_amount: 0, rate: 15 },
        { min_amount: 2250001, max_amount: 2850000, fixed_amount: 0, rate: 16 },
        { min_amount: 2850001, max_amount: 3550000, fixed_amount: 0, rate: 17.5 },
        { min_amount: 3550001, max_amount: 4550000, fixed_amount: 0, rate: 18.5 },
        { min_amount: 4550001, max_amount: 10000000, fixed_amount: 0, rate: 20 },
    ] },
    { slab_year_id: 3, year_id: "2016-2017", slabs: [
        { min_amount: 400000, max_amount: 750000, fixed_amount: 0, rate: 5 },
        { min_amount: 750000, max_amount: 1400000, fixed_amount: 17500, rate: 10 },
        { min_amount: 1400000, max_amount: 1500000, fixed_amount: 82500, rate: 12.5 },
        { min_amount: 1500000, max_amount: 1800000, fixed_amount: 95000, rate: 15 },
        { min_amount: 1800000, max_amount: 2500000, fixed_amount: 140000, rate: 17.5 },
        { min_amount: 2500000, max_amount: 3000000, fixed_amount: 262500, rate: 20 },
        { min_amount: 3000000, max_amount: 3500000, fixed_amount: 362500, rate: 22.5 },
        { min_amount: 3500000, max_amount: 4000000, fixed_amount: 475000, rate: 25 },
        { min_amount: 4000000, max_amount: 7000000, fixed_amount: 600000, rate: 27.5 },
        { min_amount: 7000000, max_amount: 700000000, fixed_amount: 1425000, rate: 30 },
    ] },
	{ slab_year_id: 4, year_id: "2017-2018", slabs: [
        { min_amount: 0, max_amount: 400000, fixed_amount: 0, rate: 0 },
        { min_amount: 400000, max_amount: 800000, fixed_amount: 1000, rate: 0 },
        { min_amount: 800000, max_amount: 1200000, fixed_amount: 2000, rate: 0 },
        { min_amount: 1200000, max_amount: 2400000, fixed_amount: 0, rate: 5 },
        { min_amount: 2400000, max_amount: 4800000, fixed_amount: 60000, rate: 10 },
        { min_amount: 4800000, max_amount: 1000000000, fixed_amount: 300000, rate: 15 },
    ] },
	  { slab_year_id: 5, year_id: "2019-2020", slabs: [
        { min_amount: 0, max_amount: 600000, fixed_amount: 0, rate: 0 },
        { min_amount: 600001, max_amount: 1200000, fixed_amount: 0, rate: 5 },
        { min_amount: 1200001, max_amount: 1800000, fixed_amount: 30000, rate: 10 },
        { min_amount: 1800001, max_amount: 2500000, fixed_amount: 90000, rate: 15 },
        { min_amount: 2500001, max_amount: 3500000, fixed_amount: 195000, rate: 17.5 },
        { min_amount: 3500001, max_amount: 5000000, fixed_amount: 370000, rate: 20 },
        { min_amount: 5000001, max_amount: 8000000, fixed_amount: 670000, rate: 22.5 },
        { min_amount: 8000001, max_amount: 12000000, fixed_amount: 1345000, rate: 25 },
        { min_amount: 12000001, max_amount: 30000000, fixed_amount: 2345000, rate: 27.5 },
        { min_amount: 30000001, max_amount: 50000000, fixed_amount: 7295000, rate: 30 },
        { min_amount: 50000001, max_amount: 75000000, fixed_amount: 13295000, rate: 32.5 },
        { min_amount: 75000001, max_amount: 750000000, fixed_amount: 21420000, rate: 35 },
    ] },
    { slab_year_id: 6, year_id: "2022-2023", slabs: [
        { min_amount: 0, max_amount: 600000, fixed_amount: 0, rate: 0 },
        { min_amount: 600001, max_amount: 1200000, fixed_amount: 0, rate: 2.5 },
        { min_amount: 1200001, max_amount: 2400000, fixed_amount: 15000, rate: 12.5 },
        { min_amount: 2400001, max_amount: 3600000, fixed_amount: 165000, rate: 20 },
        { min_amount: 3600001, max_amount: 6000000, fixed_amount: 405000, rate: 25 },
        { min_amount: 6000001, max_amount: 12000000, fixed_amount: 1005000, rate: 32.5 },
        { min_amount: 12000001, max_amount: 2000000000, fixed_amount: 2955000, rate: 35 },
    ] },
	{ slab_year_id: 7, year_id: "2023-2024", slabs: [
        { min_amount: 0, max_amount: 600000, fixed_amount: 0, rate: 0 },
        { min_amount: 600001, max_amount: 1200000, fixed_amount: 0, rate: 2.5 },
        { min_amount: 1200001, max_amount: 2400000, fixed_amount: 15000, rate: 12.5 },
        { min_amount: 2400001, max_amount: 3600000, fixed_amount: 165000, rate: 22.5 },
        { min_amount: 3600001, max_amount: 6000000, fixed_amount: 435000, rate: 27.5 },
        { min_amount: 6000001, max_amount: 2147483647, fixed_amount: 1095000, rate: 35 },
    ] },
    { slab_year_id: 8, year_id: "2024-2025", slabs: [
        { min_amount: 0, max_amount: 600000, fixed_amount: 0, rate: 0 },
        { min_amount: 600001, max_amount: 1200000, fixed_amount: 0, rate: 5 },
        { min_amount: 1200001, max_amount: 2200000, fixed_amount: 30000, rate: 15 },
        { min_amount: 2200001, max_amount: 3200000, fixed_amount: 180000, rate: 25 },
        { min_amount: 3200001, max_amount: 4100000, fixed_amount: 430000, rate: 30 },
        { min_amount: 4100001, max_amount: 2147483647, fixed_amount: 700000, rate: 35 },
    ] },
    { slab_year_id: 9, year_id: "2025-2026", slabs: [
        { min_amount: 0, max_amount: 600000, fixed_amount: 0, rate: 0 },
        { min_amount: 600001, max_amount: 1200000, fixed_amount: 0, rate: 1 },
        { min_amount: 1200001, max_amount: 2200000, fixed_amount: 6000, rate: 11 },
        { min_amount: 2200001, max_amount: 3200000, fixed_amount: 116000, rate: 23 },
        { min_amount: 3200001, max_amount: 4100000, fixed_amount: 346000, rate: 30 },
        { min_amount: 4100001, max_amount: 2147483647, fixed_amount: 616000, rate: 35 },
    ] }
];
function getTaxSlabByYearId(s_year_id) {
    return taxSlabs.find(slab => slab.slab_year_id === s_year_id);
}
// Function to calculate total tax based on income
function calculateTotalTax() {

    slab_year_id= parseInt($("#year_id").val());
    income = parseInt($("#income").val());
    if (!isNaN(income)) {
        is_annual = parseInt($("#is_annual").val());
        if (is_annual === 0)
            income = income * 12;
        let totalTax = 0;

        const taxSlab = getTaxSlabByYearId(slab_year_id);
        if (taxSlab) {
            for (const slab of taxSlab.slabs) {
                if (income > slab.min_amount && income <= slab.max_amount) {
                    totalTax = Math.ceil(((income - slab.min_amount) * slab.rate / 100) + slab.fixed_amount);
                    if(slab.min_amount==0){
                        $("#placerholder").text(`When the annual salary income does not exceed PKR. ${slab.max_amount} then the rate of the income tax is ${slab.rate}%`);
                    }
                    else{
                        $("#placerholder").text(`When the annual salary income exceeds PKR. ${(slab.min_amount-1)} but does not exceed PKR. ${slab.max_amount} then the rate of income tax is ${slab.rate}% of the amount exceeding PKR. ${(slab.min_amount-1)}`);
                    }
                    
                    monSal = income / 12;
                    monTax = totalTax / 12;

                    $('#atotal').text(Math.ceil(monSal));
                    $('#atax').text(Math.ceil(monTax));
                    $('#anet').text(Math.ceil((monSal - monTax)));

                    $('#btotal').text(Math.ceil(income));
                    $('#btax').text(Math.ceil(totalTax));
                    $('#bnet').text(Math.ceil((income - totalTax)));


                    $('#cfixedTax').text(Math.ceil(slab.fixed_amount));
                    $('#cpercentTax').text(Math.ceil(((income - slab.min_amount) * slab.rate / 100)));
                    $('#ctotalTax').text(Math.ceil(totalTax));
                    break; // Exit loop once the slab is found
                }
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

function onchange_year() {
    const selectedYearText = $('#year_id option:selected').text();
    $('#year_text').text(selectedYearText);
}