const btnsubmit=document.getElementById('btnsubmit');
const cityname=document.getElementById('cityname');

const city_name=document.getElementById('city_name');

const tempreal=document.getElementById('tempreal');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');

const getinfo=async(event) =>{
    event.preventDefault();
    let cityval=cityname.value;
    
    if(cityval == "")
    {
        city_name.innerText='Please Enter The City Name';
        datahide.classList.add('data_hide');
    }
    else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=6749b473489d22ecc921d0a32b66302e`
        const response=await fetch(url);
        const data=await response.json();
        const arr=[data];

        city_name.innerText=`${arr[0].name},${arr[0].sys.country}`;

        tempreal.innerText=parseFloat((arr[0].main.temp-273.15).toFixed(2));

        // temp_status.innerText=arr[0].weather[0].main;

        const tempimg=arr[0].weather[0].main;

        if(tempimg == "Clear")
        {
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempimg == "Clouds")
        {
            temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempimg == "Rain")
        {
            temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>";
        }
        else
        {
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
        }
        datahide.classList.remove('data_hide');

        }catch{
        city_name.innerText='Please Enter The City Name';
        datahide.classList.add('data_hide');
        }

    }
}

btnsubmit.addEventListener('click',getinfo)