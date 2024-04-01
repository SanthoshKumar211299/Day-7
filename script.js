//Get all the countries from Asia continent /region using Filter function
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var newResult=result.filter((ele)=>ele.region==="Asia");
    var final=newResult.forEach((ele)=> console.log(ele.name.common));
    };*/
//b. Get all the countries with a population of less than 2 lakhs using Filter function
/*
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var newResult=result.filter((ele)=>ele.population<200000);
    console.log(newResult);
};
*/
//c. Print the following details name, capital, flag, using forEach function
/*
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var Country=result.forEach((ele)=>console.log(ele.name.common,ele.capital,ele.flags.png)); 
};
*/
//d. Print the total population of countries using reduce function
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    const totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log("Total population of all countries:", totalPopulation);
   
};*/
//e. Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
    var data = request.response;
    var result = JSON.parse(data);
    var countriesArray = Object.values(result);
    // Filter countries with USD currency and print their names
    countriesArray.forEach(country => {
        if (country.currencies && country.currencies.USD) {
            console.log(country.name.common);
        }
    });
};

    
