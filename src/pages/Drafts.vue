<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Drafts</p>
            </div>
            <div class="col-md-8 mt-3">
                <b-form-select style="background:#EAF1F4" class="col-md-3 pull-right mr-3" v-model="selected" :options="options"></b-form-select>
                <b-form-select style="background:#EAF1F4" class="col-md-3 pull-right mr-3" v-model="selected2" :options="options2"></b-form-select>

            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-12">
                <b-card
                    img-src="img/smile.png"
                    img-alt="Image"
                    img-width="20%"
                    img-height="180rem"
                    img-left
                    tag="article"
                    class="mb-2"
                >
                <b-card-body>
                    <b-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </b-card-text>
                       <hr style="border: 1px solid #B6C8D6;margin-top:4rem" > 
                    <div class="row" style="margin-top:1rem" >
                    <div class="col-md-5">
                        <span style="display:block;">
                            <i class="fa fa-calendar" style="color:#93A3AF;"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">This post is schedlued for: Tommorow @ 12:30pm</span>
                        </span>
                    </div>
                    <div class="col-md-1 pl-0 pr-0">
                        <span style="display:block;">
                            <i class="fa fa-calendar"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">Image</span>
                        </span>
                    </div>
                    <div class="col-md-2 pl-0 pr-0">
                        <span style="display:block;">
                            <i class="fa fa-calendar"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">User Marcey</span>
                        </span>
                    </div>
                    <div class="col-md-1  ml-5 mt-1 text-center">
                        <h5 class="ml-1 pull-right familia" style="font-size:13px;color:red;" v-b-modal.modal-3>DELETE</h5>
                    </div>
                    <b-modal id="modal-3" style="background-color:blue;" hide-header hide-footer>
                        <div class="row">
                            <div class="col-md-12 text-center">
                        <i class="fas fa-info-circle"></i>
                        <p class="text-center familia text-white">Are you sure you want to delete this post ?</p>
                                <button class="pl-5 pr-5 familia bg-transparent" style="border:1px solid;color: white;">Cancel</button>
                                <button class="ml-2 pl-5 pr-5 bg-white familia" style="color: #2C3943;">Yes</button>
                            </div>
                        </div>
                    </b-modal>
                    <div class="col-md-1 mt-1 mr-2 text-center">
                        <h5 class="pull-right familia" style="font-size:13px;color:blue;">EDIT</h5>
                    </div>
                    <div class="col-md-1.5  mt-1 text-center">
                        <h5 class="pull-right familia" style="font-size:13px;color:blue;">POST NOW</h5>
                    </div>
                    </div>

                </b-card-body>
              </b-card>

            </div>
            <div class="col-md-12">
                <b-card
                    img-src="img/smile.png"
                    img-alt="Image"
                    img-width="20%"
                    img-height="180rem"
                    img-left
                    tag="article"
                    class="mb-2"
                >
                <b-card-body>
                    <b-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </b-card-text>
                       <hr style="border: 1px solid #B6C8D6;margin-top:4rem" > 
                    <div class="row" style="margin-top:1rem" >
                    <div class="col-md-5">
                        <span style="display:block;">
                            <i class="fa fa-calendar" style="color:#93A3AF;"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">This post is schedlued for: Tommorow @ 12:30pm</span>
                        </span>
                    </div>
                    <div class="col-md-1 pl-0 pr-0">
                        <span style="display:block;">
                            <i class="fa fa-calendar"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">Image</span>
                        </span>
                    </div>
                    <div class="col-md-2 pl-0 pr-0">
                        <span style="display:block;">
                            <i class="fa fa-calendar"></i>
                            <span class="text-muted" style="color:#93A3AF;font-size: 13px;font-family: Monteserrat;">User Marcey</span>
                        </span>
                    </div>
                    <div class="col-md-1  ml-5 mt-1 text-center">
                        <h5 class="ml-1 pull-right familia" style="font-size:13px;color:red;cursor:pointer;" v-b-modal.modal-3>DELETE</h5>
                    </div>
                    <div class="col-md-1 mt-1 mr-2 text-center">
                        <h5 class="pull-right familia" style="font-size:13px;color:blue;">EDIT</h5>
                    </div>
                    <div class="col-md-1.5  mt-1 text-center">
                        <h5 class="pull-right familia" style="font-size:13px;color:blue;">POST NOW</h5>
                    </div>
                    </div>

                </b-card-body>
                
                
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>

            </div>
        </div>
    </div>    

</div>

</template>

<script>
export default {
     data() {
      return {
        
        selected:'ALL PLATFORMS',
        selected2:'ALL USERS',

        options: [
          { value: 'ALL PLATFORMS', text: 'ALL PLATFORMS' },
          { value: 'DOMESTIC', text: 'DOMESTIC' }
        ],
        options2: [
          { value: 'ALL USERS', text: 'ALL USERS' },
          { value: 'ALL OTHERS', text: 'ALL OTHERS' }
        ]
      }
}
}
</script>
<style>
#modal-3___BV_modal_content_{
background: #0BC1BB;
box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.3);
border-radius: 5px;    
}
</style>