
// shared function for calculation of both type tickets
function productHandle(isIncrease, element) {
    // for calculation of first class tickets
    if (element.className.includes('first')) {
        let ticketCount = document.getElementById("ticket-count");
        if (isIncrease == true) {
            ticketCount.value++;
        }
        else if (isIncrease == false && ticketCount.value > 0) {
            ticketCount.value--;
        }
        document.getElementById('first-class-total-price').innerText = ticketCount.value * 150;
    }
    // for calculation of economy class tickets
    else {
        let ticketCount = document.getElementById("ticket-count-eco");
        if (isIncrease == true) {
            ticketCount.value++;
        }
        else if (isIncrease == false && ticketCount.value > 0) {
            ticketCount.value--;
        }
        document.getElementById('eco-class-total-price').innerText = ticketCount.value * 100;
    }
    // transfering totall cost to the label for first class
    firstClassTotalCost = parseInt(document.getElementById("first-class-total-price").innerText);
    // transfering totall cost to the label for economy class
    ecoClassTotalCost = parseInt(document.getElementById("eco-class-total-price").innerText);
    subTotalCost = document.getElementById('sub-total-cost');
    //pushing Sub Total cost to the element
    subTotalCost.innerText = firstClassTotalCost + ecoClassTotalCost;
    //pushing VAT cost to the element
    taxCost = parseInt(subTotalCost.innerText) * (10 / 100);
    document.getElementById("tax-charge").innerText = taxCost;
    //pushing In Total cost to the element
    document.getElementById("inTotalCost").innerText = parseInt(subTotalCost.innerText) + taxCost;

}
// After clicking Book Now this function will be triggered
function bookNow() {
    document.getElementById("inner-form").style.display = "none";
    document.getElementById("white-box").style.display = "block";
//pushing number of tickets & final cost to the elements
    document.getElementById("firstClassTotalTickets").innerText = document.getElementById("ticket-count").value;
    document.getElementById("ecoClassTotalTickets").innerText = document.getElementById("ticket-count-eco").value;
    document.getElementById("finalCost").innerText = document.getElementById("inTotalCost").innerText;
}