const menu_btn = document.querySelector('.menu')

const nav_bar = document.querySelector('nav')

menu_btn.addEventListener('click', handle_nav)

function handle_nav(){
    menu_btn.classList.toggle('change_menu_icon')
    nav_bar.classList.toggle("show_nav")
}
