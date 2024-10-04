/*let slider*/
let group = document.querySelector(".group");
let pdf = document.querySelector(".pdf");
let chat = document.querySelector(".chat");
let user_list = document.querySelector(".user_list");
let zoom = document.querySelector(".zoom");
/*let main*/
let group_main= document.querySelector(".group_main")
/*slider*/

let slider = document.querySelector(".slider");

group.addEventListener("click", () => {
slider.classList.add("moveslider_group");
slider.classList.remove("moveslider_pdf");
slider.classList.remove("moveslider_chat");
slider.classList.remove("moveslider_user_list");
slider.classList.remove("moveslider_zoom");
});

pdf.addEventListener("click", () => {
slider.classList.remove("moveslider_group");
slider.classList.add("moveslider_pdf");
slider.classList.remove("moveslider_chat");
slider.classList.remove("moveslider_user_list");
slider.classList.remove("moveslider_zoom");
});
chat.addEventListener("click", () => {
slider.classList.remove("moveslider_group");
slider.classList.remove("moveslider_pdf");
slider.classList.add("moveslider_chat");
slider.classList.remove("moveslider_user_list");
slider.classList.remove("moveslider_zoom");
});
user_list.addEventListener("click", () => {
slider.classList.remove("moveslider_group");
slider.classList.remove("moveslider_pdf");
slider.classList.remove("moveslider_chat");
slider.classList.add("moveslider_user_list");
slider.classList.remove("moveslider_zoom");
});
zoom.addEventListener("click", () => {
slider.classList.remove("moveslider_group");
slider.classList.remove("moveslider_pdf");
slider.classList.remove("moveslider_chat");
slider.classList.remove("moveslider_user_list");
slider.classList.add("moveslider_zoom");
});