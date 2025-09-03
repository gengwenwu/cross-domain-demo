<template>
  <view class="content">
    <view v-if="isNetError">跨域错误, 错误信息：{{ message }}</view>
    <view v-else>
      <view>通信成功</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";

import { apiNbaData } from '@/api/apis.js';

let isNetError = ref(false);
let message = ref("");

function getNba() {
  apiNbaData()
    .then((res) => {
      console.log(res);
      message.value = "";
      isNetError.value = false;
    })
    .catch((err) => {
      console.log(err);

      message.value = err.errMsg;
      isNetError.value = true;
    });

  // uni
  //   .request({
  //     url: "h5api/api/match/playerranking/match/NBA/tabId/60",
  //   })
  //   .then((res) => {
  //     console.log(res);

  //     message.value = "";
  //     isNetError.value = false;
  //   })
  //   .catch((err) => {
  //     console.log(err);

  //     message.value = err.errMsg;
  //     isNetError.value = true;
  //   });
}

getNba();
</script>

<style lang="scss" scoped></style>
