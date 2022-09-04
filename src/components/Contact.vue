<template>
    <br>
    <br>
    <br>
    <br>
     <div class="contact row text-center">
     <div class="contact-form col-lg-6">
      <div class="p-3">
              <form 
                action="https://formspree.io/f/xeqnrenb"
                method="POST" class="form">
    
                  
                    <div class="row">
    
                        <div class="col-md-6">
                            <div class="md-form p-2">
                                <input type="name" id="name" name="name" class="form-control" placeholder="Name*">
                                <label for="name" class=""></label>
                            </div>
                        </div>
                     
    
                     
                        <div class="col-md-6">
                            <div class="md-form p-2">
                                <input type="email" id="email" name="email" class="form-control" placeholder="Email*">
                                <label for="email" class=""></label>
                            </div>
                        </div>
                  
    
                    </div>
                
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form p-2">
                                <input type="subject" id="subject" name="subject" class="form-control" placeholder="Subject*" >
                                <label for="subject" class=""></label>
                            </div>
                        </div>
                    </div>
                 
                    <div class="row">
                        <div class="col-md-12">
    
                            <div class="md-form p-2">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message*"></textarea>
                                <label for="message"></label>
                            </div>
    
                        </div>
                    </div>
           
    
    
                <div class="contact-btn row p-3">
                    <div class="col-md-6">
                    <button type="submit" class="btn btn-outline-success col-lg-6" target="_blank">Send</button>
               </div>
                 <div class="col-md-6">
               <button type="button" class="btn btn-outline-danger col-lg-6" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
              
    
              
            </form>
    
        </div>
      </div>
    
    
      <div class="col-lg-6">
    <p><i class="fa-solid fa-location-dot"><h4>314 Imam Haron Rd, Lansdowne, Cape Town, 7780</h4></i></p> 
    <p><i class="fa-solid fa-phone"><h4>076 199 3236</h4></i></p> 
    <p><i class="fa-solid fa-envelope"><h4>raaidlatiefgbr@gmail.com</h4></i></p> 
    
    <hr>
    
    <div class="row">
      <p class="col-lg-3">
        <i class="fa-brands fa-github"></i>
      </p>
      <p class="col-lg-3">
        <i class="fa-brands fa-instagram"></i>
    </p>
    <p class="col-lg-3">
      <i class="fa-brands fa-twitter"></i>  
    </p>
    <p class="col-lg-3">
      <i class="fa-brands fa-facebook-f"></i>
    </p>
    
    <hr>
    
    <p class="copyright text-center">&copy; Raaid Abdullatief 2022</p>
    
    
    </div>
    </div>
    </div>
    </template>
    <script>
    export default {
        
    }
    </script>
    <style scoped>
    
    
    
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&family=Roboto:wght@100;300&display=swap');
    
    
    body {
      background-color: black;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
    
    hr{
      margin: 2rem 0;
    }
    
    .fa-brands{
      font-size: 55px;
    }
    
    .copyright{
      font-size: 20px;
    }
    
    h4{
      font-size: 30px;
      color: black;
    }
    
    .button{
      background-color: #4CAF50; /* Green */
      border: none;
      color: white;
      padding: 13px 18px;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
    border-radius: 30px;
    }
    
    /* hover fx */
    
    .fa-brands{
        color:#016300;
    }
    
    .fa-solid{
         color:#016300;
    }
    
    .fa-brands:hover{
      color: #9d18cc;
    }
    .fa-solid:hover{
      color: #9d18cc;
    }
    
    
    </style>