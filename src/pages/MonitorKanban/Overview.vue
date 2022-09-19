<script lang='ts'>
export default {
  data() {
    return {
      queryParams: {},
      collectOptions: {
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
          data: ['接口A数据量', '接口B数据量', '医院数据量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
      bindwidthActive: 'bar',
      bandwidthBarOptions: {
        grid: {
          top: '4%',
          left: '3%',
          right: '4%',
          bottom: '3%',
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
            type: 'bar',
            barGap: 0,
            barWidth: 10,
            itemStyle: {
              color: '#2478F2'
            }
          },
          {
            name: '上传带宽',
            data: [140, 80, 100, 163, 351, 400],
            type: 'bar',
            barWidth: 10,
            itemStyle: {
              color: '#84B7F9'
            }
          },
        ]
      },
      bandwidthLineOptions: {
        grid: {
          top: '4%',
          left: '3%',
          right: '4%',
          bottom: '3%',
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
      pushActive: 'line',
      pushLineOptions: {
        legend: {
          data: ['推送数据总量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
            name: '推送数据总量',
            data: [30000, 15000, 20000, 15000, 45000, 20000],
            type: 'line',
            smooth: true,
            areaStyle: {},
            itemStyle: {
              color: '#4685B3'
            }
          },
        ]
      },
      pushBarOptions: {
        legend: {
          data: ['推送接口A', '推送接口B', '推送接口C', '推送接口D']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
            name: '推送接口A',
            data: [5000, 15000, 20000, 15000, 25000, 5000],
            type: 'bar',
            barGap: 0,
            barWidth: 10,
          },
          {
            name: '推送接口B',
            data: [5000, 12000, 18000, 20000, 15000, 4000],
            type: 'bar',
            barGap: 0,
            barWidth: 10,
          },
          {
            name: '推送接口C',
            data: [5000, 14000, 16000, 12000, 20000, 8000],
            type: 'bar',
            barGap: 0,
            barWidth: 10,
          },
          {
            name: '推送接口D',
            data: [5000, 10000, 12000, 16000, 18000, 1000],
            type: 'bar',
            barGap: 0,
            barWidth: 10,
          },
        ]
      },
      CPUOptions: {
        title: {
          text: 'CPU\n30%',
          left: 'center',
          top: 'middle'
        },
        grid: {
          top: '5%',
          left: '0',
          right: '0',
          bottom: '0',
        },
        series: [
          {
            name: 'CPU',
            type: 'pie',
            radius: ['80%', '100%'],
            data: [0.3, 0.7],
            itemStyle: {
              color: params => {
                const { dataIndex } = params
                if (dataIndex === 0) {
                  return '#84B7F9'
                } else {
                  return '#BBBBBB'
                }
              }
            },
            labelLine: {
              show: false
            },
          }
        ]
      },
      RAMOptions: {
        title: {
          text: 'RAM\n30%',
          left: 'center',
          top: 'middle'
        },
        series: [
          {
            name: 'RAM',
            type: 'pie',
            radius: ['80%', '100%'],
            data: [0.4, 0.6],
            itemStyle: {
              color: params => {
                const { dataIndex } = params
                if (dataIndex === 0) {
                  return '#68BBC4'
                } else {
                  return '#BBBBBB'
                }
              }
            },
            labelLine: {
              show: false
            },
          }
        ]
      },
      IOOptions: {
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          data: ['硬盘读取', '硬盘写入']
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
            type: 'line',
            name: '硬盘读取', 
            data: [0, 20, 40, 60, 10, 20]
          },
          {
            type: 'line',
            name: '硬盘写入', 
            data: [0, 10, 50, 100, 80, 40]
          }
        ]
      }
    }
  },
  mounted() {
    useEchar(this.collectOptions, 'collect')
    useEchar(this.bandwidthBarOptions, 'bandwidth-charts')
    useEchar(this.pushLineOptions, 'push-charts')
    useEchar(this.CPUOptions, 'CPU-charts')
    useEchar(this.RAMOptions, 'RAM-charts')
    useEchar(this.IOOptions, 'io-charts')
  },
  methods: {
    changeBandwidthOptions(type) {
      this.bindwidthActive = type;
      if (type === 'bar') {
        useEchar(this.bandwidthBarOptions, 'bandwidth-charts')
      } else if (type === 'line') {
        useEchar(this.bandwidthLineOptions, 'bandwidth-charts')
      }
    },
    changePushOptions(type) {
      this.pushActive = type;
      if (type === 'bar') {
        useEchar(this.pushBarOptions, 'push-charts')
      } else if (type === 'line') {
        useEchar(this.pushLineOptions, 'push-charts')
      }
    },
    pageToIntelligenceAnalysis() {
      this.$router.push({
        path: '/MonitorKanban/IntelligenceAnalysis'
      })
    }
  }
}
</script>

<template>
  <div class="overview">
    <div class="title">
      <span class="text">概览</span>
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
    </div>
    <div class="body">
      <el-row :gutter="15">
        <el-col :span="16">
          <div class="charts-container">
            <div class="charts-title">
              <div class="text">采集监控</div>
              <div class="time-interval">
                <img src="./images/heart.png" alt="">
                <span class="time-number">5</span>
                分钟
              </div>
            </div>
            <div class="charts" id="collect"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="charts-container">
            <div class="charts-title">
              <div class="text">网络性能</div>
              <div class="hos-name">慈禧市中医院-100.10.1.1</div>
            </div>
            <div class="bandwidth">
              <div class="band-item">
                <div class="icon download">
                  <img src="./images/download.png" alt="">
                </div>
                <div class="desc">
                  <div class="desc-title">实时下载带宽</div>
                  <div class="speed">
                    <span class="value">300</span>
                    KB
                  </div>
                </div>
              </div>
              <div class="band-item">
                <div class="icon upload">
                  <img src="./images/upload.png" alt="">
                </div>
                <div class="desc">
                  <div class="desc-title">实时上传带宽</div>
                  <div class="speed">
                    <span class="value">250</span>
                    KB
                  </div>
                </div>
              </div>
            </div>
            <div class="band-title">
              <span class="text">网络带宽</span>
              <div class="charts-legend">
                <span class="legend-item download">下载带宽</span>
                <span class="legend-item upload">上传带宽</span>
              </div>
              <div class="charts-tab">
                <div :class="['charts-tab-item', { active: bindwidthActive === 'bar' }]" @click="changeBandwidthOptions('bar')">
                  <img src="./images/chart-bar.png" alt="">
                </div>
                <div :class="['charts-tab-item', { active: bindwidthActive === 'line' }]" @click="changeBandwidthOptions('line')">
                  <img src="./images/chart-line.png" alt="">
                </div>
              </div>
            </div>
            <div class="charts" id="bandwidth-charts"></div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="charts-container">
            <div class="charts-title">
              <div class="text">推送监控</div>
              <div class="push-tab">
                <div :class="['push-item', { active: pushActive === 'line'}]" @click="changePushOptions('line')">数据总量</div>
                <div :class="['push-item', { active: pushActive === 'bar'}]" @click="changePushOptions('bar')">接口数据</div>
              </div>
            </div>
            <div class="charts" id="push-charts"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="charts-container separate">
            <div class="separate-title">
              <div class="text">
                性能监控
                <img src="./images/robot.png" alt="" @click="pageToIntelligenceAnalysis">
              </div>
              <div class="hos-name">慈禧市中医院-100.10.1.1</div>
            </div>
            <div class="bg"></div>
            <div class="separate-charts">
              <div class="barcharts-container">
                <div id="CPU-charts"></div>
                <div id="RAM-charts"></div>
              </div>
              <div id="io-charts"></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.el-button {
  padding: 8px 15px;
}

</style>

<style lang='scss' scoped>
.overview {
  .title {
    background-color: #fff;
    padding: 0 15px;
    line-height: 50px;
    .text {
      font-weight: bold;
      font-size: 18px;
    }
    .query {
      float: right;
    }
  }
  .body {
    padding: 10px;
    .charts-container {
      background-color: #fff;
      border-radius: 8px;
      margin-bottom: 15px;
      &.separate {
        background-color: rgb(239, 239, 239)
      }
      .charts-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 60px;
        .text {
          font-size: 18px;
          font-weight: bold;
        }
        .time-interval {
          width: 100px;
          border: 1px solid #F5F5F5;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 12px;
          img {
            width: 16px;
          }
          .time-number {
            padding: 0 8px;
            background-color: #F2F2F2;
            font-size: 14px;
            font-weight: bold;
            color: #4469BD;
          }
        }
        .hos-name {
          color: #446ABD;
          font-size: 12px;
        }
      }
      #collect {
        height: 238px;
      }
      #bandwidth-charts {
        height: 140px
      }
      #push-charts {
        height: 370px;
      }
      .bandwidth {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .band-item {
          margin: 0 auto;
          width: 125px;
          display: flex;
          align-items: center;
          .icon {
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
            border-radius: 50%;
            margin-right: 12px;
            &.download {
              background-color: #CBF4F8;
            }
            &.upload {
              background-color: #E2ECFF;
            }
            img {
              width: 20px;
              display: inline-block;
            }
          }
          .desc {
            .desc-title {
              font-size: 12px;
            }
            .speed {
              .value {
                font-size: 22px;
              }
            }
          }
        }
      }
      .band-title {
        padding: 10px 6px; 
        display: flex;
        justify-content: space-between;
        .text {
          font-weight: bold;
        }
        .legend-item {
          padding-left: 10px;
          &:before {
            display: inline-block;
            content: ' ';
            width: 12px;
            height: 9px;
            border-radius: 3px;
            margin-right: 5px;
          }
          &.download:before {
            background-color: #2478F2;
          }
          &.upload:before {
            background-color: #84B7F9;
          }
        }
        .charts-tab {
          width: 72px;
          border: 1px solid #E1E1E1;
          border-radius: 2px;
          display: flex;
          .charts-tab-item {
            height: 22px;
            line-height: 18px;
            flex: 1;
            text-align: center;
            cursor: pointer;
            &.active {
              background-color: #5087EC;
            }
            img {
              display: inline-block;
              width: 14px;
            }
          }
        }
      }
      .push-tab {
        display: flex;
        align-items: center;
        border-radius: 2px;
        border: 1px solid #E1E1E1;
        .push-item {
          cursor: pointer;
          width: 80px;
          height: 28px;
          line-height: 28px;
          text-align: center;
          color: #919191;
          &.active {
            color: #fff;
            background-color: #5087EC
          }
        }
      }
      .separate-title {
        border-radius: 8px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        height: 45px;
        align-items: center;
        padding: 0 10px;
        margin-bottom: 15px;
        .text {
          font-size: 18px;
          font-weight: bold;
          img {
            width: 18px;
            display: inline-block;
            cursor: pointer;
          }
        }
        .hos-name {
          color: #446ABD;
          font-size: 12px;
        }
      }
      .separate-charts {
        .barcharts-container {
          background-color: #fff;
          display: flex;
          justify-content: space-around;
          padding-bottom: 15px;
          padding-top: 30px;
          #CPU-charts {
            width: 140px;
            height: 120px;
          }
          #RAM-charts {
            width: 140px;
            height: 120px;
          }
        }
        #io-charts {
          background-color: #fff;
          height: 205px;
          border-radius: 0 0 8px 8px;
        }
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
