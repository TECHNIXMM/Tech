
document.addEventListener("DOMContentLoaded", () =>{
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark'){
        body.classList.add('dark-mode');
        toggleBtn.textContent = "Light Mode";
    }

    toggleBtn.addEventListener('click', () =>{
       body.classList.toggle('dark-mode');

       if (body.classList.contains('dark-mode')){
        toggleBtn.textContent= "Light Mode";
        localStorage.setItem('theme','dark');
       } else{
        toggleBtn.textContent ="Dark Mode";
        localStorage.setItem('theme', 'light');
       }
    })
})


let abc = alert("welcome To Technix Showcase ")
document.getElementById("demo").innerHTML= Date()


if(window.scrollY > 200){
    scrollupBtn.style.display = "block";
}
