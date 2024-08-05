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


// toggle between light and dark themes

document.addEventListener('DOMContentLoaded',()=>{
    const lightTheme=document.getElementById('light-theme')
    const darkTheme=document.getElementById('dark-theme')
    if(lightTheme && darkTheme){
        lightTheme.addEventListener('click',()=>{
            darkTheme.classList.remove('dark-theme');
            darkTheme.classList.toggle('visible');
            lightTheme.classList.toggle('hidden-lighttheme')

        });

        darkTheme.addEventListener('click',()=>{
            lightTheme.classList.remove('hidden-lighttheme');
            darkTheme.classList.toggle('dark-theme')
            darkTheme.classList.remove('visible');

        });
    }

})


