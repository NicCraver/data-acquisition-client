<script lang='ts'>
import { getStatisticData } from '~/api/modules/firmwareUpgrade'
export default {
  data() {
    return {
      queryParams: {},
    }
  },
  mounted() {
    this.getStatisticData()
  },
  methods: {
    async getStatisticData() {
      try {
        const res = await getStatisticData()
        console.log('res', res)
      }
      catch (error) {
        console.error('error', error)
      }
    },
  },
}
</script>

<template>
  <div class="version-monitor">
    <div class="page-title">
      固件监控
    </div>
    <div class="page-content">
      <el-row class="header" :gutter="10">
        <el-col :span="16">
          <el-row class="statistic">
            <el-col :span="8" class="statistic-item">
              <div class="title">
                客户端总数
              </div>
              <div class="content">
                <div class="icon total">
                  <img src="./images/total.png" alt="">
                </div>
                <div class="count">
                  <span class="number">7</span> 台
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="statistic-item">
              <div class="title">
                在线客户端
              </div>
              <div class="content">
                <div class="icon online">
                  <img src="./images/online.png" alt="">
                </div>
                <div class="count">
                  <span class="number">6</span> 台
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="statistic-item">
              <div class="title">
                离线客户端
              </div>
              <div class="content">
                <div class="icon offline">
                  <img src="./images/offline.png" alt="">
                </div>
                <div class="count">
                  <span class="number">1</span> 台
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <div class="current">
            <div class="title">
              最新生效版本
            </div>
            <div class="content">
              <div class="desc">
                <div class="version">
                  版本号:
                  <div>20220907112355</div>
                </div>
                <div>发布时间: 发布时间：2022-09-01</div>
                <div>版本说明: <i class="el-icon el-icon-question" /></div>
              </div>
              <div class="spe-line" />
              <div class="load-update">
                <div class="load-title">
                  待升级客户端
                </div>
                <div class="load-content">
                  <div class="icon">
                    <img src="./images/total.png" alt="">
                  </div>
                  <div class="count">
                    <span class="number">5</span> 台
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div class="body">
        <div class="query-container">
          <el-input v-model="queryParams.keyword" placeholder="医院名称/IP地址/版本" />
          <el-select v-model="queryParams.status" placeholder="医院名称/IP地址/版本">
            <el-option label="在线" value="1" />
            <el-option label="离线" value="0" />
          </el-select>
          <el-select v-model="queryParams.version" placeholder="版本">
            <el-option label="V1" value="v1" />
            <el-option label="V2" value="v2" />
          </el-select>
          <div class="actions">
            <el-button type="primary">
              搜索
            </el-button>
            <el-button>重置</el-button>
          </div>
        </div>
        <div class="device-list">
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon online">
              <img src="./images/online.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：在线
            </div>
            <div class="update-btn">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon offline">
              <img src="./images/offline.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：离线
            </div>
            <div class="update-btn disabled">
              版本升级
            </div>
          </div>
          <div class="device-item">
            <div class="icon offline">
              <img src="./images/offline.png" alt="">
            </div>
            <div class="hos-name">
              慈溪市中医医院
            </div>
            <div class="ip">
              地址：100.10.10.1
            </div>
            <div class="version">
              版本：20220901112355 <i class="el-icon-warning" />
            </div>
            <div class="update-time">
              升级时间：2022-01-04
            </div>
            <div class="status">
              状态：离线
            </div>
            <div class="update-btn disabled">
              版本升级
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.el-input {
  display: inline-block;
  width: 200px;
  margin-right: 15px;
}
.el-button {
  padding: 8px 15px;
}
</style>

<style lang='scss' scoped>
.version-monitor {
  .page-title {
    font-size: 18px;
    font-weight: bold;
    line-height: 50px;
    background: #fff;
    padding-left: 16px
  }
  .page-content {
    padding: 10px;
    .header {
      .statistic {
        background: #fff;
        border-radius: 4px;
        text-align: center;
        height: 150px;
        .statistic-item {
          padding-top: 25px;
          .title {
            font-weight: bold;
            font-size: 16px;
            position: relative;
            &:after {
              position: absolute;
              bottom: -7px;
              content: ' ';
              display: inline-block;
              width: 150px;
              height: 1px;
              background-color: #E9E9E9;
              left: -40px;
              margin-left: 50%;
            }
          }
          .content {
            margin-top: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon {
              width: 45px;
              height: 45px;
              border-radius: 50%;
              text-align: center;
              line-height: 45px;
              margin-right: 20px;
              margin-left: 20px;
              &.total {
                background-color: #E2ECFF;
              }
              &.online {
                background-color: #D7F0DB
              }
              &.offline {
                background-color: #BBBBBB
              }
              img {
                display: inline-block;
                width: 26px;
              }
            }
            .count {
              font-size: 18px;
              .number {
                font-size: 28px;
                font-weight: bold;
              }
            }
          }
        }
      }
      .current {
        background-color: #446ABD;
        border-radius: 8px;
        height: 150px;
        .title {
          background-color: rgba(93, 125, 192, .7);
          line-height: 24px;
          color: #ABBCE0;
          padding-left: 16px;
          border-radius: 8px;
        }
        .content {
          display: flex;
          align-items: center;
          padding: 8px;
          .desc {
            color: #ABBCE0;
            .version {
              font-size: 16px;
              font-weight: bold;
              color: #fff
            }
          }
          .spe-line {
            height: 40px;
            width: 1px;
            background-color: #ABBCE0;
            margin: 0 35px;
          }
          .load-update {
            .load-title {
              font-weight: bold;
              font-size: 16px;
              color: #fff;
            }
            .load-content {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 10px;
              .icon {
                width: 45px;
                height: 45px;
                text-align: center;
                line-height: 45px;
                background-color: #EAF4FE;
                border-radius: 50%;
                margin-right: 25px;
                img {
                  display: inline-block;
                  width: 26px;
                }
              }
              .count {
                color: #fff;
                font-weight: bold;
                font-size: 18px;
                .number {
                  font-size: 28px;
                }
              }
            }
          }
        }
      }
    }
    .body {
      margin-top: 20px;
      .query-container {
        .actions {
          float: right;
        }
      }
      .device-list {
        .device-item {
          display: inline-block;
          margin-right: 12px;
          color: #303313;
          width: 232px;
          height: 185px;
          border-radius: 16px;
          background-color: #fff;
          padding: 27px 10px 10px 16px;
          margin-top: 51px;
          position: relative;
          .icon {
            width: 45px;
            height: 45px;
            text-align: center;
            line-height: 45px;
            border-radius: 50%;
            position: absolute;
            top: -22px;
            &.online {
              background-color: #D7F0DB
            }
            &.offline {
              background-color: #BBBBBB
            }
            img {
              display: inline-block;
              width: 26px;
            }
          }
          .hos-name {
            font-size: 16px;
            font-weight: bold;
          }
          .update-btn {
            float: right;
            width: 65px;
            line-height: 28px;
            text-align: center;
            color: #44BB56;
            border: 1px solid #E9F4EC;
            border-radius: 6px;
            font-size: 12px;
            cursor: pointer;
            &.disabled {
              color: #919191;
              border: 1px solid #BBBBBB;
              cursor: not-allowed
            }
          }
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
