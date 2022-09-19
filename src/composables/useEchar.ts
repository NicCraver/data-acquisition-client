import * as echarts from 'echarts'
// 这个方法，接收一个option和dom的id
// 目的：用的时候只需要传option和dom的id就能绘制出一个图表，很适合我们小白刚开始学函数的用法
export function useEchar(option: object, name: string) {
  // const myChart = ref<HTMLElement>() // 也可以用const myChart = ref<any>();
  const myCharts = ref<any>()
  //   绘制什么取决于option
  // 用这个原因是防止出现  Initialize failed: invalid dom.报错
  nextTick(() => {
    const chartDom = document.getElementById(name)!
    myCharts.value = echarts.init(chartDom)
    myCharts.value.setOption(option)
  })
}
