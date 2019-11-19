<template>
<!-- <div class="content"> -->
    <div class="container-fluid" style="background-color:white;">
            <b-modal id="modal-8" title="New Post" style="margin-top:-140px;">
                <b-container>
                    <div class="row">
                        <div class="col-md-12 pr-0 pl-0">
                            <span class="fa fa-share-alt"></span> <span class="familia" style="color:#2C3943">Select Your Social Accounts</span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                            <span class="pl-2"> <input type="checkbox">  
                            <!-- <span style="background-color:#3b5998;font-size:12px;color:white;border-radius:1rem;" class="ml-2 fa fa-facebook p-1"></span> -->
                            <i style="color:#3b5998" class="fab fa-facebook ml-2"></i>
                             <span > Islay Hills </span>
                             </span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                            <span class="pl-2"> <input type="checkbox"> 
                             <!-- <span style="background-color:#3b5998;font-size:12px;color:white;border-radius:1rem;" 
                             class="ml-2 fa fa-facebook p-1"></span> -->
                              <i style="color:#3b5998" class="fab fa-facebook ml-2"></i>
                             <span > Islay Hills </span>
                              </span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                            <span class="pl-2"> <input type="checkbox">  
                            <!-- <span style="background-color:#00aced;font-size:12px;color:white;border-radius:1rem;" 
                            class="ml-2 fa fa-twitter p-1"></span>  -->
                            <i style="color:#00aced" class="fab fa-twitter ml-2"></i>
                             <span > Islay Hills </span>
                              <!-- </span> -->
                            Islay Hills</span>
                        </div>
                    </div>
                    <!-- <i class="fab fa-twitter"></i> -->
                    <div class="row mt-2">
                        <div class="col-md-12 pr-0 pl-0"  >
                            <span style="display:block;">
                                <i style="color: #6C6C6C;" class="fa fa-plus-square"></i>
                                <span style="color: #6C6C6C;font-size:12px;">Add new account</span>
                            </span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12 pr-0 pl-0"  >
                            <span style="display:block;">
                                <i style="color: #2C3943;" class="fa fa-edit"></i>
                                <span style="color: #2C3943;">Add/Customize Your Caption:</span>
                            </span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 pr-0 pl-0"  >
                            <b-form-textarea
                            placeholder="Is your smile slowly turning into a frown? Give it life with dermal fillers!"
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 pr-0 pl-0"  >
                            <span style="display:block;">
                                <i style="color: #2C3943;" class="fa fa-file-image-o"></i>
                                <span style="color: #2C3943;">Add Your Media:</span>
                            </span>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-5 form-group inputDnD pr-0 pl-0">
                            <input type="file" style="" class="form-control-file  text-dark font-weight-bold" id="inputFile" accept="image/*"  @change="onFilePicked" @drop.prevent="readUrl" @dragover.prevent  
                            data-title="Drag and drop a files">
                        </div>
                        <div  v-if="link!=''"  class="col-md-3 mt-1" style="position:relative;">
                            <div class="top-right "> <span @click="link=''" class="fa fa-times bg-white rounded" style="color:black;"></span></div>
                            <img width="100" height="90" :src="link" alt="" srcset="">
                        </div>
                    </div>

                </b-container>
                 <template v-slot:modal-footer>
                        <a-date-picker 
                        class="float-right col-6 col-md-6 d-none d-block d-xl-none d-lg-none d-md-none"
                        placeholder="SCHEDULE LATER"
                        format="YYYY-MM-DD HH:mm"
                        :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"

                        />
                        <select class=" d-none d-block d-xl-none d-lg-none d-md-none ml-3  " style="padding:0.3rem;background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;">
                        <option style="background: #2C3943;color:white;" val="POST NOW">POST NOW</option>
                        <option style="background: #2C3943;color:white;" val="SAVE AS DRAFT">SAVE AS DRAFT</option>
                    </select>
                        
                       
                    <div class="w-100 ">
                    
                    <select class="d-none d-md-flex ml-3 button-margins float-right col-md-4" style="padding:0.3rem;background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;">
                        <option style="background: #2C3943;color:white;" val="POST NOW">POST NOW</option>
                        <option style="background: #2C3943;color:white;" val="SAVE AS DRAFT">SAVE AS DRAFT</option>
                    </select>
                    <a-date-picker class="float-right col-md-6 d-none d-md-block"
                        placeholder="SCHEDULE FOR LATER"
                        format="YYYY-MM-DD HH:mm"
                        :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"

                        />

                    <!-- <select class="ml-3 button-margins float-right col-md-4" style="padding:0.3rem;background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;">
                        <option style="background: #2C3943;color:white;" val="POST NOW">POST NOW</option>
                        <option style="background: #2C3943;color:white;" val="SAVE AS DRAFT">SAVE AS DRAFT</option>
                    </select>
                        <a-date-picker class="float-right col-12 col-md-12"
                        placeholder="SCHEDULE FOR LATER"
                        format="YYYY-MM-DD HH:mm"
                        :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"

                        /> -->
                        <!-- <p id="tooltip-button-variant" class="float-right familia mt-2" 
                        style="cursor:pointer;text-decoration-line: underline;font-size:16px;color: #2C3943;"> 
                        <span   class="fa fa-calendar">
                            </span> SCHEDULE FOR LATER
                        </p> -->
                    </div>
                </template>
            </b-modal>
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Post Categories</p>
            </div>
            <div class="col-md-8 mt-3">
                <button v-b-modal.modal-8 
                style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);" 
                class="button-margins2 mr-3 col-12 col-md-3 btn btn-fill pull-right"><span style="color:white;" class="fa fa-plus"></span> NEW POST</button>
                <b-form-select class="col-md-3 pull-right mr-3 button-margins2" style="background: #EAF1F4;" v-model="selected" :options="options"></b-form-select>
                <!-- <i class="fa fa-search search-icon"></i> -->
                 <a-input class="col-md-3  pull-right mr-3 form-control" style="background: #EAF1F4;" placeholder="Search" >
                    <a-icon slot="prefix" type="search"  />
<!-- <a-icon type="search" /> -->
                    <!-- <a-tooltip slot="suffix" title="Extra information">
                        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
                    </a-tooltip> -->
                    </a-input>
                <!-- <b-form-input class="col-md-3  pull-right mr-3" style="padding-left:2rem;background: #EAF1F4;" value="SEARCH" placeholder="Search"></b-form-input>  -->
            </div>

        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-3" v-for="(item,i) in categories" :key="i">
            <router-link to="category-details?active=dashboard">
<!--  -->
                <!-- :style="'background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)),url(img/recent.png);background-repeat: no-repeat;background-size: 100% 100%;'"> -->

                <div class="col-md-12 pt-5 pb-5 mt-4"
                :style="'background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)),url(img/'+item.link+');background-repeat: no-repeat;background-size: 100% 100%;'">
                    <p class="text-center text-white" >{{item.name}}</p>
                </div>
            </router-link>

            </div>
        </div>
    </div>
<!-- </div> -->

</template>
<script>
import VueDropzone from 'vue2-dropzone'
import moment from 'moment'
export default {
    props:['title'],
    created(){
       if(this.title=="logingin"){
           this.notifyVue('top', 'right','Account creation was successfull. Browse our social post library and get posting!')
       }
       if(this.$route.query.newlogin=='yes')
        {
           this.notifyVue('top', 'right','Account creation was successfull. Browse our social post library and get posting!')

        }   
    },
    components:{
        VueDropzone
    },
    methods:{
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
        onFilePicked(event){
            let reader = new FileReader();
            reader.onload = (e) => {
            this.link=e.target.result
            }
            reader.readAsDataURL(event.target.files[0]);

        },
        readUrl(event) {
            // console.log(event.dataTransfer.files[0])
            // if (input.files && input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                let imgData = e.target.result;
                this.link=e.target.result
                let imgName = event.dataTransfer.files[0];
                // input.setAttribute("data-title", imgName);
                console.log(e.target.result);
                }
                reader.readAsDataURL(event.dataTransfer.files[0]);
            // }

        },
         moment,
    //   range(start, end) {
    //     const result = [];
    //     for (let i = start; i < end; i++) {
    //       result.push(i);
    //     }
    //     return result;
    //   },

    //   disabledDate(current) {
    //     // Can not select days before today and today
    //     return current && current < moment().endOf('day');
    //   },

    //   disabledDateTime() {
    //     return {
    //       disabledHours: () => this.range(0, 24).splice(4, 20),
    //       disabledMinutes: () => this.range(30, 60),
    //       disabledSeconds: () => [55, 56],
    //     };
    //   },

    //   disabledRangeTime(_, type) {
    //     if (type === 'start') {
    //       return {
    //         disabledHours: () => this.range(0, 60).splice(4, 20),
    //         disabledMinutes: () => this.range(30, 60),
    //         disabledSeconds: () => [55, 56],
    //       };
    //     }
    //     return {
    //       disabledHours: () => this.range(0, 60).splice(20, 4),
    //       disabledMinutes: () => this.range(0, 31),
    //       disabledSeconds: () => [55, 56],
    //     };
    //   },

        dropzoneTemplate: function () {
            // return `<div>
            //         <div> <span data-dz-name /> </div>
            //         <div> <span class="fa fa-trash"> </span> </div>
            //          <div class="preview-container">
            //                 <img data-dz-thumbnail class="img-thumbnail border-0" />
            //                 <i class="simple-icon-doc preview-icon"></i>
            //             </div>
            //         </div>`
        return `<div style="background:blue;" class="dz-preview dz-file-preview mb-3">
                    <div  style="background:grey;color:white;" class="d-flex flex-row "> <div class="p-0 w-30 position-relative">
                        <div class="dz-error-mark"><span><i></i>  </span></div>
                        <div class="dz-success-mark"><span><i></i></span></div>
                        <div class="preview-container">
                            <img data-dz-thumbnail class="img-thumbnail border-0" />
                            <i class="simple-icon-doc preview-icon"></i>
                        </div>
                    </div>
                    <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
                        <div> <span data-dz-name /> </div>
                        <div class="text-primary text-extra-small" data-dz-size /> </div>
                        <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                        <div class="dz-error-message"><span data-dz-errormessage></span></div>
                    </div>
                    <a href="#" class="remove" data-dz-remove> <i class="glyph-icon simple-icon-trash"></i> </a>
                    </div>
            `
        }
    },
     data() {
      return {
        link:'https://s3-alpha-sig.figma.com/img/35dd/3fbc/03d02e4aaff5cc323a47bd8ff22ea930?Expires=1575244800&Signature=PMkOm3KStflhJhaGCXw33YZQ1ApznG3khHdYyADesxzBnAWRoUVk7FEMvFCrRguIKHxlSXIDrYC7YPXLnMiJA5tHgB~E8Agt5Kj4NBzcD6J0rLG2AIqbUdHxVhrwCEmkg0U~aNaO57NdQOY8mhFr9U~MeRhAJfHTMDd9Aa59GYaEYDkoSePXSFBNKq0ntbWmbnYNEBc8jOPkC9-u77zcJYuspx81FSjsgpIliyByMCyMqW2zozRc3DGLmftRFOvrrpBvULDVBRCnbO927fxckmyy1~rTBv4PkgfqOqRfS~e994N9bJV2qxSUX1w~gBOsUiOIV6VTw2-O~8lVC1htXg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',  
        categories:[
            {name:'Recent',
            link:'recent.png'
            },
            {name:'Popular',
            link:'popular.png'},
            {name:'Book an Appointment',
            link:'appointment.png'
            },
            {name:'Community',
            link:'community.jpg'
            },
            {name:'Contest',
            link:'context.png'
            },
            {name:'About Us',
            link:'about.png'
            },
            {name:'Customer Appreciation',
            link:'customer.png'
            },
            {name:'Events',
            link:'events.png'
            },
            {name:'FAQs',
            link:'faq.png'
            },
            {name:'Fun Facts',
            link:'funfact.png'
            },
            {name:'Health and Wellness',
            link:'health.png'
            },
            {name:'How-Tos',
            link:'howto.png'
            },
            {name:'Products',
            link:'products.png'
            },
            {name:'Promotions',
            link:'promotions.png'
            },
            {name:'Quotes And Sayings',
            link:'quotes.png'
            },
            {name:'Reviews',
            link:'reviews.png'
            }
        ],  
        selected2:'POST NOW',        
        selected:'INDUSTRY',
        options2: [
          { value: 'POST NOW', text: 'POST NOW' },
          { value: 'FOR LATER', text: 'FOR LATER' }
        ],
        options: [
          { value: 'INDUSTRY', text: 'INDUSTRY' },
          { value: 'DOMESTIC', text: 'DOMESTIC' }
        ],
        dropzoneOptions: {
            url: 'https://httpbin.org/post',
            thumbnailHeight: 160,
            maxFilesize: 2,
            previewTemplate: this.dropzoneTemplate(),
            headers: { 'My-Awesome-Header': 'header value' }
        },
      }
    }
}
</script>
<style scoped>
/* .modal-content{
    margin-top:-130px !important;
} */
.opd{
    background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)), url("https://s3-alpha-sig.figma.com/img/6724/4505/921fad164bebf5579147760b6e9e48b0?Expires=1573430400&Signature=EcdXZf5eac9-xmPXA-I0lHx2SI3PSV-NFE0Px2u4klbPaJxZghAgWc~T9cAoSLUi0HAkE5yqvC1VUgpTrLYQL0YfjKPojbAzRWb2Url9UBcCFhPHceidUUGkJWLLbHhHfAYhQlMdG7SWX5nXSsUafCOrQhIn9KzOkjeH-7eawIluNO2fvO6Oz3IAAyjq18LIUAhjGqKjXLY45F9wAaraZW2RI~IzjB1IdoAN2mheVIyW4jX6EEVsWv4eno5DHpfRceE8x~Lybmf358WDCx0AZSce1-RQTSKLL9KDdkDmqHYnFhKK~oq406Khb~lJvlvjCCj65AzbhNy3-dHY1hHUdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")  no-repeat center;

      /* background:  url("https://s3-alpha-sig.figma.com/img/112c/8dff/1e41408fdc7ece8ec87f8510db5ece0b?Expires=1573430400&Signature=SwsI3L6pltHsT3tBXh9U6i9moyu6Ng2LSxURl4TROFOY3INRKKV4fhUtVMDi1UPbt17-FFugWmGmEy44RMRzJFmSLQT9TN0a94-ZprXrtK2r4AupSfcQGZjkWwDcCXYcniVWLxVxxCYJnWZe6VD20~MEFlS8JqNdaf1eUXX2NG~DLZvgKP6JsrrloRlS4AljqsdnrsRgAy8EiB5hUQe73dudtlTSFsdBqGKGYzZqucviwVFX9yCWYqO~MjMtUxw3fJM8nmQ8FfIli9WTu4U488Ls47PISO7IcDvtSoNrmJZtCVm8rA9OUJL361Ao9PnRq-PhKBKTrK2amz99~Sr5QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"  ) no-repeat center; */
}



/* linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)), url(Screenshot 2019-08-21 at 10.27.44 AM.png) */
</style>


<style lang="scss">
 .ant-input {
  background: #EAF1F4;
}
.inputDnD {
  .form-control-file {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 10em;
    outline: none;
    visibility: hidden;
    cursor: pointer;
    background-color: #c61c23;
    box-shadow: 0 0 5px dashed currentColor;
    &:before {
      content: attr(data-title);
      position: absolute;
      top: 0.5em;
      left: 0;
      width: 100%;
      min-height: 6em;
      line-height: 2em;
      padding-top: 1.5em;
      opacity: 1;
      visibility: visible;
      text-align: center;
    //   border:1px solid #dcdcdc;
    //   border: 0.25em dashed currentColor;
      border: 1px dashed #000000;

    //   transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      overflow: hidden;
    }
    &:hover {
      &:before {
        border-style: solid;
        box-shadow: inset 0px 0px 0px 0px currentColor;
      }
    }
  }
}
.icon {
  padding: 10px;
  background: dodgerblue;
  color: white;
  min-width: 50px;
  text-align: center;
}

.input-container {
//   display: -ms-flexbox; /* IE10 */
//   display: flex;
//   width: 100%;
//   margin-bottom: 15px;
}
// PRESENTATIONAL CSS
// body {
//   background-color: white;
// }
.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}
.top-right {
  position: absolute;
  top: -1px;
  right: 2px;
}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
.search-icon{
    position: relative;
    left: 9.4rem;
    top: 0.5rem;
    z-index: 1;
    } 

 }


@media only screen  and (min-width : 1224px) {
.search-icon{
    position: relative;
    left: 9.4rem;
    top: 0.5rem;
    z-index: 1;
    } 
}
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.search-icon{
    position: relative;
    left: -0.2rem;
    top: 1.99rem;
    z-index: 1;
}


}
// placeholder {
// color:black !important
// }
// ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
//   color: red !important;
//   opacity: 1 !important; /* Firefox */
// }

// :-ms-input-placeholder { /* Internet Explorer 10-11 */
//   color: red !important;
// }

// ::-ms-input-placeholder { /* Microsoft Edge */
//   color: red !important;
// }
</style>