/*var allnews = [];

var TeslaNews = new XMLHttpRequest();

TeslaNews.open("GET", 'https://newsapi.org/v2/everything?q=tesla&from=2023-06-10&sortBy=publishedAt&apiKey=cb7f62c877ee43caa1a5900dbd718aac')

TeslaNews.send();

TeslaNews.addEventListener("readystatechange",function(){

    if(TeslaNews.readyState == 4){
        allnews = JSON.parse(TeslaNews.response);
        display();
        
    }
})

function display(){
    var cartona = "";
    var cartoona ="";

    for(var i=0 ; i<5 ; i++)
    {
        cartoona += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i+1}" aria-label="Slide ${i+2}"></button>`

        cartona += `<div class="carousel-item">
        <img src="${allnews[i].urlToImage}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>${allnews[i].author}</h5>
          <p>${allnews[i].title}</p>
        </div>
      </div>`
    }

    document.querySelector('.carousel-inner').innerHTML = cartona;
    document.querySelector('.carousel-indicators').innerHTML = cartoona;

}; */

fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-06-13&sortBy=publishedAt&apiKey=cb7f62c877ee43caa1a5900dbd718aac')
  .then(response => {
    // Check if the response was successful
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    // Parse the response as JSON
    const data=JSON.parse(response);
  })
  .then(data=>{
    // Work with the fetched data
    let data1="";
    data.map((values)=>{
        data1=`<div class="carousel-item">
        <img src="${values.urlToImage}" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>${values.author}</h5>
          <p>${values.title}</p>
        </div>
      </div>`;
    });
    document.querySelector('.carousel-inner').innerHTML=data1;
  })
  .catch((error)=>{
    // Handle any errors that occurred during the fetch
    console.error('Error:', error);
  });

