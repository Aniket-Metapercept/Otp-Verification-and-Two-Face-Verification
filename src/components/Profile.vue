<template>
  <Header />
 <h1>Hello, Welcome to Profile Page</h1>

    <div class="register" >
        <input type="text" name="" id="f" placeholder="First Name" v-model="first">
        <input type="text" name="" id="m" placeholder="Middle Name" v-model="middle">
        <input type="text" name="" id="l" placeholder="Last Name" v-model="last">
        <input type="text" name="" id="b" placeholder="Born Year" v-model="born">
        <input type="email" name="" id="e" placeholder="Email" v-model="email">
        <input type="password" name="" id="p" placeholder="Password" v-model="password">

        Want To Do Two Face Verification ?<input type="checkbox" name="" id="" v-model="chk">

        <button @click="update">Update</button>
    </div>



</template>

<script>

import axios from 'axios'
import Header from './Header.vue'
export default {
  name: 'Profile',
  props: {

  },
  components:{
    Header
  },
   mounted(){
      let user = localStorage.getItem('user')
      console.log(localStorage.getItem('name'))
      if(!user){
          this.$router.push({name:"signup"}) 
      }
      else {
          this.getUser()
      }




  },data(){
      return {
          name : localStorage.getItem('user'),
          first:"",
          middle:"",
          last:"",
          born:"",
          email:"",password:"",
          chk : false
      }
  },
  methods :{
      async getUser(){

            let data = await axios.get(`http://localhost:4000/api/user/getByName/${localStorage.getItem('name')}`)
            this.first= data.data.data[0].first
            this.middle= data.data.data[0].middle
            this.last= data.data.data[0].last
            this.born= data.data.data[0].born
            this.email= data.data.data[0].email
            this.password= data.data.data[0].password
            this.chk = data.data.data[0].twoFaceVerification
            console.log(data.data.id)
         
            localStorage.setItem("id",data.data.id)
      },

      async update(){
          await axios.put(`http://localhost:4000/api/user/${localStorage.getItem('id')}`,{first:this.first,middle:this.middle,last:this.last,born:this.born,email:this.email,password:this.password,twoFaceVerification:this.chk})
          localStorage.setItem("name",this.first)
          alert("Data updated Successfully")  
     }
  },
 
}
</script>


<style scoped>
    img{
        width: 100px;
    }
    .register input{
        width: 300px;
        height: 40px;
        padding-left:20px;
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid skyblue;
    }

    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        color: white;
        background: skyblue;
        cursor: pointer;
        margin-bottom: 5px;
    }
</style>
