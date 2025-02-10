let start=document.getElementById('stars')
let moon=document.getElementById('moon')
let mount1=document.getElementById('mount1')
let mount2=document.getElementById('mount2')
let river=document.getElementById('river')
let boat=document.getElementById('boat')
let dark=document.getElementById('dark')
let mien=document.getElementById('mien')
let mein=document.querySelector('.mein')

console.log(mein)

window.onscroll = function(){
    let value= scrollY;
    start.style.left=value +'px';
    moon.style.top=value *3 +'px';
    mount1.style.top=value *2 +'px';
    mount2.style.top=value *1.5 +'px';
    river.style.top=value +'px';
    boat.style.top=value +'px';
    boat.style.left=value *3 +'px';
    dark.style.fontSize=value  +'px';
    if(scrollY >= 67){

        dark.style.fontSize=  67 +   'px';
        dark.style.position='fixed';
        if(scrollY >=480){

        dark.style.display='none';
       

        }else{
            dark.style.display='block';
        };
       if(scrollY >= 180){
       
        mien.style.background='linear-gradient(   #376281 , #10001f   )';
       }else{
        mien.style.background='linear-gradient(   #200016 , #10001f  )';
       }
    }
}


