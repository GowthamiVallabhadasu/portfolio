// event listener for hamburger navigation icon

document.addEventListener('DOMContentLoaded',()=>{
    const hamburger=document.getElementById('hamburger')
    const menu=document.getElementById('menu')
    const nav=document.getElementsByClassName('nav')


    if(hamburger && menu && nav){
        hamburger.addEventListener('click',()=>{
            menu.classList.remove('menu');
            menu.classList.toggle('visible');
            hamburger.classList.toggle('hidden-hamburger');
        });

        menu.addEventListener('click',()=>{
            hamburger.classList.remove('hidden-hamburger');
            menu.classList.toggle('menu');
            menu.classList.remove('visible')
        })
    }
})




