<template>
    <div class="container" style="background-color:white;">
        <div class="row">
            <div class="col-md-4 mt-3">
                <p  style="font-size:24px;font-weight:100;color:#2C3943">Post Categories > Popular</p>
            </div>
            <div class="col-md-8 mt-3">
                <button style="border:none;background: linear-gradient(263.4deg, #089D9B 0%, #0BC1BB 100%);" class="btn btn-fill pull-right"><span style="color:white;" class="fa fa-plus"></span> NEW POST</button>
                <b-form-select class="col-md-3 pull-right mr-3" v-model="selected" :options="options"></b-form-select>
                <b-form-input class="col-md-3 pull-right mr-3"  placeholder="Enter your name"></b-form-input> 
            </div>
        </div>
        <hr style="border:1px solid #CBCACA">
        <div class="row">
            <div class="col-md-4">
            <b-card
                img-src="https://www.figma.com/file/bdKzziFyk6SIi8R8UzuFJYDs/image/d4a283f68c10f9dcd0484b7b4b4214e25de39413"
                img-alt="Image"
                img-top
                img-height="300"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor. tempor.... 
                </b-card-text>
                <div class="card-footer">

                </div>
                <template v-slot:footer class="p-0">
                    <div class="col-md-3 pl-0 pr-0 text-muted">
                    <span style="display:block;">
                    <span>Image</span>
                    <i class="fa fa-picture-o"></i>
                    </span>

                    </div>
                    <div class="col-md-4 text-muted pl-0 pr-0">
                    <span style="display:block;">
                    <span>Calendar</span>
                    <i class="fa fa-calendar"></i>
                    </span>

                    </div>
                    <div class="col-md-4">
                        <a href="#">SELECT></a>
                    </div>
            </template>
            </b-card>
            </div>
             <div class="col-md-4">
            <b-card
                img-src="https://www.figma.com/file/bdKzziFyk6SIi8R8UzuFJYDs/image/0482f266bf26840df12b4dd0cdc68d59ac5dc3e8"
                img-alt="Image"
                img-top
                img-height="300"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor. tempor.... 
                </b-card-text>
                <div class="card-footer">

                </div>
                <template v-slot:footer class="p-0">
                    <div class="col-md-3 pl-0 pr-0 text-muted">
                    <span style="display:block;">
                    <span>Image</span>
                    <i class="fa fa-picture-o"></i>
                    </span>

                    </div>
                    <div class="col-md-4 text-muted pl-0 pr-0">
                    <span style="display:block;">
                    <span>Calendar</span>
                    <i class="fa fa-calendar"></i>
                    </span>

                    </div>
                    <div class="col-md-4">
                        <a href="#">SELECT></a>
                    </div>
            </template>
            </b-card>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        
        selected:'INDUSTRY',
        options: [
          { value: 'INDUSTRY', text: 'INDUSTRY' },
          { value: 'DOMESTIC', text: 'DOMESTIC' }
        ]
      }
}
}
</script>
<style scoped>
</style>