const panels=document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click",
    () => 
    {removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses=()=>
{
    panels.forEach((pan)=>{
        pan.classList.remove("active");
    });
};