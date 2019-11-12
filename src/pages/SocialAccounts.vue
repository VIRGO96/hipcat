<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Social Accounts</p>
            </div>
            <div class="col-md-8 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);"
                class="btn btn-fill pull-right"> SAVE</button>
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-6 pl-0">
                <span class="familia" style="color:#6C6C6C;font-size: 16px;"> Connected Accounts</span> 
            </div>
        </div>
        <div class="row mt-1">
            <div class="col-md-6 p-2" style="border: 1px solid #CBCACA;">
                <i style="font-size:1rem;color:#3B5998" class="fab fa-facebook-f"></i>
                <span class="ml-3">   Islay Hills </span>    
                <span v-b-modal.modal-2  class="mt-1 fa fa-times pull-right"></span>
            </div>
        </div>
        
        <div class="row mt-2">
            <div class="col-md-6 p-2" style="border: 1px solid #CBCACA;">
                <i style="font-size:1rem;color:#3B5998" class="fab fa-facebook-f"></i>
                <span class="ml-3">   Dr Welters </span>    
                <span v-b-modal.modal-2  class="mt-1 fa fa-times pull-right"></span>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6 pl-0">
                <span class="familia" style="color:#6C6C6C;font-size: 16px;"> Add Accounts</span> 
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 p-2" style="background-image: linear-gradient(#3B5998, #3B5998);">
                <span class="familia text-white"> <i class="fab fa-facebook-f"></i> FACEBOOK</span> 
            </div>
            <div class="col-md-2 p-2" @click="notifyVue('top', 'right','Your facebook account has been added')"  style="cursor:pointer;background-color:#2E4779">
                <span class="familia text-white" > CONNECT </span>
            </div>  
        </div>  
        <div class="row mt-3">
            <div class="col-md-4 p-2" 
                style="background-image: linear-gradient(to right,#9F35B1 0%, #D72F7C 51%,#FA7D2D 100%);">
                <span class="familia text-white"> <i class="fab fa-instagram"></i> INSTAGRAM</span> 
            </div>
            <div class="col-md-2 p-2" @click="notifyVue('top', 'right','Your Instagram account has been added')" style="cursor:pointer;background-image: linear-gradient(to right,#9F35B1 0%, #D72F7C 51%);">
                <span class="familia text-white" > CONNECT </span>
            </div>  
        </div>
        <!-- <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Email"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="demorabbit@gmail.com" trim></b-form-input>
                </b-form-group>

            </div>
        </div>
        <div class="row">    
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Role"
                        label-for="input-1"
                        >
                <b-form-select  v-model="selected" :options="options"></b-form-select>
                </b-form-group>
            </div>
        </div> -->
    </div>
    <b-modal id="modal-2" style="background-color:blue;" hide-header hide-footer>
            <div class="row">
                <div class="col-md-12 text-center">
            <i class="fa fa-check"></i>
            <p class="text-center familia text-white">Are you sure you wantto delete your account ?</p>
                    <button class="ml-2 pl-5 pr-5 bg-white familia" style="color: #2C3943;">Yes</button>
                </div>
            </div>
    </b-modal>
</div>
</template>
<script>
export default {
    methods:{
        notifyVue (verticalAlign, horizontalAlign,msg) {
        this.$notifications.notify(
          {
            message: `<span >${msg}</span>`,
            icon:'fa fa-check',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: 'info'//this.type[color]
          })
      },
     },
     data() {
      return {        
        selected:'Editor',
        options: [
          { value: 'Admin', text: 'Admin' },
          { value: 'Editor', text: 'Editor' }
        ],
      }
    }
}
</script>
<style scoped>


</style>


<style lang="scss">

// PRESENTATIONAL CSS
body {
  background-color: #f7f7f9;
}

</style>