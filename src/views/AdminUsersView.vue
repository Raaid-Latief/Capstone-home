<template>
    <br>
    <br>
    <br>
    <div class="container-fluid">
        <h1>Users ADMIN<span class="text-white ms-2"></span></h1>
        <div class="admin my-5">
            <router-link href="" to="/adminProgram">
                <button type="button" class="btn btn-lg">PROGRAM ADMIN</button>
            </router-link>
        </div>
        <table>
			<thead>
				<tr>
					<th scope="col">FULL NAME</th>
					<th scope="col">EMAIL</th>
                    <th scope="col">DATE JOINED</th>
                    <th scope="col">ROLE</th>
                    <th scope="col">DELETE</th>
                    <th scope="col">EDIT</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(user, index) of users" :key="index">
					<td>{{ user.fullname }}</td>
					<td>{{ user.email }}</td>
					<td>{{ user.joinDate }}</td>
                    <td>{{ user.role }}</td>
					<td><button class="btn" @click="deleteUser(user.user_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">DELETE</span></button><UpdateModal :program="program" /></td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="`#modal${index}`">
                            <i class="fa-solid fa-pen"></i><span class="ms-2">EDIT</span>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="`modal${index}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-for="(user, index) of users" :key="index">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-dark" id="exampleModalLabel">EDIT USER</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form @submit.prevent="updateUser(user.user_id)">
                                            <div class="fullname form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingFullName" placeholder="FULL NAME" v-model="user.fullname"/>
                                                <label for="floatingFullName">FULL NAME</label>
                                            </div>
                                            <div class="email form-floating">
                                                <input type="text" class="form-control mb-2" id="floatingEmail" placeholder="EMAIL" v-model="user.email"/>
                                                <label for="floatingEmail">EMAIL</label
                                                >
                                            </div>
                                            <div class="address form-floating">
                                                <input
                                                    type="text" class="form-control mb-2" id="floatingAddress" placeholder="ADDRESS" v-model="user.joinDate"/>
                                                <label for="floatingAddress">DATE JOINED</label>
                                            </div>
                                            <button type="submit" class="button">Save</button>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="button btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="button btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
				</tr>
			</tbody>
	    </table>
    </div>
</template>

<script>
        import { mapActions } from 'vuex';
export default {
    computed: {
            users() {
                return this.$store.state.users
            },
            user() {
            return this.$store.state.user;
        },         
         token() {
            return this.$store.state.token;
        },
        },
    mounted() {
        this.$store.dispatch("getUsers");
    },
        methods: {
         deleteUser(id) {
            return this.$store.dispatch("deleteUser",  {
            id:id,
            token:this.token
            });
        },
         updateUser(id) {
            return this.$store.dispatch("updateUser", id);
        },
    },
};
</script>

<style scoped>
.container-fluid {
    margin: 20px;
    padding: 10px;
    color: black;
}

.container-fluid h1 {
  color: black;
  text-shadow: 2px 3px 4px #016300; 
}

table {
    width: 1450px;
    padding: 15px;
}

.admin {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
th {
      border: solid 1px black;
      color: black;
}
td {
    border: solid 1px black;
    width: 20px;
}
img {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

button.btn {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 180px;
    padding: 5px;
    text-align: center;
}

button.btn:hover {
    background-color: #fff;
    color: black; 
}

button.button {
    font-size: 16px;
    background-color: black;
    color: #fff;
    min-height: 40px;
    width: 150px;
    padding: 5px;
    text-align: center;
}

button.button:hover {
    background-color: #04bcff;
    color: black; 
}

label {
    color: #04bcff;
    margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
  img {
    width: 100px;
  }
  .admin {
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 300px) {
    .admin {
        display: flex;
        flex-direction: column;
    }

    .table {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: fit-content;
    }
}
</style>