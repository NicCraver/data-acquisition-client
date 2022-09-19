<script lang="ts" setup>
const myChart = ref()
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
onMounted(() => {
  myChart.value = useEchar(option, 'main')
})
</script>

<template>
  <div class="container">
    <div id="main" :style="{ width: '300px', height: '300px' }" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 300px;
  position: relative;
}
</style>

<route lang="yaml">
meta:
  layout: home
  </route>
