<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <b-modal id="modal-4" size="lg">
            <template v-slot:modal-title>
                  <div>
                   <h5>New Post > Post Library </h5>
                  </div>
            </template>
           <b-container>
             <div class="row">
                <div class="col-md-3" v-for="(item,i) in categories" :key="i">
                  <router-link to="category-details?active=dashboard">
                      <div class="col-md-12 pt-5 pb-5 mt-4"
                      :style="'background: linear-gradient(0deg, rgba(44, 57, 67, 0.75), rgba(44, 57, 67, 0.75)),url(img/'+item.link+');background-repeat: no-repeat;background-size: 100% 100%;'">
                          <p class="text-center text-white" >{{item.name}}</p>
                      </div>
                  </router-link>
                </div>
            </div>
                <!-- <div class="row">
                    <div class="col-md-12 pr-0 pl-0">
                        <span class="fa fa-share-alt"></span> <span class="familia" style="color:#2C3943">Select Your Social Accounts</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                        <span class="pl-2"> <input type="checkbox">  
                        <i style="color:#3b5998" class="fab fa-facebook ml-2"></i>
                          <span > Islay Hills </span>
                          </span>
                    </div>
                </div> -->
            </b-container>
        </b-modal>
        <b-modal id="modal-1" >
            <template v-slot:modal-title>
                  <div>
                   <h5>New Post  <span  class="ml-2 ex2 fa fa-book"></span> <span class="ex2 familia" style="cursor:pointer;text-decoration-line: underline;" v-b-modal.modal-4> POST LIBRARY</span> </h5>
                  </div>
            </template>
            <b-container>
                <div class="row">
                    <div class="col-md-12 pr-0 pl-0">
                        <span class="fa fa-share-alt"></span> <span class="familia" style="color:#2C3943">Select Your Social Accounts</span>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                        <span class="pl-2"> <input type="checkbox">  
                        <i style="color:#3b5998" class="fab fa-facebook ml-2"></i>
                          <span > Islay Hills </span>
                          </span>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                        <span class="pl-2"> <input type="checkbox"> 
                          <i style="color:#3b5998" class="fab fa-facebook ml-2"></i>
                          <span > Islay Hills </span>
                          </span>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-12 pr-0 pl-0" style="border: 1px solid #CBCACA;" >
                        <span class="pl-2"> <input type="checkbox">  
                        <i style="color:#00aced" class="fab fa-twitter ml-2"></i>
                          <span > Islay Hills </span>
                        Islay Hills</span>
                    </div>
                </div>
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
                <select class="ml-3 float-right col-md-4" style="padding:0.3rem;background: linear-gradient(258.19deg, #089D9B 0%, #0BC1BB 100%);color:white;">
                    <option style="background: #2C3943;color:white;" val="POST NOW">POST NOW</option>
                    <option style="background: #2C3943;color:white;" val="SAVE AS DRAFT">SAVE AS DRAFT</option>
                </select>
                    <a-date-picker class="float-right col-md-6"
                    placeholder="SCHEDULE FOR LATER"
                    format="YYYY-MM-DD HH:mm"
                    :showTime="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
                    />
                </div>
            </template>
        </b-modal>
        <div class="row">
            <div  class="col-md-2 mt-3">
                <b-form-select style="background:#EAF1F4" v-model="selected" :options="options"></b-form-select>
            </div>
            <div  class="col-md-2 mt-3">
              <select class="form-control oks"  style="background:#EAF1F4">
                <option value="volvo" selected>ACCOUNTS</option>
                <option class="fa"> &#xf099 Islay Hills  </option>
              </select>
                <!-- <b-form-select style="background:#EAF1F4" v-model="selected2" :options="options2"></b-form-select> -->
            </div>
            <div  class="col-md-2 mt-4">
                <b-form-checkbox >Show Holidays</b-form-checkbox>
            </div>
            <div  class="col-md-6 mt-3">
                <button v-b-modal.modal-1 style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);" class="btn btn-fill pull-right"><span style="color:white;" class="fa fa-plus"></span> NEW POST</button>
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-12">
                <a-calendar>
                    <ul class="events" slot="dateCellRender" slot-scope="value">
                    <li v-for="item in getListData(value)" :key="item.content">
                        <!-- <a-badge :status="item.type" :text="item.content" /> -->
                        <!-- <span class="fa fa-twitter"></span> -->
                        <!-- <i class="fab fa-twitter" style="color:#00B6F1;" aria-hidden="true"></i> -->
                        <!-- <div class="row">
                          <div class="col-md-10"> -->
                        <i class="fab fa-twitter-square" style="color:#00B6F1;" ></i><span> Islay Hills</span> 
                        <a-dropdown>
                        <a class="ant-dropdown-link" href="#">  
                        <a-icon type="ellipsis" style="transform: rotate(90deg);"/> </a>
                        <a-menu slot="overlay">
                          <a-menu-item>
                            <a href="javascript:;" v-b-modal.modal-1>Edit</a>
                          </a-menu-item>
                          <a-menu-item>
                            <a href="javascript:;">Delete</a>
                          </a-menu-item>
                        </a-menu>
                      </a-dropdown>
                      
                        
                        <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-heart"></i>
                             <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                              </ul>
                        </button> -->
                          <!-- </div> 

                        </div> -->
                        <!-- <b-dropdown id="dropdown-dropright" dropright text="D" variant="primary" class="m-2">
                          <b-dropdown-item href="#">Action</b-dropdown-item>
                        </b-dropdown> -->
                    </li>
                    </ul>
                    <template slot="monthCellRender" slot-scope="value">
                    <div v-if="getMonthData(value)" class="notes-month">
                        <section>{{getMonthData(value)}}</section>
                        <span>Backlog number</span>
                    </div>
                    </template>
                </a-calendar>
            
            </div>
        </div>
    </div>
</div>

</template>

<script>
import moment from 'moment'
export default {
     methods: {
      onFilePicked(event) {
        let reader = new FileReader();
        reader.onload = (e) => {
        this.link=e.target.result
        }
        reader.readAsDataURL(event.target.files[0]);
      },
      moment,
      getListData(value) {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
            ];
            break;
          case 10:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
              { type: 'error', content: 'This is error event.' },
            ];
            break;
          case 15:
            listData = [
              { type: 'warning', content: 'This is warning event' },
              { type: 'success', content: 'This is very long usual event。。....' },
              { type: 'error', content: 'This is error event 1.' },
              { type: 'error', content: 'This is error event 2.' },
              { type: 'error', content: 'This is error event 3.' },
              { type: 'error', content: 'This is error event 4.' },
            ];
            break;
          default:
        }
        return listData || [];
      },

      getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
      },
    },
     data() {
      return {
        categories:[
            {name:'Recent',
            link:'recent.png'
            },
            {name:'Popular',
            link:'popular.png'},
            {name:'Appointment',
            link:'appointment.png'
            },
            {name:'Community',
            link:'community.png'
            },
            {name:'Contest',
            link:'context.png'
            },
            {name:'About Us',
            link:'about.png'
            },
            {name:'Customers',
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
            {name:'Health',
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
            {name:'Quotes',
            link:'quotes.png'
            },
            {name:'Reviews',
            link:'reviews.png'
            }
        ],  
        link:'https://s3-alpha-sig.figma.com/img/35dd/3fbc/03d02e4aaff5cc323a47bd8ff22ea930?Expires=1574035200&Signature=HclHGHUTbBEn~X75sc-A4-JIz7AcOf8f-uzy~4T4rCbelAJbhMiykFatms1B4EvkSm8Glyu-K3KKZ9vtM5PSOr38h25N5xu~l9m5vdu4RrZNf5nAn1X6Y03Ffmk4OyWY27mecGMykBiPMwakIVB~DmkII1Nd87ZV1Q-NHe7M5rEiAn-HL~sRXoy8YwRpi1nY8Deh9yFPnNbjg2gFu502nZ12ibi-PHKdzUqv~HTecBdJiNvfoXCsKW7DcYhfIHWgOG8PUAWaf8KQh~Kros1AZoAhjMyltpFwQDIeJ57a7XfpnxdHp7Zhdohk4B4BYEaoH1V2frlpx3nQbAadF9n8tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', 
        selected:'MONTHS',
        selected2:'ACCOUNTS',

        options: [
          { value: 'MONTHS', text: 'MONTHS' },
        ],
        options2: [
          { value: 'ACCOUNTS', text: 'ACCOUNTS' }
        ]
      }
}
}
</script>
<style>
#modal-2___BV_modal_content_{
background: #0BC1BB;
box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.3);
border-radius: 5px;    
}
#dropdown-1__BV_toggle_{
background:#EAF1F4 !important
/* bor */
}
 .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .notes-month section {
    font-size: 28px;
  }
  .oks{
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
  .dropdown-toggle::after {
    display: none !important;
}

.modal-dialog {
    margin: -20vh auto 0px auto
}

span.ex2 {display: inline;}

</style>