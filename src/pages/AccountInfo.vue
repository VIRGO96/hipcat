<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Accound info</p>
            </div>
            <div class="col-md-8 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);"
                @click="saver()" class="btn btn-fill pull-right"> SAVE</button>
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
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Password"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="*******" trim></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Company Name"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Shell Pharamceuticals" trim></b-form-input>
                </b-form-group>

            </div>
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Old Password"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="*******" trim></b-form-input>
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
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Timezone"
                        label-for="input-1"
                        >
                <b-form-select  v-model="selected" :options="options"></b-form-select>
                </b-form-group>
            </div>
        </div>
                <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="New Email"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="demorabbits@gmail.com" trim></b-form-input>
                </b-form-group>

            </div>
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Business Type"
                        label-for="input-1"
                        >
                <b-form-select  v-model="selected2" :options="options2"></b-form-select>
                </b-form-group>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    methods:{
        saver(){
            this.notifyVue('top', 'right','Account Information has been updated')
            this.notifyVue('top', 'right','Your password has been updated')
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
          
        selected2:'DENTAL',        
        selected:'[GMT-2]America/Samoa',
        options2: [
          { value: 'DENTAL', text: 'DENTAL' },
          { value: 'MEDICAL', text: 'MEDICAL' }
        ],
        options: [
          { value: '[GMT-3]America/Bahia', text: '[GMT-3]America/Bahia' },
          { value: '[GMT-2]America/Samoa', text: '[GMT-2]America/Samoa' }
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