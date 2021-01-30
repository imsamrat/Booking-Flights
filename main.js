function handleTicketChange(ticket ,isIncrease){
         
    const ticketCount = inputTicketNumber(ticket);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1; 
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketNewCount;
    let priceTotal = 0;
    if(ticket == 'firstClass'){
        priceTotal = ticketNewCount * 150;
    }
    if(ticket == 'economy'){
        priceTotal = ticketNewCount * 100;
    }
    calculateTotalPrice();
 }

 function calculateTotalPrice(){
    const firstClassCount = inputTicketNumber('firstClass');
    
    const economyCount = inputTicketNumber('economy');

    const totalPrice = firstClassCount * 150 + economyCount * 100;

    document.getElementById('total-price').innerText = '$' + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
 }

 function inputTicketNumber(ticket){
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
 }
const bookNowBtn = document.getElementById('book-now');
bookNowBtn.addEventListener('click', function(){
    document.getElementById('bookingInfo').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('firstClassTicket').innerText = inputTicketNumber('firstClass');
    document.getElementById('economyTicket').innerText = inputTicketNumber('economy'); 
})

const backBtn = document.getElementById('back');
     backBtn.addEventListener('click', function(){
         document.getElementById('welcomeMessage').style.display = 'none';
         document.getElementById('bookingInfo').style.display = 'block';
     })