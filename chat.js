const input1=document.getElementById('input_chat')
const button=document.getElementById('send_chat')
const displaychat=document.getElementById('show_container_chat')
button.addEventListener('click',()=>{
    displaychat.innerHTML=`
    <div class="display_chat">
        <div class="display_chat_paragraph">${input1.value}</p>
    </div>
    `
});