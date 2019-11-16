<template>
<div class="content">
    <div class="container-fluid" style="background-color:white;">
        <div class="row">
            <!-- <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Upcoming Posts</p>
            </div> -->
            <!-- <div class="col-md-12 mt-3"> -->
                <!-- <b-form-select style="background:#EAF1F4" class="col-md-3  mr-3" v-model="selected" :options="options"></b-form-select>
                <b-form-select style="background:#EAF1F4" class="col-md-3  mr-3" v-model="selected2" :options="options2"></b-form-select> -->
                <!-- <b-form-checkbox class="col-md-3">Show Holidays</b-form-checkbox> -->
                                <!-- <button v-b-modal.modal-1 style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);" class="btn btn-fill pull-right"><span style="color:white;" class="fa fa-plus"></span> NEW POST</button> -->

                <!-- <b-form-select style="background:#EAF1F4" class="col-md-3 pull-right mr-3" v-model="selected" :options="options"></b-form-select>
                <b-form-select style="background:#EAF1F4" class="col-md-3 pull-right mr-3" v-model="selected2" :options="options2"></b-form-select> -->

            <!-- </div> -->
            <div  class="col-md-2 mt-3">
                <b-form-select style="background:#EAF1F4" v-model="selected" :options="options"></b-form-select>
            </div>
            <div  class="col-md-2 mt-3">
              <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
              <b-dropdown-item> <span class="fa fa-twitter"></span></b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
            </b-dropdown> -->
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
                        <a-badge :status="item.type" :text="item.content" />
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
export default {
     methods: {
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
</style>