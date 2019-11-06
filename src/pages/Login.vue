<template>
<div class="content">
    <div class="container-fluid" style="background-color:#F3F7FA;">
           <div class="row">
               <div v-if="reset==false" class="col-md-12">
                   <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:6rem !important;">
                    <b-card-body>
                       <b-tabs content-class="mt-3" fill>
                          <b-tab title="Login" active>
                             <b-form-group
                                id="fieldset-1"
                                label="Email"
                                style="height:63px;"
                                label-for="input-1" >
                                <b-form-input id="input-1" v-model="login.email"  trim></b-form-input>
                                <span v-if="errors.email_error==true" style="position: relative;top: -4rem;left: 2.5rem;color: #FE0000;">[You must enter valid email address *]</span>
                              </b-form-group>
                              <b-form-group
                                id="fieldset-1"
                                label="Password"
                                label-for="input-2" >
                                <b-form-input id="input-2" v-model="login.password" maxlength="15" type="password"  trim></b-form-input>
                                <span v-if="errors.password_error==true" style="position: relative;top: -4.1rem;left: 4.5rem;color: #FE0000;">[Must be 8 characters *]</span>
                                <span class="mr-1" style="position: relative;top:-2rem;float: right;color: #0BC1BB;cursor:pointer;" @click="reset=true">Forgot?</span>
                              </b-form-group>
                              <b-form-group>
                                <div class="row">
                                  <div class="col-md-1" style="padding-right:1.33rem;">
                                    <b-form-checkbox
                                      id="checkbox-1"
                                      name="checkbox-1"
                                      value="accepted"
                                      unchecked-value="not_accepted"
                                    >
                                    </b-form-checkbox>
                                  </div>
                                  <div class="col-md-6 pl-0">
                                     <span >Keep me logged in</span> 
                                  </div>

                                </div>
                              </b-form-group>
                              <div class="row">
                                <div class="col-md-12 text-center">
                                  <button @click="validate_auth()" class="text-center p-2 text-white pl-5 pr-5" style="border:none;border-radius: 3px;background: #0BC1BB;" >LOGIN</button>
                                </div>
                              </div>
                          </b-tab>
                          <b-tab title="Register">
                            <b-form-group
                                label="User name"
                                label-for="input-3" >
                                <b-form-input id="input-3"   trim></b-form-input>
                              </b-form-group>
                             <b-form-group
                                label="Email"
                                label-for="input-4" >
                                <b-form-input id="input-4"   trim></b-form-input>
                              </b-form-group>
                             <b-form-group
                                label="Password"
                                label-for="input-5" >
                                <b-form-input id="input-5" type="password"  trim></b-form-input>
                              </b-form-group>
                             <b-form-group
                                label="Repeat Password"
                                label-for="input-6" >
                                <b-form-input id="input-6" type="password"  trim></b-form-input>
                              </b-form-group>
                              <div class="row">
                                <div class="col-md-1" style="padding-right:1.33rem;">
                                    <b-form-checkbox
                                      id="checkbox-1"
                                      name="checkbox-1"
                                      value="accepted"
                                      unchecked-value="not_accepted"
                                    >
                                    </b-form-checkbox>
                                  </div>
                                <div class="col-md-8 pl-0">
                                  <span style="color: #6C6C6C;" class="familia">I agree to the </span> <a href="#" class="familia">Terms and Conditions</a>
                                   <span style="color: #6C6C6C;" class="familia"> and</span>  <a href="#" class="familia"> Privacy Policy</a>
                                </div>
                              </div>
                              <div class="row mt-2">
                                <div class="col-md-12 text-center">
                                  <button class="text-center col-md-12 text-white p-2 " style="border:none;border-radius: 3px;background: #0BC1BB;">CREATE MY ACCOUNT</button>
                                </div>
                              </div>
                                 <!-- Terms and Conditions and Privacy Policy -->
                                  <!-- <button class="text-center pl-4 pr-4 pt-1 pb-1 text-white" style="background: #0BC1BB;">Login</button> -->
                              
                          </b-tab>
                        </b-tabs>
                    </b-card-body>

                  </b-card>
               </div>
               <div v-if="reset==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:6rem !important;">
                    
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times" @click="reset=false"></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 16px;">
                            Reset your password
                          </span>
                        </div>
                        <div class="col-md-12 text-center">
                          <hr>
                        </div>
                      </div>
                        <b-form-group
                          id="fieldset-1"
                          label="Email"
                          label-for="input-7" >
                          <b-form-input id="input-7" v-model="login.password" maxlength="15" type="email"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <div class="row">
                          <div class="col-md-12 text-center">
                            <button  class="col-md-12 text-center p-2 text-white pl-5 pr-5" style="border:none;border-radius: 3px;background: #0BC1BB;" >SEND ME RESET LINK</button>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

               </div>

           </div>
    </div>
</div>

</template>
<script>
export default {
    methods:{
      validate_auth() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(re.test(this.login.email))
        if(re.test(this.login.email)==false){
          this.errors.email_error=true;
        }        
        else{
          this.errors.email_error=false;

        }
        if(this.login.password.length<8){
          this.errors.password_error=true
        }
        else{
          this.errors.password_error=false

        }

      },
    },
     data() {
      return {
        lg_screen_flags:{
          social_flag:false,
          bussiness_flag:false,
          billing_flag:false,
          payment_flag:false,
        },
        reset:false,
        errors:{
          email_error:false,
          password_error:false
        },
        login:{
          email:'',
          password:''
        }
        
      }
    }
}
</script>
<style>
body{
  background: #F3F7FA !important;
}
</style>

