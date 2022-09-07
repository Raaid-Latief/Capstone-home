<template>
  <section class="footer">
   <div>
  
        <div class="content">
          <div class="social-media">
            <h4>Social</h4>
        
            <p>
              <a href="https://twitter.com/?lang=en"
                ><i class="fa-brands fa-twitter"></i> Twitter</a
              >
            </p>
            <p>
              <a href="https://codepen.io/your-work/"
                ><i class="fab fa-instagram"></i> Instagram</a
              >
            </p>
            <p>
              <a href="https://www.facebook.com/"
                ><i class="fa-brands fa-facebook"></i> Facebook</a
              >
            </p>
          </div>
          <div class="links">
            <h4>Quick links</h4>
            <router-link to="/home"><p><a href="#">Home</a></p></router-link>
       <router-link to="/programs"><p><a href="#">Programs</a></p></router-link>
            <router-link to="/contact"><p><a href="#">Contact</a></p></router-link>
            <router-link to="/Cart"><p><a href="#">Cart</a></p></router-link>
          </div>
          <div class="details">
            <h4 class="address">Address</h4>
            <p><a href="https://www.google.com/maps/place/Life+Choices/@-33.9856643,18.4926986,15z/data=!4m5!3m4!1s0x0:0x9c746d268c8e0ad9!8m2!3d-33.9856643!4d18.4926986">
              314 Imam Haron Rd, Lansdowne, Cape Town, 7780
              </a>
            </p>
            <h4 class="mobile">Mobile</h4>
            <p><a href="#">076 199 3236</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">raaidlatiefgbr@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          &copy; Raaid Abdullatief 2022
        </footer>
      </div>
    </section>
  </template>
  <script>
  export default {
      
  }
  </script>
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .footer{
    background-color: #47CC18;
    background-repeat: no-repeat;
    background-attachment: fixed;
  margin: 0%;
   width: 100%;
    bottom: 0;
    left: 0;
  }
   
  
  h4 {
  color: #016300;
  padding-top: 30px;
  }
  
  
  
  .footer .content {
    display: flex;
    justify-content: space-evenly;
    margin: 1.5rem;
  }
  
  .footer .content p {
    margin-bottom: 1.3rem;
    color: white;
  }
  
  .footer .content a {
    text-decoration: none;
    color: white;
  }
  
  .footer .content a:hover {
    border-bottom: 1px solid green;
  }
  .footer .content router-link:hover {
      border-bottom: 1px solid green;
    
  }
  .footer .content h4 {
    margin-bottom: 1.3rem;
    font-size: 19px;
  }
  
  footer {
    text-align: center;
    margin-bottom: 2rem;
    color: #016300;
    padding-bottom: 30px;
  }
  
  footer hr {
    margin: 2rem 0;
    color: green;
  }
  
  @media (max-width: 767px) {
    .footer .content {
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  
    .footer {
      position: unset;
    }
  }
  
  @media (min-width: 768px) and (max-width: 1024px) {
    .footer .content,
    .footer {
      font-size: 14px;
    }
  }
  
  @media (orientation: landscape) and (max-height: 500px) {
    .footer {
      position: unset;
    }
  }
  
  </style>