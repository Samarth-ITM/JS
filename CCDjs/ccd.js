function calculate()
{
    let drinks = document.getElementsByName("drink");
    let selectedDrink="";
    let price=0;

    for(let i=0; i<drinks.length; i++)
    {
        if(drinks[i].checked)
        {
            price=drinks[i].value;
            selectedDrink=drinks[i].parentElement.innerText;
        }
    }

    if(price===0)
    {
        document.getElementById("result").innerHTML="❌ Please select a beverage.";
    }
    else
    {
       document.getElementById("result").innerHTML= "✅ You selected: " + selectedDrink + "<br>Total Amount: ₹" + price; 
    }
}