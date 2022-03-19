function tim() { // user defined function can have any name
    let CurrentDate = new Date(); // new date(); function fetches the current date and time and transfer it to our variable (our storage) Current Date 
    let currD = CurrentDate.getDate(); // current Date              Variable.getDate();
    let currT = CurrentDate.getHours(); // current Hours              Variable.getHours();
    let currS = CurrentDate.getMinutes(); // current Minutes              Variable.getMinutes();
    let x = document.getElementById('ti'); // We can manipulate our HTML elements directly through document.getelementById('Id in html tag')
    x.innerHTML = currD + " March"; // innerHTML modifies the text in an element
    document.getElementById('hr').innerHTML = currT + " PM";
    document.getElementById('min').innerHTML = currS + " minutes";
}