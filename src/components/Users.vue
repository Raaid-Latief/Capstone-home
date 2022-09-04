<template>
    <br>
    <br>
    <br>
    <div class="row">
    <div class="col-lg-4">
    <div class="card" v-for="(users, index) in users"
     :key="index">
    
      <!-- <div class="imgBox">
             <img :src="programs.imgURL" class="card-img-top img-fluid" :alt="programs.title">
      </div>
     -->
      <div class="contentBox">
              <h3 class="card-title">{{users.fullname}}</h3>
      <ul class="navbar-nav">
                        <li class="price">
                         {{users.role}}
                        </li>
                    </ul>
        <a href="#" class="buy">View Profile</a>
      </div>
    
    </div>
    </div>
            </div>
            
              
    
        <!-- <div class="container" v-if="programs">
            <h2 class="display-2">Programs</h2>
            <div class="row d-flex flex-wrap ourProducts">
                <div class="card" v-for="(programs, index) in programs"
                 :key="index">
                <img :src="programs.imgURL" class="card-img-top img-fluid" :alt="programs.title">
                <div class="card-body">
                    <h5 class="card-title">{{programs.title}}</h5>
                    <ul class="navbar-nav">
                        <li>
                            Price: R<span>{{programs.price}}</span>
                        </li>
                    </ul>
                </div>
                </div>            
            </div>
        </div> -->
    </template>
    
    <script>
    import { mapActions } from 'vuex';
    export default {
        computed: {
            users() {
                return this.$store.state.users
            }
        },
        mounted() {
            this.$store.dispatch('getUsers');
        },
        methods: {
            getPrograms() {
                this.store.dispatch("getUser");
            },
            ...mapActions(["getUser"]),
        }
    }
    </script>
    
    <style scoped>
    
    @import url("https://fonts.googleapis.com/css2?family=Istok+Web:wght@400;700&display=swap");
    
    * {
      margin: 0;
      padding: 0;
      font-family: "Istok Web", sans-serif;
    }
    
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: green;
    }
    
    .card {
      position: relative;
      width: 320px;
      height: 480px;
      background: #191919;
      border-radius: 20px;
      overflow: hidden;
    }
    
    .card::before {
      content: "";
      position: absolute;
      top: -50%;
      width: 100%;
      height: 100%;
      background: #ffce00;
      transform: skewY(345deg);
      transition: 0.5s;
    }
    
    .card:hover::before {
      top: -70%;
      transform: skewY(390deg);
    }
    
    .card::after {
      position: absolute;
      bottom: 0;
      left: 0;
      font-weight: 600;
      font-size: 6em;
      color: rgba(0, 0, 0, 0.1);
    }
    
    .card .imgBox {
      position: relative;
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5px;
      z-index: 1;
    }
    /*
    .card .imgBox img {
        max-width: 100%;
        
        transition: .5s;
    }
    
    .card:hover .imgBox img {
        max-width: 50%;
          
    }
    */
    .card .contentBox {
      position: relative;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 2;
    }
    
    .card .contentBox h3 {
      font-size: 18px;
      color: white;
      font-weight: 500;
     
      letter-spacing: 1px;
    }
    
    .card .contentBox .price {
      font-size: 24px;
      color: white;
      font-weight: 700;
      letter-spacing: 1px;
    }
    
    .card .contentBox .buy {
      position: relative;
      top: 100px;
      opacity: 0;
      padding: 10px 30px;
      margin-top: 15px;
      color: #000000;
      text-decoration: none;
      background: #ffce00;
      border-radius: 30px;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: 0.5s;
    }
    
    .card:hover .contentBox .buy {
      top: 0;
      opacity: 1;
    }
    
    .mouse {
      height: 300px;
      width: auto;
    }
    
    
    </style>