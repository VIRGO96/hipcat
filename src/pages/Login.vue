<template>
<div id="op">
   <div class="container-fluid bg-white p-2">
      <div class="row">
            <div class="col-md-12 text-center">
              <img style="width:28vh"
              src="https://s3-alpha-sig.figma.com/img/c959/4ba5/1d04d737769a35b10de28042c3912456?Expires=1574035200&Signature=HiIh3v8OdZ4T7ZopIiPGNkGEs9uuOpQtwEOfsrm8Qt~DH8GGx6PfdYuHVv42BbOj2lZl2Jrv4cxrE3uGl3sG~9xhaLU8wckfxS72azfu2QkZUVh6URXZi7mRLNIbGa9m5P-aaEmqw-gnslDTDvrzkKZtr9zz4vTMyFODymb2rEQVWRu8b-dKmeVSr4AVG-THjVw0CPQO1JEHcOK~o0S6JMTjarI50zqZusadv2IlGmFIFZZepR~lJE0Bpl-EJK9wtKHu8ftZzH~eNbRkXvvLE7jfD1GnzzotIl8jxkNR~lxT3pwYU6xqy9Ib8MwRNQV2DGHSHGUrqlbAXaEqfTlhBQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
               alt="">

            </div>
            
          </div>
   </div>
   <div class="content">
    <div class="container-fluid" style="background-color:#F3F7FA;">
           <div class="row">
               <div v-if="main_auth" class="col-md-12">
                   <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
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
                                  <button v-on:click="validate_auth" class="text-center p-2 text-white pl-5 pr-5" style="border:none;border-radius: 3px;background: #0BC1BB;" >LOGIN</button>
                                    <!-- <button @click="validate_auth()">sad</button> -->
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
                          </b-tab>
                        </b-tabs>
                    </b-card-body>

                  </b-card>
               </div>
               <div v-if="reset==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                    
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" style="color: #CBCACA;cursor:pointer;" @click="reset=false"></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
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
                          <b-form-input id="input-7"  maxlength="15" type="email"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <div class="row">
                          <div class="col-md-12 text-center">
                            <button  class="col-md-12 text-center p-2 text-white pl-5 pr-5" 
                            style="border:none;border-radius: 3px;background: #0BC1BB;"
                            @click="newpass=true;reset=false;">SEND ME RESET LINK</button>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

               </div>
                <div v-if="newpass==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                    
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" style="color: #CBCACA;cursor:pointer;" @click="reset=false;newpass=false;"></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
                            Enter new password
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
                          <b-form-input id="input-7"  maxlength="15" type="password"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="Email"
                          label-for="input-7" >
                          <b-form-input id="input-7"  maxlength="15" type="password"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <div class="row">
                          <div class="col-md-12 text-center">
                            <button  class="col-md-12 text-center p-2 text-white pl-5 pr-5"
                             style="border:none;border-radius: 3px;background: #0BC1BB;" @click="reset=false;newpass=false;notifyVue('top', 'right','Password reset was successfull. Please log in.')">SET PASSWORD</button>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

               </div>
               <div v-if="lg_screen_flags.social_flag==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                    
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" 
                        style="color: #CBCACA;cursor:pointer;" ></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
                            Link your social
                          </span>
                        </div>
                        <div class="col-md-12 text-center">
                          <hr>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-9 p-2" style="background-image: linear-gradient(#3B5998, #3B5998);">
                          <span class="familia text-white"> <i class="fab fa-facebook-f"></i> FACEBOOK</span> 
                        </div>
                        <div class="col-md-3 p-2" style="background-color:#2E4779">
                          <span class="familia text-white"> CONNECT </span>
                        </div>  
                      </div>  
                      <div class="row mt-3">
                        <div class="col-md-9 p-2" 
                        style="background-image: linear-gradient(to right,#9F35B1 0%, #D72F7C 51%,#FA7D2D 100%);">
                          <span class="familia text-white"> <i class="fab fa-instagram"></i> INSTAGRAM</span> 
                        </div>
                        <div class="col-md-3 p-2" style="background-image: linear-gradient(to right,#9F35B1 0%, #D72F7C 51%);">
                          <span class="familia text-white"> CONNECT </span>
                        </div>  
                      </div>
                      <div class="row mt-5">
                        <div class="col-md-12" >
                          <span class="familia" style="color:#6C6C6C;font-size: 16px;"> Connected Accounts</span> 
                        </div> 
                        <div class="col-md-2 mt-4" >
                          <i style="font-size:2rem;color:#3B5998" class="fab fa-facebook-f"></i>
                        </div>
                        <div class="col-md-10 mt-4" >
                          <span style="font-size:20px;color:#2C3943">Dr. Shawn Keller DDS</span>
                       </div>
                      </div>    
                        <div class="row mt-5">
                          <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                             style="border:none;border-radius: 3px;background: #0BC1BB;"
                            >PREVIOUS</button>
                          </div>
                           <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                            @click="lg_screen_flags.bussiness_flag=true;lg_screen_flags.social_flag=false"
                             style="border:none;border-radius: 3px;background: #0BC1BB;" 
                             >NEXT</button>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

               </div>
               <div v-if="lg_screen_flags.bussiness_flag==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                    
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" 
                        style="color: #CBCACA;cursor:pointer;" ></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
                            Business Info
                          </span>
                        </div>
                        <div class="col-md-12 text-center">
                          <hr>
                        </div>
                      </div>
                        <b-form-group
                          id="fieldset-1"
                          label="Business Name"
                          label-for="input-7" >
                          <b-form-input id="input-7"  maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="Business Type"
                          label-for="input-7" >
                          <b-form-input id="input-7"  maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group>
                        </b-form-group>
                        <div class="row mt-5">
                          <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                            @click="lg_screen_flags.bussiness_flag=false;lg_screen_flags.social_flag=true"
                             style="border:none;border-radius: 3px;background: #0BC1BB;"
                            >PREVIOUS</button>
                          </div>
                           <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                            @click="lg_screen_flags.bussiness_flag=false;lg_screen_flags.billing_flag=true"
                             style="border:none;border-radius: 3px;background: #0BC1BB;" 
                             >NEXT</button>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

               </div>
                <div v-if="lg_screen_flags.billing_flag==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" 
                        style="color: #CBCACA;cursor:pointer;" ></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
                            Business Address
                          </span>
                        </div>
                        <div class="col-md-12 text-center">
                          <hr>
                        </div>
                      </div>
                        <b-form-group
                          id="fieldset-1"
                          label="Street 1:"
                          label-for="input-10" >
                          <b-form-input id="input-10" placeholder="4472 Broad Street" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="City:"
                          label-for="input-11" >
                          <b-form-input id="input-11" placeholder="Suite 160" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="State:"
                          label-for="input-11" >
                          <b-form-input id="input-11" placeholder="CA" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="Postal Code:"
                          label-for="input-11" >
                          <b-form-input id="input-11" placeholder="93401" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <div class="row mt-5">
                          <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                             style="border:none;border-radius: 3px;background: #0BC1BB;"
                            @click="lg_screen_flags.bussiness_flag=true;lg_screen_flags.billing_flag=false"
                            >PREVIOUS</button>
                          </div>
                           <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                            @click="lg_screen_flags.billing_flag=false;lg_screen_flags.payment_flag=true"
                             style="border:none;border-radius: 3px;background: #0BC1BB;" 
                             >NEXT</button>
                          </div>
                        </div>
                    </b-card-body>
                  </b-card>
                </div>
                <div v-if="lg_screen_flags.payment_flag==true" class="col-md-12">
                 <b-card
                    tag="article"
                    class="col-md-4 mb-2 ml-auto mr-auto"
                    style="margin-top:2rem !important;">
                      <template v-slot:header>
                        <span class="mb-0 pull-right fa fa-times-circle" 
                        style="color: #CBCACA;cursor:pointer;" ></span>
                      </template>
                    <b-card-body>
                      <div class="row">
                        <div class="col-md-12 text-center">
                          <span class="familia" style="color: #000000;font-size: 20px;">
                            Payment Method
                          </span>
                        </div>
                        <div class="col-md-12 text-center">
                          <hr>
                        </div>
                      </div>
                        <b-form-group
                          id="fieldset-1"
                          label="Name on Card:"
                          label-for="input-10" >
                          <b-form-input id="input-10" placeholder="Eric J.Walters" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <b-form-group
                          id="fieldset-1"
                          label="New Card Number:"
                          label-for="input-11" >
                          <b-form-input id="input-11" placeholder="4566442009933032" maxlength="15" type="text"  trim></b-form-input>
                        </b-form-group>
                        <div class="row">
                          <div class="col-md-6">
                             <b-form-group
                                id="fieldset-1"
                                label="Postal Code:"
                                label-for="input-11" >
                                <b-form-input id="input-11" placeholder="93401" maxlength="15" type="text"  trim></b-form-input>
                              </b-form-group>
                          </div>
                          <div class="col-md-6">
                            <b-form-group
                              id="fieldset-1"
                              label="Expiration Date"
                              label-for="input-18" >
                              <b-form-input id="input-18" placeholder="DD/YY" maxlength="15" type="text"  trim></b-form-input>
                            </b-form-group>
                          </div>

                        </div>
                        <div class="row mt-5">
                          <div class="col-md-6 text-center">
                            <button  class="col-md-12 text-center p-2 text-white "
                            @click="lg_screen_flags.billing_flag=true;lg_screen_flags.payment_flag=false"
                             style="border:none;border-radius: 3px;background: #0BC1BB;"
                            >PREVIOUS</button>
                          </div>
                           <div class="col-md-6 text-center">
                             <router-link  :to="{ name: 'overview', params: { title: 'logingin' }}">
                            <button  class="col-md-12 text-center p-2 text-white "
                             style="border:none;border-radius: 3px;background: #0BC1BB;" 
                             >NEXT</button>
                             </router-link>
                          </div>
                        </div>
                    </b-card-body>

                  </b-card>

                </div>

           </div>
    </div>
</div>
</div>
</template>
<script>
export default {
  
    data() {
      return {
        lg_screen_flags:{
          social_flag:false,
          bussiness_flag:false,
          billing_flag:false,
          payment_flag:false,
        },
        reset:false,
        newpass:false,
        errors:{
          email_error:false,
          password_error:false
        },
        login:{
          email:'',
          password:''
        }
        
      }
    },
   
    methods:{
        notifyVue (verticalAlign, horizontalAlign,msg) {
        // const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: `<span'>${msg}</span>`,
            icon:'fa fa-check',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: 'info'//this.type[color]
          })
      },
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
          this.lg_screen_flags.social_flag=true
          // this.lg_screen_flags.billing_flag=false

        }

      },
    },
    computed:{
      main_auth(){
        if(this.reset==false && 
        this.newpass==false && 
        this.lg_screen_flags.bussiness_flag==false && 
        this.lg_screen_flags.billing_flag==false &&
        this.lg_screen_flags.payment_flag==false &&
        this.lg_screen_flags.social_flag==false){
          return true
        }
        else{
          return false
        }
      }
    }
}
</script>
<style scoped>
body{
  background: #F3F7FA !important;
}
html, body {margin: 0; height: 100% !important; overflow: hidden !important}

#op{margin: 0; height: 100% !important; overflow: hidden !important}
</style>

