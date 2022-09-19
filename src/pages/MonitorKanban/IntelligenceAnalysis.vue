<script lang='ts'>
export default {
  data() {
    return {
      queryParams: {},
      pushOptions: {
        legend: {
          data: ['推送A', '推送B'],
          bottom: '0'
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['11:00', '11:05', '11:10', '11:15', '11:20', '11:25'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '推送A',
            data: [5000, 15000, 20000, 15000, 25000, 5000],
            type: 'line',
          },
          {
            name: '推送B',
            data: [5000, 12000, 18000, 20000, 15000, 4000],
            type: 'line',
            barGap: 0,
          },
        ]
      },
      interfaceOptions: {
         tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['接口A数据量', '接口B数据量', '医院数据量'],
          bottom: '0'
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['11:00', '11:05', '11:10', '11:15', '11:20', '11:25'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '接口A数据量',
            data: [5000, 12000, 20000, 17800, 45000, 23000],
            type: 'line',
            smooth: true,
            areaStyle: {},
          },
          {
            name: '接口B数据量',
            data: [42960, 40127, 39261, 23113, 31798, 21373],
            type: 'line',
            smooth: true,
            areaStyle: {},
          },
          {
            name: '医院数据量',
            data: [34155, 39617, 39861, 32222, 21691, 43188],
            type: 'line',
            smooth: true,
            areaStyle: {},
          },
        ],
      },
      bandwidthOptions: {
        legend: {
          data: ['下载带宽', '上传带宽'],
          bottom: '0'
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['11:00', '11:05', '11:10', '11:15', '11:20', '11:25'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '下载带宽',
            data: [100, 50, 75, 63, 251, 300],
            type: 'line',
            lineStyle: {
              color: '#2478F2'
            },
            itemStyle: {
              color: '#2478F2'
            }
          },
          {
            name: '上传带宽',
            data: [140, 80, 100, 163, 351, 400],
            type: 'line',
            lineStyle: {
              color: '#84B7F9'
            },
            itemStyle: {
              color: '#84B7F9'
            }
          },
        ]
      },
      performanceOptions: {
        legend: {
          data: ['CPU', '内存占用', '硬盘读取', '硬盘写入'],
          bottom: '0'
        },
        grid: {
          top: '3%',
          left: '3%',
          right: '4%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['11:00', '11:05', '11:10', '11:15', '11:20', '11:25'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'CPU',
            type: 'line',
            data: [0, 10, 20, 30, 40, 50]
          },
          {
            name: '内存占用',
            type: 'line',
            data: [0, 20, 10, 50, 20, 12]
          },
          {
            name: '硬盘读取',
            type: 'line',
            data: [0, 15, 5, 20, 30, 18]
          },
          {
            name: '内存占用',
            type: 'line',
            data: [0, 18, 8, 32, 44, 55]
          }
        ]
      }
    }
  },
  mounted() {
    useEchar(this.pushOptions, 'push-charts')
    useEchar(this.interfaceOptions, 'interface-charts')
    useEchar(this.bandwidthOptions, 'bandwidth-charts')
    useEchar(this.performanceOptions, 'performance-charts')
  },
}
</script>

<template>
  <div class="intelligence-analysis">
    <div class="title">智能分析</div>
    <div class="sub">
      <div class="tabs">
        <div class="tab-item">联合分析</div>
      </div>
      <el-button type="primary" plain>返回</el-button>
    </div>
    <div class="body">
      <div class="query">
        <el-select v-model="queryParams.hosId" placeholder="全部医院" >
          <el-option label="全部医院" value="" />
          <el-option label="医院1" value="医院1" />
        </el-select>
        <el-select v-model="queryParams.dateType" placeholder="日" style="width: 70px; margin: 0 10px;">
          <el-option label="日" value="day" />
          <el-option label="周" value="week" />
        </el-select>
        <el-date-picker
          value-format="yyyy-MM-dd"
          v-model="queryParams.date"
          style="width: 130px; margin-right: 10px"
        />
        <el-button type="primary">搜索</el-button>
      </div>
      <div id="push-charts" class="charts"></div>
      <div id="interface-charts" class="charts"></div>
      <div id="bandwidth-charts" class="charts"></div>
      <div id="performance-charts" class="charts"></div>
    </div>
  </div>
</template>

<style lang="scss">
.el-button {
  padding: 8px 15px;
}

</style>

<style lang='scss' scoped>
.intelligence-analysis {
  .title {
    background-color: #fff;
    padding: 0 15px;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
  }
  .sub {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 15px 5px 15px;
    .tabs {
      .tab-item {
        font-size: 16px;
        color: #446ABD;
        border-bottom: 2px solid #446ABD;
      }
    }
  }
  .body {
    padding: 10px;
    .query {
      text-align: right;
      background-color: #fff;
    }
    .charts {
      height: 240px;
      background-color: #fff;
      padding: 20px 0;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
