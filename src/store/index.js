import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

const fitnessUrl = "https://capstone-raaid.herokuapp.com";

console.log(fitnessUrl);

export default createStore({
  state: {
    users: null,
    user: null,
    programs: null,
    program: null,
   plans: null,
   token: null,
   asc: true,
   cart: []
 },
 //  getters: {
 //   getUsers: state => state.users,
 //   getPrograms: state => state.programs
 //  },
  mutations: {
   
       setUsers(state, users) {
         state.users = users;
       },
       setUser(state, user) {
         state.user = user;
       },
       setPrograms(state, programs) {
         state.programs = programs;
       },
       setProgram(state, program) {
           state.program = program;
         },
       setToken(state, token) {
           state.token = token;
         },

// sort by price mutation

         sortProgramsByPrice: (state) => {
           state.programs = state.programs.sort((a, b) => {
             if (a.price < b.price) {
               return -1;
             }
             if (a.price > b.price) {
               return 1;
             }
             return 0;
           });
           if (!state.asc) {
             state.programs.reverse();
           }
           state.asc = !state.asc;
         },

         sortProgramsByName: (state) => {
          state.programs = state.programs.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          if (!state.asc) {
            state.programs.reverse();
          }
          state.asc = !state.asc;
        },
  },

  

  actions: {    

    Login: async (context, payload) => {
      fetch(`${fitnessUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Saveing token to the store
            context.commit("setToken", data.token);
   
            // Once token
            // Verify Route
            fetch(`${fitnessUrl}/users/users/verify`, {
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": data.token,
              },
            })
              .then((res) => res.json())
              .then((data) => {
                context.commit("setUser", data.user);
                alert(data.user.email);
                router.push({
                  name: "programs",
                });
              });
          }
          //   });
          // router.push({
          //   name: "products",
   });
   },

  // REGISTER USER
  Register: async (context, payload) => {
    fetch(`${fitnessUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: payload.fullname,
        email: payload.email,
        password: payload.password,
        joinDate: payload.joinDate,
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      alert("Registration was successful");
  },



   getUsers: async (context)=> {

     fetch(`${fitnessUrl}/users`)
     .then((res) => res.json())
     .then((data) => {
         if (data.length === 0) {
         console.log(data);
         } else {
             console.log(data);
             context.commit("setUsers", data);
         } 
     });
     },  


        // GET USER USING ID
    getUser: async (context, id) => {
      fetch(`${fitnessUrl}/users/${id}`)
        .then((res) => res.json())
        .then((user) => {
          console.log(user), context.commit("setUser", user);
        });
    },


  getPrograms: async (context)=> {

   fetch(`${fitnessUrl}/programs`)
   .then((res) => res.json())
   .then((data) => {
       if (data.length === 0) {
       console.log(data);
       } else {
           console.log(data);
           context.commit("setPrograms", data);
       } 
   });
   }    
},

 // GET A SINGLE PROGRAM BY ID
 getProgram: async (context, id) => {
  fetch(`${fitnessUrl}/programs/${id}`)
    .then((res) => res.json())
    .then((product) => {
      console.log(product), context.commit("setProgram", program);
    });
},


  // DELETE PROGRAM USING ID
  deleteProgram: async (context, id) => {
    fetch(`${fitnessUrl}/programs/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => context.dispatch("getPrograms"));
  },

  
  // UPDATE PROGRAM USING ID
  updateProgram: async (context, program) => {
    const {
      title,
      category,
      price,
      description,
      gender: gender
    } = program;
    fetch(`${fitnessUrl}/programs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        category: category,
        price: price,
        description: description,
        gender: gender
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => context.commit("setProgram", json));
  },

  addingProgram: async (context, program) => {
    const {
      title,
      imgURL,
      category,
      price,
      description,
      gender,
    } = program;
    fetch(`${fitnessUrl}/programs`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        imgURL: imgURL,
        category: category,
        price: price,
        description: description,
        gender: gender
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => context.commit("setProgram", json));
  },

  // DELETE USER USING ID
  deleteUser: async (context, id) => {
    fetch(`${fitnessUrl}/users/` + id, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => context.dispatch("getUser"));
  },

  // UPDATE USER BY ID
  updateUser: async (context, user) => {
    const {
      fullname,
      email,
      joinDate
      
    } = user;
    fetch(`${fitnessUrl}/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        joinDate: joinDate,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((json) => context.commit("setUser", json));
  },




 modules: {
  }
})