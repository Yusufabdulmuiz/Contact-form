(function () {
  'use strict' 
  
  
  const form = document.getElementById('form');
  
  
  let validator = true;
  
  const firstName = document.getElementById('f-Name');
  const firstNameErr = document.querySelector('.fNameErrMssg');
  
  
    const lastName = document.getElementById('l-Name');
      
      const lastNameErr = document.querySelector('.lNameErrMssg');

//email
      const email = document.getElementById('email');
      
      const mailErr = document.querySelector('.mailErrorMssg');


//query
const query = document.querySelector('input[name = "query"]');
      
      const queryErr = document.querySelector('.queryErrorMssg');
      
      //message

  const textMssg = document.getElementById('message');
  const textErr = document.querySelector('.textErrorMssg');
  
  
  //consent 
const consent = document.querySelector('input[name = "consentTerm"]');
      
      const consentErr = document.querySelector('.consentErrorMssg');

  function namesInput(name,nameErr) {
    // Tab to edit 
    if (!name.value) {
      
      nameErr.innerHTML = "This field is required"
      name.style.borderColor = 'red'
    validator = false;
      
    }
        else {
      nameErr.innerHTML = ""
      name.style.borderColor = 'hsl(169, 82%, 27%)'
    
    }
   
  }
  
  
  
  //validation
  function validation() {
    // Tab  edit
    
    let validator = true;
  
    namesInput(firstName,firstNameErr);
    namesInput(lastName,lastNameErr);
       
   //email
   
   if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      
      mailErr.innerHTML = "Please enter a valid email address "
      email.style.borderColor = 'red'
     validator = false;
      
    }
    
    else {
      mailErr.innerHTML = ""
      email.style.borderColor = 'hsl(169, 82%, 27%)'
  
      
      
    }
    
    
    
    if (!query.checked) {
      
      queryErr.innerHTML = "Please select a query type"
      
      validator = false;
      
    }
    
    else {
      
     
      queryErr.innerHTML = ""
     
      
    }
    //consent check box
    
    if (!consent.checked) {
      
      consentErr.innerHTML = "To submit this form, please consent to being contacted"
      
      validator = false;
      
    }
    
    else {
      
     
      consentErr.innerHTML = ""
     
      
    }
    //text message
        if (textMssg.value.trim() === "") {
      
      textErr.innerHTML = "This field is required"
      textMssg.style.borderColor = 'red'
     validator = false;
      
    }
    
    else {
      
     
      textErr.innerHTML = ""
      textMssg.style.borderColor = 'hsl(169, 82%, 27%)'
      
    }
   
   
 return validator;
  }
  
  
  
  //Notification 

  function notification() {
  const notification = document.querySelector('.notification');

  
    const success = document.createElement('div');
    success.className = "success-alert";
    success.innerHTML = `
            
            <div class="noti-text">
               <img src="/contact-form-main/assets/images/icon-success-check.svg" alt=""> 
               
               <p>
                 Message sent!
               </p>
             </div>
             <p class="info"> Thanks for completing the form. We'll be in touch with you soon!</p>
             `;

    notification.appendChild(success);

    setTimeout(()=>{success.remove()}, 3000)
  
  }
  
 function submition(e) {
   // Tab to edit
   e.preventDefault()
   if (validation()) {
     
     notification()
     form.reset()
     
   }
   
   
 }
  
  
  
  form.addEventListener('submit', submition)
  
  //IIFE ending 
})();