

const newsLetter = document.querySelector('#mail');
const button =  document.querySelector('#newsbtn')
    

newsLetter.addEventListener('input', function(){
    const mail = newsLetter.value;
       if(!mail.includes('@')){
           button.style.opacity = 0; 
       }else{
        button.style.opacity = 1;
       }
   
})