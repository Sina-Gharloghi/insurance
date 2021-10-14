var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var perv = document.querySelector('.perv');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno()
{
    for (i =0 ; i < slide.length ; i++)
    {
        slide[i].style.display = 'none';
    }
}

function not_active()
{
    for(i=0 ; i<dot.length; i++)
    {
        dot[i].classList.remove('active');
    }
}

next.addEventListener('click',function(e){
    e.preventDefault();
    n++;
    if (n>slide.length -1){ //length starts from 1
        n=0; //array starts from 0
    }
    disno();
    not_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
})

perv.addEventListener('click',function(e){
    e.preventDefault();
    n--;
    if (n<0){ //length starts from 1
        n=slide.length - 1; //array starts from 0
    }
    disno();
    not_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
})

setInterval (function(){
        n++;
        if (n>slide.length -1){ //length starts from 1
            n=0; //array starts from 0
        }
        disno();
        not_active();
        slide[n].style.display = 'block';
        dot[n].classList.add('active');
},4000)