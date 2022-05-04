const form = document.querySelector('.contact__message');
const textStatus = document.querySelector('.contact__message-status');
const submitBtn = document.querySelector('.contact__message-btn');

submitBtn.onclick = () => {
    textStatus.style.display = 'block';

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200 ){
            let response = xhr.response;

            console.log(response)
            
            if(response.indexOf("Email and message field is required!") != -1 || response.indexOf("Email and message field is required!") != -1 || response.indexOf("Enter a valid email address!") != -1 || response.indexOf("Sorry, fail to send your message!") != -1) {
                textStatus.style.color = 'red';
            }
            else {
                form.reset();

                setTimeout(() => {
                    textStatus.style.display = 'none';
                }, 3000);
            }
            
            textStatus.innerText = response;
        }

        // if(xhr.readyState == 4 && xhr.status == 200){
        //     let response = xhr.response;
        //     if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        //       textStatus.style.color = "red";
        //     }else{
        //         console.log(response);
        //       form.reset();
        //       setTimeout(()=>{
        //         textStatus.style.display = "none";
        //       }, 3000);
        //     }
        //     textStatus.innerText = response;
        //   }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
