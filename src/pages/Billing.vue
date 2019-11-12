<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Billing Information</p>
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
                        label="Bill To:"
                        label-for="input-1"
                        >
                        <span >
                            Eric J. Walters <br> info@islayhilldentistry.com
                            <br> 4472 Broad Street,Suite 160 <br>
                            San Luis Obispo, CA 93401
                        </span>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        label="Payment Method:"
                        label-for="input-1"
                        >
                        <span >
                            Visa*************1234
                        </span>
                </b-form-group>
                <router-link to="/admin/update-billing">
                    <span style="color: #0BC1BB;text-decoration:underline;" class="familia"> UPDATE BILLING INFO</span>
                </router-link>
                <b-form-group
                class="mt-3"
                        id="fieldset-1"
                        label="Current Plan:"
                        label-for="input-1"
                        >
                        <span >
                            Basic Package
                        </span>
                </b-form-group>
            </div>
             <div class="col-md-6">
                <b-form-group
                        id="fieldset-1"
                        label="Billing History"
                        label-for="input-1"
                        >
                        <div class="row">
                            <div class="col-md-6">
                                <label for="">Date</label>
                            </div>
                            <div class="col-md-6">
                                <label for="">Amount</label>
                            </div>
                        </div> 
                        <div class="row p-2" style="background: #F3F7FA;">
                            <div class="col-md-6">
                                <span>12/03/2019</span>
                            </div>
                            <div class="col-md-6">
                                <span>$50.00</span>
                            </div>
                        </div> 
                        <div class="row p-2 mt-2" style="background: #F3F7FA;">
                            <div class="col-md-6">
                                <span>08/03/2019</span>
                            </div>
                            <div class="col-md-6">
                                <span>$50.00</span>
                            </div>
                        </div> 
                        <div class="row p-2 mt-2" style="background: #F3F7FA;">
                            <div class="col-md-6">
                                <span>08/03/2019</span>
                            </div>
                            <div class="col-md-6">
                                <span>$50.00</span>
                            </div>
                        </div> 
                        <div class="row p-2 mt-2" style="background: #F3F7FA;">
                            <div class="col-md-6">
                                <span>08/03/2019</span>
                            </div>
                            <div class="col-md-6">
                                <span>$50.00</span>
                            </div>
                        </div> 
                                                <div class="row p-2 mt-2" style="background: #F3F7FA;">
                            <div class="col-md-6">
                                <span>08/03/2019</span>
                            </div>
                            <div class="col-md-6">
                                <span>$50.00</span>
                            </div>
                        </div> 
                </b-form-group>
            </div>
        </div>
        <!-- <div class="row">
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
        </div> -->
    </div>
</div>

</template>
<script>
export default {
    methods:{
        saver(){
            this.notifyVue('top', 'right','Payment Mehtod has been updated')
        },
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