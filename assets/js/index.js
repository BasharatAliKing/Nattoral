var resmenushow=document.querySelector("#res-menu-show");
var responcviemenu=document.querySelector(".responcive-menu")
var menus=document.querySelector(".menus");
var btnshow=document.querySelector(".btn-show");
var resmenu=document.getElementById("res-menu");
var downskincare=document.querySelector(".down-skincare");
var skincare=document.querySelector("#skincare");
var haircare=document.querySelector(".haircare");
var downhaircare=document.querySelector(".down-haircare");
var remmenu=document.querySelector(".rem-menu");
var downpersonalcare=document.querySelector(".down-personalcare");
var personalcare=document.querySelector(".personalcare");
var downmomcare=document.querySelector(".down-momcare");
var momcare=document.querySelector(".mom-care");
var downbrands=document.querySelector(".down-brands");
var brands=document.querySelector(".brands");
var downingredient=document.querySelector(".down-ingredient");
var ingredient=document.querySelector(".ingredient");
downskincare.remove();
downhaircare.remove();
downpersonalcare.remove();
downmomcare.remove();
downbrands.remove();
downingredient.remove();
responcviemenu.remove()

// menus.remove();

remmenu.addEventListener("click",(e)=>{
    e.preventDefault();
    responcviemenu.remove();
})
skincare.addEventListener('click',(e)=>{
    e.preventDefault();
    if(skincare.className=="up"){
          skincare.className=" ";
    console.log("btn Clicked...")
    downskincare.remove();
    }
    else{  
        skincare.appendChild(downskincare)
        skincare.className="up"; 
    }
});
haircare.addEventListener('click',(e)=>{
    e.preventDefault();
    if(haircare.className=="up"){
          haircare.className=" ";
    console.log("btn Clicked...")
    downhaircare.remove();
    }
    else{  
        haircare.appendChild(downhaircare)
        haircare.className="up"; 
    }
});
personalcare.addEventListener('click',(e)=>{
    e.preventDefault();
    if(personalcare.className=="up"){
          personalcare.className=" ";
    console.log("btn Clicked...")
    downpersonalcare.remove();
    }
    else{  
        personalcare.appendChild(downpersonalcare)
        personalcare.className="up"; 
    }
});
momcare.addEventListener('click',(e)=>{
    e.preventDefault();
    if(momcare.className=="up"){
          momcare.className=" ";
    console.log("btn Clicked...")
    downmomcare.remove();
    }
    else{  
        momcare.appendChild(downmomcare)
        momcare.className="up"; 
    }
});
brands.addEventListener('click',(e)=>{
    e.preventDefault();
    if(brands.className=="up"){
          brands.className=" ";
    console.log("btn Clicked...")
    downbrands.remove();
    }
    else{  
        brands.appendChild(downbrands)
        brands.className="up"; 
    }
});
ingredient.addEventListener('click',(e)=>{
    e.preventDefault();
    if(ingredient.className=="up"){
          ingredient.className=" ";
    console.log("btn Clicked...")
    downingredient.remove();
    }
    else{  
        ingredient.appendChild(downingredient)
        ingredient.className="up"; 
    }
});

btnshow.addEventListener('click',()=>{
    console.log("btn is clicked...");
    resmenushow.appendChild(responcviemenu);

})