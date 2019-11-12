<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-6 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Billing Information > Update Billing info</p>
            </div>
            <div class="col-md-6 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);"
                @click="saver()" class="btn btn-fill pull-right"> SAVE</button>
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Full Name"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Eric J. Walters" trim></b-form-input>
                </b-form-group>

            </div>
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Name on Card:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Eric J. Walters" trim></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Street 1:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="4472 Broad Street" trim></b-form-input>
                </b-form-group>

            </div>
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="New Card Number:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="4566442009933032" trim></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Street 2:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Suite 160" trim></b-form-input>
                </b-form-group>

            </div>
             <div class="col-md-4">
                <b-form-group
                        id="fieldset-1"
                        label="Expiration Date"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"  type="date" placeholder="MM/YY" trim></b-form-input>
                </b-form-group>
                  
            </div>
            <div class="col-md-2">
                <b-form-group
                        id="fieldset-1"
                        label="CCV"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="554" trim></b-form-input>
                </b-form-group>
                  
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="City"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="Suite 160" trim></b-form-input>
                </b-form-group>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="State:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="CA" trim></b-form-input>
                </b-form-group>

            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Postal Code:"
                        label-for="input-1"
                        >
                        <b-form-input id="input-1"   placeholder="93401" trim></b-form-input>
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
            this.notifyVue('top', 'right','Billing information has been updated')
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