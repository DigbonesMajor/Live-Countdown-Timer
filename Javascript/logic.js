let second= document.getElementById('second');
let minute= document.getElementById('minute');
let hour= document.getElementById('hour');
let day= document.getElementById('day');

let minuteBox= document.getElementById('minuteBox');
let hourBox= document.getElementById('hourBox');
let dayBox= document.getElementById('dayBox');




function done(ans)
{
    ans.classList.add('animate');
    setTimeout(function()
    {
        ans.classList.toggle("animate");
    },1000);

}

let action=function()
{
    let x= parseInt(second.textContent);
    let y= parseInt(minute.textContent);
    let z= parseInt(hour.textContent);
    let a= parseInt(day.textContent);
    if(x>1)
    {
        x--;
        second.textContent=x;
    } 
    else if(x==1)
    {
        x--;
        second.textContent="00";
        done(minuteBox);
        if(y==0) done(hourBox);
        if(y==0 && z==0) done(dayBox);

    }
    else{
        second.textContent="00";
        if(y!=0)
        {
            y--;
            minute.textContent=y;
            second.textContent=59;
        }
        else{
            minute.textContent="00";
            if(z!=0)
            {
                z--;
                //done(minuteBox);
                hour.textContent=z;
                minute.textContent=59;
                second.textContent=59;
            }
            else
            {
                
                hour.textContent="00";
                if(a!=0)
                {
                    console.log(a);
                    
                    a--;
                    day.textContent=a;
                    minute.textContent=59;
                    second.textContent=59;
                    hour.textContent=23;
                    
                }
                else
                {
                    clearInterval(id);                  
                    second.classList.remove("animate");
                    alert('We have launched');
                }
            }
        }
    }
    
}
let id=setInterval(action,1000);

let facebook=document.getElementById('facebook');

facebook.onmouseover = function(){
    facebook.setAttribute("src","images/facebook-red.svg");
}
facebook.onmouseout= function(){
    facebook.setAttribute("src","images/icon-facebook.svg");
}

let pinterest=document.getElementById('pinterest');
 
pinterest.onmouseover = function(){
    pinterest.setAttribute("src","images/pinterest-red.svg");
}
pinterest.onmouseout= function(){
    pinterest.setAttribute("src","images/icon-pinterest.svg");
}
 

let instagram=document.getElementById('instagram');
 
instagram.onmouseover = function(){
    instagram.setAttribute("src","images/instagram-red.svg");
}
instagram.onmouseout= function(){
    instagram.setAttribute("src","images/icon-instagram.svg");
}
 

