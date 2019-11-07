<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
            <b-modal id="modal-1" title="New Post" style="margin-top:-140px;">
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
                    <div class="w-100">
                        <!-- <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                    </a-select> -->
                    <select class="ml-3 float-right col-md-4" style="padding:0.3rem;background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;">
                        <option style="background: #2C3943;color:white;" val="POST NOW">POST NOW</option>
                        <option style="background: #2C3943;color:white;" val="SAVE AS DRAFT">SAVE AS DRAFT</option>
                    </select>
                    <!-- <b-form-select style="background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;" class="col-md-4 pull-right ml-3 " v-model="selected2" :options="options2"></b-form-select> -->
                        <a-date-picker class="float-right col-md-6"
                        placeholder="SCHEDULE FOR LATER"
                        format="YYYY-MM-DD HH:mm"
                        :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"

                        />
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
                <button v-b-modal.modal-1 style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);" class="btn btn-fill pull-right"><span style="color:white;" class="fa fa-plus"></span> NEW POST</button>
                <b-form-select class="col-md-3 pull-right mr-3" v-model="selected" :options="options"></b-form-select>
                <b-form-input class="col-md-3 pull-right mr-3"  placeholder="Search"></b-form-input> 
            </div>

        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-3" v-for="(item,i) in categories" :key="i">
            <router-link to="category-details">

                <div class="col-md-12 pt-5 pb-5 mt-4"
                :style="'background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)),url('+item.link+');background-repeat: no-repeat;background-size: 100% 100%;'">
                    <p class="text-center text-white" >{{item.name}}</p>
                </div>
            </router-link>

            </div>
        </div>
    </div>
</div>

</template>
<script>
import VueDropzone from 'vue2-dropzone'
  import moment from 'moment'
export default {
    props:['title'],
    created(){
       console.log(this.title)
       if(this.title=="logingin"){
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
        link:'https://s3-alpha-sig.figma.com/img/35dd/3fbc/03d02e4aaff5cc323a47bd8ff22ea930?Expires=1574035200&Signature=HclHGHUTbBEn~X75sc-A4-JIz7AcOf8f-uzy~4T4rCbelAJbhMiykFatms1B4EvkSm8Glyu-K3KKZ9vtM5PSOr38h25N5xu~l9m5vdu4RrZNf5nAn1X6Y03Ffmk4OyWY27mecGMykBiPMwakIVB~DmkII1Nd87ZV1Q-NHe7M5rEiAn-HL~sRXoy8YwRpi1nY8Deh9yFPnNbjg2gFu502nZ12ibi-PHKdzUqv~HTecBdJiNvfoXCsKW7DcYhfIHWgOG8PUAWaf8KQh~Kros1AZoAhjMyltpFwQDIeJ57a7XfpnxdHp7Zhdohk4B4BYEaoH1V2frlpx3nQbAadF9n8tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',  
        categories:[
        {name:'Recent',
        link:'https://s3-alpha-sig.figma.com/img/112c/8dff/1e41408fdc7ece8ec87f8510db5ece0b?Expires=1573430400&Signature=SwsI3L6pltHsT3tBXh9U6i9moyu6Ng2LSxURl4TROFOY3INRKKV4fhUtVMDi1UPbt17-FFugWmGmEy44RMRzJFmSLQT9TN0a94-ZprXrtK2r4AupSfcQGZjkWwDcCXYcniVWLxVxxCYJnWZe6VD20~MEFlS8JqNdaf1eUXX2NG~DLZvgKP6JsrrloRlS4AljqsdnrsRgAy8EiB5hUQe73dudtlTSFsdBqGKGYzZqucviwVFX9yCWYqO~MjMtUxw3fJM8nmQ8FfIli9WTu4U488Ls47PISO7IcDvtSoNrmJZtCVm8rA9OUJL361Ao9PnRq-PhKBKTrK2amz99~Sr5QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Popular',
        link:'https://s3-alpha-sig.figma.com/img/6724/4505/921fad164bebf5579147760b6e9e48b0?Expires=1573430400&Signature=EcdXZf5eac9-xmPXA-I0lHx2SI3PSV-NFE0Px2u4klbPaJxZghAgWc~T9cAoSLUi0HAkE5yqvC1VUgpTrLYQL0YfjKPojbAzRWb2Url9UBcCFhPHceidUUGkJWLLbHhHfAYhQlMdG7SWX5nXSsUafCOrQhIn9KzOkjeH-7eawIluNO2fvO6Oz3IAAyjq18LIUAhjGqKjXLY45F9wAaraZW2RI~IzjB1IdoAN2mheVIyW4jX6EEVsWv4eno5DHpfRceE8x~Lybmf358WDCx0AZSce1-RQTSKLL9KDdkDmqHYnFhKK~oq406Khb~lJvlvjCCj65AzbhNy3-dHY1hHUdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Book an Appointment',
        link:'https://s3-alpha-sig.figma.com/img/5abc/9d62/8823a35ddb9d271971a0e79c8e9b00b6?Expires=1573430400&Signature=cgKeGcFT0Q4lUaQLnwdBuji3sL-gxneWSjBYts2rhe-wzUbHeQLu9BMZ~iyB7NHlzuZJIlU3edixKeVbTchEYUETzV157Vx-rDdZYjGRNYdAaeKcBiGpQVMrDLLgm3n~ViW1NSXpkoyYTmfQZRyiILNQrYc8RjZS8l31l0HLMLWgkswZ~WegBFSBhiDQuOF83RlcCSey8vI3Z2cEe4qYzWwxvPJTxtgAukpywiMAXKI3ndPf1ZWOQuujbDDaZcvqc3iXaSIAR4iv7sOROZdbovYQfKa5OlqbiNIhsze-29g9rvq16FgRgfhv2wJfMziCttX9Zs1jxOf1huBPemqKoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Community',
        link:'https://s3-alpha-sig.figma.com/img/cb64/2ae5/5aa94d40c7a4bdbc0dd9e4e57976fd09?Expires=1573430400&Signature=PPYjnZOV3xZZiJwPJgbblU8TbAxRC4~ktJSG7PvtPPK3uO7CN8eoPK9yzyPoY0ytaQzhAUtyHL760rLTVC8qfZ1IZRIGTB2p3CQ1o3u3Vf8rbFXiI777S4zMVCQhsJSH6oEyD0NMTzyXdYGLxOPGqX6e~vnnpJN93FPTrXsSgX0Y5zmHK9L94CJzJ5veb8LE4PYldLjp6fdZATw1rMJUOw6oVWG1J6M380tf4~~UnKtiMsmT3Z0lkRe1kezt~E0MNDOc6clWTt5woMt1h3GbQQr6yd3BMYAHg6VFlc0qu1DiZAXFhVTbhE4H~O0YZIwgy2nFkzjyWCBud6POfiffVw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Contest',
        link:'https://s3-alpha-sig.figma.com/img/8586/ee54/b0a2384de062a1fcf9f1ea080be90c74?Expires=1573430400&Signature=ebWKr4o~fwZFyzaKM1CDefO10AhsJFyWB89M1qgPHdm2UP~vyt022lTe06VdY10nrDK2ii-OM77HZ-u86HXglN4a6bmx0zEGQP0SKXeEYCwCD3lFHaZrgLw~uWSJv1ljxYe4ryaDOfnrIXXe90k3Tdk20wzkKQYgqUPxpKdMqQxssT4V96ohuS~EAjVXt82txYMb8qbLXGuo~9q5hPEWeg3kpcm~LaiYGwKmIMb3fRjQmjMAlLUugSMYTOx59cvG59wXvAmJkWvdvIZyjafDjll0~wm0kws66~8XwbEOZZjSJ44lQcp5XSmKsiEdaUY~dEhipfCotWybSeJ13weQ8g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'About Us',
        link:'https://s3-alpha-sig.figma.com/img/76e3/1b70/dbb8639b67428be47dc56048a5f51a33?Expires=1573430400&Signature=Dsujbeqs4azjCRyDq3HKgaNBGiatZGSEkHj2q~c1diTV~8SEB0dwva3QnU-3qJi-3mhn8pi3xBkobHAt5hgJaxE3WGWjKqP8jc2IxMWjx5k2p83ODLcK0hMbv8MjiOVCkAAz0PJ8FCacG1uj6Mdz-Qu8qSxblToMbMVaPVnQMIcSAC87yC9d52Pm2GDk-TOfmOoGlcUi9suc2EQ-AVUgTYnQQWncUUZV3adnz0hg6J0mZVAuNtukXEvLB-uqWMeT~WF7KL93KmqXlrvD43It2D7YQICUbx7tw0JLLaa1C9dKTF7zgxP348QY3668CX2B6OqJ7rnah2IruKoCUudemQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Customer Appreciation',
        link:'https://s3-alpha-sig.figma.com/img/912d/09cc/f0cb5e75b4d00e0049ba06555e1e7dff?Expires=1573430400&Signature=Lp7dFm8GxJtxq0jCvWAcaeEyFbLCNns7~vWkHMrXfu5M7PlhvI8A21qKss-RSBAZfW60DnFr0y~1Tj-tEkS8NDMakn6j3QUZFOkd-RfIT5P2ziHddG6YsvA-ZAgaLCw~-w-7ZDh3Xh4tos46XpKv-fzS~~JszEV6OMm-N1iqvnpTL7KjTdZmxpqKIMH9qNwT8Ssc4iNJaV-LeOCI3jRyeNVd5iLHzrdFdwkEUKWYoQ3Z0pv0C6h9EWeCrUsDMPKNBlPxynZmMQCaqeOq6RETKHFo7OLGJic4p8Ij38ythSrziwq1EEQERtYec3kgDb9d~mh6ioA-32klZ58BUFb-Ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Events',
        link:'https://s3-alpha-sig.figma.com/img/739e/7de6/86958a320d45f38e9bea1025753e6ff4?Expires=1573430400&Signature=AmhGsh9ptYcRLZFzAurb8pQqXvSComZglIQ9Vk908Q~M6oRvl-Iq~02p9aurucy1puDxqq3oohjFOthZgKDYG6gwH7b5rngyEGBu6xXHdiQB22fvUQmYsYKEoruIlNFIklRXJ17ZZHNg2NaLLbWKu7~rM4Dx3~OCH3prpjYhg0Ed37LjnxwblaDUyYF0dRMpJGg6rD-bRSH464epl-KrQfBB8OVMURzpazZ0FF6yy2gQPLEyNbYsVNcWaQTRo7fdqvTWiDqIgS-lU3FQCS-OCWdhfv75S1-w~krZAAMVJxUTIsa7mI9rtThGvv6sQhy9QJVPf47I2u7~u99PsHOPUQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'FAQs',
        link:'https://s3-alpha-sig.figma.com/img/c5b0/857e/3d9be1ec17e0557308e6a3d99f0ba1fb?Expires=1573430400&Signature=DOKgwXKcQ53KQuCpq5hntBULYkj82K1~61xUYDQ~YlbKjIVoQsrIRvJ1~bNRuK1fzhpphXk5gk2~bfEReDTJLu2LE4mYWpKTqO-YeyCeKUHhlUN0w8cvQmFio1uIa2pIbkzwD4reclGXg-9~Ps5t5hwlnNgAkWA7IUjglTZ3ILVBH1I1p~riXtM2D5MSdrVdRYFQzqW7B6xlVr7Ej5RXHAWwXfITb7tQyXfV9IOLGzDgLTFy~SAU579n0mY2HpkGp99hNsymgbTGZ27n2LbMONL~5mnjFnXH34SZDseH41QkTCGoRMAHc-RTo~PuOHxgp1kTb9VGCR-IbMmP5WwGAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Fun Facts',
        link:'https://s3-alpha-sig.figma.com/img/039a/1d30/b2927c426d9cc23d6e11a249045f8651?Expires=1573430400&Signature=SHt2C4nISG9Ida3W~t16P1CdVuXQ77YuTDtVTlUgUzXh87oVU736jXNT3paFwLBNJNq1i6uq36g2GyFnzgbON5ScL9AIbFzgInaYRbWX-aCm5XOM-hNZ-ftZRVn~ZSueNPQHgq~0VHUiHnIj~zyQSYHV70GWlkBMalU84gG7axz6cSmdxk8HRNqwe9lsgLtyrGGi0Rb5uRYXZ9EQ5oSARfVNFG0DHJ4inMMp1ISUk8cKf5nDXbg0tBfsK4lAUZlcIJq5MAzXJtyvSHD22dN8vjYa2be-UtUUSSb67QlEdqyonlxuN-dA~nGar3CJtCnB7mJ2Cfkpd-Dy7TUNRMrVFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Health and Wellness',
        link:'https://s3-alpha-sig.figma.com/img/039a/1d30/b2927c426d9cc23d6e11a249045f8651?Expires=1573430400&Signature=SHt2C4nISG9Ida3W~t16P1CdVuXQ77YuTDtVTlUgUzXh87oVU736jXNT3paFwLBNJNq1i6uq36g2GyFnzgbON5ScL9AIbFzgInaYRbWX-aCm5XOM-hNZ-ftZRVn~ZSueNPQHgq~0VHUiHnIj~zyQSYHV70GWlkBMalU84gG7axz6cSmdxk8HRNqwe9lsgLtyrGGi0Rb5uRYXZ9EQ5oSARfVNFG0DHJ4inMMp1ISUk8cKf5nDXbg0tBfsK4lAUZlcIJq5MAzXJtyvSHD22dN8vjYa2be-UtUUSSb67QlEdqyonlxuN-dA~nGar3CJtCnB7mJ2Cfkpd-Dy7TUNRMrVFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'How-Tos',
        link:'https://s3-alpha-sig.figma.com/img/f5d1/6081/7549b7015f7053e66cd49cef8fda3ba7?Expires=1573430400&Signature=ayd9vUVdj6Eq~DVXYcz91Kx-FiDzMgnAwlaBbU1ZpfzTBrWXoyTsG2j~4MTeeBQ6lH9DR~s4hyQqyz--vYEd-WgfwukGdgtHAWlt-W24k0sjFLPQaHfndVA0Y5Qe6EGnZX8qqOytnkO~Djy6HEdKCk-xaHW~mPk-ttzXT9ZMab2Mc6PxhhKK6Kp7Fw805LvqXKGmPHfztUxehorfWb9mBZGRzcVyJCbWLppb-o2j8HMFuw2jAmxybH~KSIlLuLSMZZXlEVIFTyXtYq7w~KcmSYQ27EFVS04BKdQbBNjP6Qeau3t~SG~tEDQwxmjaJNvcl7GASdFw9WDnVlI3EJZ4tA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Products',
        link:'https://s3-alpha-sig.figma.com/img/5abc/9d62/8823a35ddb9d271971a0e79c8e9b00b6?Expires=1573430400&Signature=cgKeGcFT0Q4lUaQLnwdBuji3sL-gxneWSjBYts2rhe-wzUbHeQLu9BMZ~iyB7NHlzuZJIlU3edixKeVbTchEYUETzV157Vx-rDdZYjGRNYdAaeKcBiGpQVMrDLLgm3n~ViW1NSXpkoyYTmfQZRyiILNQrYc8RjZS8l31l0HLMLWgkswZ~WegBFSBhiDQuOF83RlcCSey8vI3Z2cEe4qYzWwxvPJTxtgAukpywiMAXKI3ndPf1ZWOQuujbDDaZcvqc3iXaSIAR4iv7sOROZdbovYQfKa5OlqbiNIhsze-29g9rvq16FgRgfhv2wJfMziCttX9Zs1jxOf1huBPemqKoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Promotions',
        link:'https://s3-alpha-sig.figma.com/img/90e4/920e/c7e3e678677c9babcd92693c4981f189?Expires=1573430400&Signature=Btklw8fBoOotRVi6ZNZKmeurNvoyMUKSh-Pfh79mpl1J4ubgt4Qi9GatoYdirwi0Q38Wp9fAhO5~klXL6gmiVeh92iNrruABR-LD2VVtR9hu4v0kgPCSyX3Bxh~iibRzj6gTJ04rBjR-19h9ruywSNnutw-Vr6H0YKIRN1Yc6xQkiMD-enpTHcnhffPVLCCg6Jv78CFwy-qfxxltGBNYen~PpETQ3FEwFWhbJMzw-rNZ2PieVlcnxxP-y4yHlYKGrbDzcRlUSqb3guiU5FE-ArHF9n2LiCz-Pod6Q~P-wmTZsPhbd80-C7jum9euH-eEi20r9iiD8tH-wEKsTP~zIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Quotes And Sayings',
        link:'https://s3-alpha-sig.figma.com/img/9bae/c0aa/9bb1ffc85f85d08b89d5977090045965?Expires=1573430400&Signature=dZtAbMBr2qw-IPm3DQQHDEFiwesvv62rNRSHtEKgnrscW4k8Q1-wkrqE~wXpMYMBrNFUlxHnuvmxeTrffaPaEhV95M3Tz9VdClsDLsKQwkTxX1~YfSP~HD~87NHMi4a1JrOrYaOBe6WZK7KcMm5uQsyLs05N2hY~a8Na6LSjHGB9J-fTQ1nWEqfIUOXZ3Yyo5F3hhY5S1G65SDlVF6p1aPupCSMfpD6pIAicmn~GE~sUMhuoWjk9ngtoRmcLlfjacV5DreXyzbv3pgKKEPeQHk~cd~Iw-iKkpIQC31icEm-7Tc0iY9jbHk03kfCdMsseAJZkZ0djb8SEIt43ugoxGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {name:'Reviews',
        link:'https://s3-alpha-sig.figma.com/img/5abc/9d62/8823a35ddb9d271971a0e79c8e9b00b6?Expires=1573430400&Signature=cgKeGcFT0Q4lUaQLnwdBuji3sL-gxneWSjBYts2rhe-wzUbHeQLu9BMZ~iyB7NHlzuZJIlU3edixKeVbTchEYUETzV157Vx-rDdZYjGRNYdAaeKcBiGpQVMrDLLgm3n~ViW1NSXpkoyYTmfQZRyiILNQrYc8RjZS8l31l0HLMLWgkswZ~WegBFSBhiDQuOF83RlcCSey8vI3Z2cEe4qYzWwxvPJTxtgAukpywiMAXKI3ndPf1ZWOQuujbDDaZcvqc3iXaSIAR4iv7sOROZdbovYQfKa5OlqbiNIhsze-29g9rvq16FgRgfhv2wJfMziCttX9Zs1jxOf1huBPemqKoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'}
        
        
        
        
        
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
.modal-content{
    margin-top:-130px !important;
}
.opd{
    background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)), url("https://s3-alpha-sig.figma.com/img/6724/4505/921fad164bebf5579147760b6e9e48b0?Expires=1573430400&Signature=EcdXZf5eac9-xmPXA-I0lHx2SI3PSV-NFE0Px2u4klbPaJxZghAgWc~T9cAoSLUi0HAkE5yqvC1VUgpTrLYQL0YfjKPojbAzRWb2Url9UBcCFhPHceidUUGkJWLLbHhHfAYhQlMdG7SWX5nXSsUafCOrQhIn9KzOkjeH-7eawIluNO2fvO6Oz3IAAyjq18LIUAhjGqKjXLY45F9wAaraZW2RI~IzjB1IdoAN2mheVIyW4jX6EEVsWv4eno5DHpfRceE8x~Lybmf358WDCx0AZSce1-RQTSKLL9KDdkDmqHYnFhKK~oq406Khb~lJvlvjCCj65AzbhNy3-dHY1hHUdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")  no-repeat center;

      /* background:  url("https://s3-alpha-sig.figma.com/img/112c/8dff/1e41408fdc7ece8ec87f8510db5ece0b?Expires=1573430400&Signature=SwsI3L6pltHsT3tBXh9U6i9moyu6Ng2LSxURl4TROFOY3INRKKV4fhUtVMDi1UPbt17-FFugWmGmEy44RMRzJFmSLQT9TN0a94-ZprXrtK2r4AupSfcQGZjkWwDcCXYcniVWLxVxxCYJnWZe6VD20~MEFlS8JqNdaf1eUXX2NG~DLZvgKP6JsrrloRlS4AljqsdnrsRgAy8EiB5hUQe73dudtlTSFsdBqGKGYzZqucviwVFX9yCWYqO~MjMtUxw3fJM8nmQ8FfIli9WTu4U488Ls47PISO7IcDvtSoNrmJZtCVm8rA9OUJL361Ao9PnRq-PhKBKTrK2amz99~Sr5QA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"  ) no-repeat center; */
}



/* linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)), url(Screenshot 2019-08-21 at 10.27.44 AM.png) */
</style>


<style lang="scss">
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

// PRESENTATIONAL CSS
body {
  background-color: #f7f7f9;
}
.top-right {
  position: absolute;
  top: -1px;
  right: 2px;
}

</style>