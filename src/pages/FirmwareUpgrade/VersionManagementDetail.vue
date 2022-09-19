<script lang='ts'>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <div class="version-manage-detail">
    <div class="title">新增</div>
    <div class="body">
      <div class="step">
        <div class="step-title">
          <span class="seq">1</span>
          <span class="text">版本信息</span>
        </div>
        <div class="step-content">
          <div class="warning">
            <i class="el-icon-warning-outline"></i>
            基本流程：上传版本文件(全部上传)—定义版本号(不可重复)
          </div>
          <el-form class="step-form" label-width="130px">
            <el-form-item label="上传版本文件" required>
              <div class="upload-btn">
                <el-button>选择文件</el-button>
                支持文件格式：tar
              </div>
              <el-table :data="fileList" border>
                <el-table-column label="文件名" prop="filename" />
                <el-table-column label="大小" prop="size" />
                <el-table-column label="状态" prop="status" />
                <el-table-column label="操作">
                  <template slot-scope="{ row }">
                    <el-button type="text">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="actions">
                <el-button>取消</el-button>
                <el-button type="primary">开始上传</el-button>
              </div>
            </el-form-item>
            <el-form-item label="版本号">
              <el-input placeholder="版本号由系统自动生成" disabled />
            </el-form-item>
            <el-form-item label="版本说明">
              <el-input placeholder="版本说明" :rows="3" type="textarea" />
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="step">
        <div class="step-title">
          <span class="seq">2</span>
          <span class="text">发布配置</span>
        </div>
        <div class="step-content">
          <el-form class="step-form" label-width="120px" style="margin-top: 10px;">
            <el-form-item label="版本发布模式">
              <el-radio-group>
                <el-radio label="1">立即生效</el-radio>
                <el-radio label="2">定期生效</el-radio>
              </el-radio-group>
              <div class="tips">
                立即生效，将在保存发布成功后立即生效。如选择定期生效需配置生效时间。
              </div>
            </el-form-item>
            <el-form-item label="生效时间">
              <el-date-picker
                type="datetime"
                placeholder="输入年月日时分秒"
                value-format="yyyy-MM-dd HH:mm:ss"
              />
              <div class="tips">
                版本将在生效时间生效并覆盖原有生效版本。
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="fixed-actions">
        <span class="update-time">上次更新时间：2022-04-06   12：09：01</span>
        <el-button type="primary">保存发布</el-button>
        <el-button>返回</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.el-input {
  display: inline-block;
  width: 200px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.el-select {
  margin-bottom: 3px;
  .el-input{
    margin-bottom: 0;
  }
}
.el-button {
  padding: 8px 15px;
}

.el-date-editor {
  width: 320px !important;
}
</style>

<style lang='scss' scoped>
.version-manage-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    background-color: #fff;
    padding-left: 15px;
    line-height: 50px;
    font-weight: bold;
    font-size: 18px;
  }
  .body {
    flex: 1;
    margin: 10px;
    padding: 15px;
    background-color: #fff;
    position: relative;
    .step {
      .step-title {
        display: flex;
        align-items: center;
        .seq {
          display: inline-block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          color: #fff;
          font-weight: bold;
          text-align: center;
          background-color: #446ABD;
          border-radius: 50%;
        }
        .text {
          font-size: 16px;
          font-weight: bold;
          margin-left: 5px;
        }
      }
      .step-content {
        .warning {
          font-size: 12px;
          color: #5A5A5A;
          padding-left: 45px;
          margin: 5px 0;
        }
        .step-form {
          width: 625px;
          .upload-btn {
            margin-bottom: 10px;
          }
          ::v-deep .el-form-item__label {
            color: #000;
            font-weight: bold;
          }
          .actions {
            width: 100%;
            margin-top: 10px;
            text-align: right;
          }
          .tips {
            color: #919191;
            font-weight: bold;
          }
        }
      }
    }
    .fixed-actions {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      background-color: #fff;
      text-align: right;
      box-shadow: 0px -1px 3px 0px rgba(204, 204, 204, 100);
      line-height: 45px;
      padding: 0 15px;
      .update-time {
        color: #919191;
        font-weight: bold;
        float: left;
      }
    }
  }
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
