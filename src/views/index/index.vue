<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel height="480px">
        <el-carousel-item v-for="item in images" :key="item">
          <img :src="item.url" width="980px" height="480px" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { url: require("../img/1046549721.jpg") },
        { url: require("../img/f759d01bdc84bfca8f7bdea03284d905.jpg") },
      ],
    };
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>