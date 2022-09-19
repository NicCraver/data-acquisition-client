<script lang='ts'>
import monitorActive from './images/monitor-active.png'
import operation from './images/operation.png'
import update from './images/update.png'
import cloudSync from './images/cloud-sync.png'
import register from './images/register.png'
export default {
  data() {
    return {
      singleList: [
        {
          type: '监控看板',
          href: '',
          icon: monitorActive,
          activeIcon: monitorActive,
          desc: '对采集盒子的运行状况进行监控'
        },
        {
          type: '系统运维',
          href: '',
          icon: operation,
          activeIcon: monitorActive,
          desc: '对盒子的系统运行状态进行监控管理'
        },
        {
          type: '固件升级',
          href: '',
          icon: update,
          activeIcon: monitorActive,
          desc: '管理固件版本并对盒子的固件进行升级'
        },
        {
          type: '同步配置',
          href: '',
          icon: cloudSync,
          activeIcon: monitorActive,
          desc: '管理配置并对盒子进行同步'
        },
        {
          type: '注册管理',
          href: '',
          icon: register,
          activeIcon: monitorActive,
          desc: '管理盒子的注册申请和合法性'
        }
      ],
      activeSingle: '监控看板'
    }
  }
}
</script>

<template>
  <div class="single-login">
    <div v-for="item in singleList" :key="item.type" :class="['single-item', { active: activeSingle === item.type }]">
      <img :src="item.icon" alt="">
      <span class="single-type">{{ item.type }}</span>
      <div class="desc">{{ item.desc }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single-login {
  display: flex;
  .single-item {
    width: 250px;
    height: 300px;
    box-shadow: 1px 1px 6px 0px rgba(68, 106, 189, 50);
    border-radius: 32px;
    color: #303133;
    padding: 60px 50px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 30px;
    background-color: #fff;
    line-height: 1.3;
    font-size: 14px;
    cursor: pointer;
    img {
      display: inline-block;
      width: 100px;
    }
    &.active {
      box-shadow: none;
      background-color: #446ABD;
      color: #fff;
      background-color: #446ABD;
    }
    .single-type {
      display: inline-block;
      font-size: 18px;
      margin: 20px 0;
      font-weight: bold;
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
