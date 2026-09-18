const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.querySelector('.sidebar-toggle')
const themeToggle  = document.querySelector('.theme-toggle')

sidebarToggle.addEventListener('click' , ()=>{
    sidebar.classList.toggle('collapsed');
});

themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
})