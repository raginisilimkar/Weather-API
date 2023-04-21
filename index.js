
async function information(){
    city=document.querySelector(".city").value;
    result1=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8032f141c7fe7246746dfde7a0cc089b&units=metric");
    if(result1.status==200)
    {
        response=await result1.json();
        console.log(response);
        display_info(response);
    }
    else{
        alert("Please enter valid city name:");
    }
}
async function information1(){
    city=document.querySelector(".city1").value;
    result1=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8032f141c7fe7246746dfde7a0cc089b&units=metric");
    if(result1.status==200)
    {
        response=await result1.json();
        console.log(response);
        display_info(response);
    }
    else{
        alert("Please enter valid city name:");
    }
}


function display_info(response)
{
    document.querySelector(".box").style.display="none";
    document.querySelector(".input").style.display="block";
    document.querySelector(".cityname").innerHTML=response.name+" ("+response.sys.country+")";
    document.querySelector(".temperature").innerHTML=response.main.temp+"<sup>o</sup><span>c</span>";
    document.querySelector(".type").innerHTML=response.weather[0].description;
    document.querySelector(".maxtem").innerHTML="Max Temp : "+response.main.temp_max+"<sup>o</sup><span>c</span>";
    document.querySelector(".mintem").innerHTML="Min Temp : "+response.main.temp_min+"<sup>o</sup><span>c</span>";
    //document.querySelector(".img-temp").src="images\Partly_Cloudy-512.png"+response.weather[0].description+".png";

}                                                                                                                                                                                                                                                                                                                           