<template>
  <el-dialog :title="modalParams.title" v-model="modalParams.show" top="8vh">
    <el-form class="dialog-form" label-width="70px">
      <el-form-item label="ID" v-if="modalParams.type === 'edit'">
        <el-input v-model="params.id" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="params.username"></el-input>
      </el-form-item>
      <el-form-item label="用户类型">
        <el-select v-model="params.userType" placeholder="请选择用户类型">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="params.descText"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import {defineComponent, toRefs} from 'vue';

  export default defineComponent({
    props: {
      modal: {
        type: Object,
        default: () => ({})
      },
      formData: {
        type: Object,
        default: () => ({})
      },
      userInfo: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['close', 'saveEdit'],
    setup(props, {emit}) {
      const {modal: modalParams, formData: params, userInfo} = toRefs(props);
      let options = [];
      if (userInfo.value.userType == 0) {
        options = [
          {
            value: 0,
            label: '超级管理员'
          },
          {
            value: 1,
            label: '普通管理员'
          },
          {
            value: 2,
            label: '普通用户'
          }
        ];
      } else {
        options = [
          {
            value: 1,
            label: '普通管理员'
          },
          {
            value: 2,
            label: '普通用户'
          }
        ];
      }

      // 取消
      function close(): void {
        emit('close');
      }

      // 保存
      function saveEdit(): void {
        emit('saveEdit', params.value);
      }

      return {
        modalParams,
        params,
        options,
        close,
        saveEdit
      };
    }
  });
</script>

<style lang="less" scoped>
  ::v-deep(.el-date-editor--datetime) {
    width: 100%;
  }

  ::v-deep(.el-select) {
    width: 100%;
  }

  .dialog-form {
    padding: 0 10px;
  }
</style>
