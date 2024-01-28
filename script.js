//Total there are 5 Steps

//1st step : create a XML-HTTP Object
var request=new XMLHttpRequest();
//2nd step: Open a request
request.open("GET","https://restcountries.com/v3.1/all")
//3rd step: kickstart a request
request.send();
//4th step:  
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);//print array of objects

    //print names only
    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common);
    }
    //print the capital name and area for countries
    for(var i=0;i<res.length;i++){
        if(res[i].capital){
            console.log(res[i].capital[0]+" "+res[i].area);
        }
        else{
            console.log("Invalid Capital"+" "+res[i].area); 
        }
    }

    //Question 2
    //display all country flags
    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common+" "+res[i].flags.png);
    }

    // Question 3
    //display country name,regions,sub-regions,populations
    for(var i=0;i<res.length;i++){
        console.log("Name: "+res[i].name.common+" Region: "+res[i].region+" Sub-Region: "+res[i].subregion+" Population:  "+res[i].population);
    }
} 