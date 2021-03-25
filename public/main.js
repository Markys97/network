let headerBloc2= document.querySelector('.header-bloc2');
let btnBurger= document.querySelector('.nav-control-burger');
let linkNotification= document.querySelector('.nav__link--notification');
let btn_close_news=document.querySelector('.visit-news-bloc1__close');
let visit_news= document.querySelector('.visit-news')


 
function toggleMenuMobile(){
    headerBloc2.classList.toggle('menuMobile');
  
}


btnBurger.addEventListener('click',(e)=>{
    toggleMenuMobile()
   
})

function reset_subnav()
{
   
        headerBloc2.classList.remove('menuMobile');
     
    
}

window.addEventListener('resize',reset_subnav)

function close_news()
{
    visit_news.style.display="none";
    console.log('nanananan')
}

btn_close_news.addEventListener('click',close_news);

