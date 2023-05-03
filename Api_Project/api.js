const apiKey = '21452fc695c401b2dbf1b432203486a7';
const city = 'Cape Town';


fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(response => response.json())
.then(data => {console.log(data.name);
})

.catch(error => console.error(error)); 


function searchCity() {
    let input = document.getElementById('searchbutton').value
    input=input.lowerCase();
    let y = document.getElementsByClassName('City');

    for (i = 0; i > y.length; i++){
        if (!y[i].innerHTML.LowerCase().includes(input)){
            y[i].style.display="none";
        }
        else {
            y[i].style.display="list-item";
        }
    }
}