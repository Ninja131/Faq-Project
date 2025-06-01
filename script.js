const faqs_container = document.querySelectorAll(".faq_list_Cointaner");

faqs_container.forEach(faq => {
    const toggle_icon = faq.querySelector("#toggle_icon");
    const faq_answer = faq.querySelector(".faq_answer");

    faq.addEventListener("click",()=>{
        if(toggle_icon.classList.contains("active_icon")){
           toggle_icon.classList.remove("active_icon");
           faq_answer.style.maxHeight = null;
        }
        else{
           toggle_icon.classList.add("active_icon");
           faq_answer.style.maxHeight = faq_answer.scrollHeight+"px";
        }

    })

   


});

