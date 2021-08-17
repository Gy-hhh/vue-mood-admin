<template>
  <el-dialog title="新增待办事项" v-model="modelShow.show" top="25vh">
    <el-form class="dialog-form" label-width="70px">
      <el-form-item label="标题">
        <el-input v-model="params.title"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import {defineComponent, toRefs} from 'vue';

  export default defineComponent({
    props: {
      todoListAdd: {
        type: Object,
        default: () => ({})
      },
      modelShow: {
        type: Object,
        default: () => ({})
      },
    },
    emits: ['close', 'save'],
    setup(props, {emit}) {
      const { todoListAdd: params,modelShow } = toRefs(props);

      // 取消
      function close(): void {
        emit('close');
      }

      // 保存
      function save(): void {
        let date = new Date()
        let str =
          date.getFullYear() +
          '-' +
          (date.getMonth() + 1) +
          '-' +
          date.getDate() +
          ' ' +
          date.getHours() +
          ':' +
          date.getMinutes() +
          ':' +
          date.getSeconds()
        params.value.createTime = str
        emit('save', params.value);
      }

      return {
        params,
        close,
        save
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
