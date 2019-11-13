<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Users</p>
            </div>
            <div class="col-md-8 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);"
                 class="btn btn-fill pull-right"> SAVE</button>
                <span @click="redirect()" class="familia  mt-2 mr-3 pull-right" style="font-size:1rem;cursor:pointer;text-decoration-line: underline;color:#0BC1BB;text-transform: uppercase;">
                    <span class="fa fa-plus-square-o" style="color:#0BC1BB"></span>
                    Add New User</span>
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-3">
                <h5 >Name</h5>
            </div>
             <div class="col-md-3">
                 <h5>Role</h5>
            </div>
             <div class="col-md-3">
               <h6>Posts</h6>
            </div>
             <div class="col-md-3">
               <!-- dasdsa -->
            </div>
        </div>
        <div class="row-backgrounds row mt-1" >
            <div class="col-md-3">
               <span class="fa fa-user" style="color: #CBCACA;"></span>  <span class="fonts">Islay Hill</span>
            </div>
             <div   class="col-md-3">
                 <span class="fonts">Admin</span>
            </div>
             <div class="col-md-3">
                 <span class="fonts">10</span>
            </div>
             <div class="col-md-3">
                <router-link to="/admin/edit-user?active=settings">
                <span class="ml-3 pull-right fonts familia"  style="color:#089D9B">EDIT ></span>
                </router-link>
            </div>
        </div>
        <div class="row row-backgrounds mt-1">
            <div class="col-md-3">
                <span class="fa fa-user" style="color: #CBCACA;"></span>  <span class="fonts"> Hill</span>
            </div>
             <div   class="col-md-3">
                 <span class="fonts">Editor</span>
            </div>
             <div class="col-md-3">
                 <span class="fonts">10</span>
            </div>
             <div class="col-md-3">
                <router-link to="/admin/edit-user?active=settings">
                    <span class="ml-3 pull-right fonts familia"  style="color:#089D9B">EDIT ></span>
                </router-link>
                <span class=" pull-right fonts familia" style="color:red;cursor:pointer;" v-b-modal.modal-2>DELETE</span>

            </div>
        </div>
        <div class="row row-backgrounds mt-1">
            <div class="col-md-3">
               <span class="fa fa-user" style="color: #CBCACA;"></span>   <span class="fonts"> Jon Till</span>
            </div>
             <div   class="col-md-3">
                 <span class="fonts">Editor</span>
            </div>
             <div class="col-md-3">
                 <span class="fonts">2</span>
            </div>
             <div class="col-md-3">
                 <router-link to="/admin/edit-user?active=settings">
                <span class="ml-3 pull-right fonts familia"  style="color:#089D9B">EDIT ></span>
                 </router-link>
                <span class=" pull-right fonts familia" style="color:red;cursor:pointer;" v-b-modal.modal-2>DELETE</span>

            </div>
        </div>
        <b-modal id="modal-2" style="background-color:blue;" hide-header hide-footer>
            <div class="row">
                <div class="col-md-12 text-center">
            <i class="fas fa-info-circle"></i>
            <p class="text-center familia text-white">Are you sure you want to remove this account ?</p>
                    <button class="pl-5 pr-5 familia bg-transparent" style="border:1px solid;color: white;">Cancel</button>
                    <button class="ml-2 pl-5 pr-5 bg-white familia" style="color: #2C3943;">Yes</button>
                </div>
            </div>
        </b-modal>
    </div>
</div>

</template>
<script>
export default {
    methods:{
        redirect(){
            this.$router.push({path:'/admin/new-user?active=settings'})
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

.fonts{
font-size:16px
}

</style>


<style lang="scss">

// PRESENTATIONAL CSS
body {
  background-color: #f7f7f9;
}

.row-backgrounds{
background: #F3F7FA;
}

</style>