<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Users > Add New User</p>
            </div>
            <div class="col-md-8 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);"
                v-b-modal.modal-2 class="btn btn-fill pull-right"> SAVE</button>
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="User name"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Islay Hill" trim></b-form-input>
                </b-form-group>

            </div>
        </div>
        <div class="row">
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
        </div>
    </div>
    <b-modal id="modal-2" style="background-color:blue;" hide-header hide-footer>
            <div class="row">
                <div class="col-md-12 text-center">
            <i class="fa fa-check"></i>
            <p class="text-center familia text-white">New user created, have them set up a password from their email.</p>
                    <button class="ml-2 pl-5 pr-5 bg-white familia" style="color: #2C3943;">Yes</button>
                </div>
            </div>
    </b-modal>
</div>
</template>
<script>
export default {
    methods:{
        saver(){
            // this.notifyVue('top', 'right','Account Information has been updated')
            // this.notifyVue('top', 'right','Your password has been updated')
        },
        notifyVue (verticalAlign, horizontalAlign,msg) {
        // const color = Math.floor((Math.random() * 4) + 1)
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