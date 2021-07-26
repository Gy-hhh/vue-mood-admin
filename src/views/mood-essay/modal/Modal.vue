<template>
  <el-dialog :title="modalParams.title" v-model="modalParams.show" top="8vh">
    <el-form class="dialog-form" label-width="70px">
      <el-form-item label="ID" v-if="modalParams.type === 'edit'">
        <el-input v-model="params.id" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="params.title"></el-input>
        <!-- 自定义 -->
        <!-- <template #default="scope">
          <el-image
            class="table-td-thumb"
            :src="scope.row.thumb"
            :preview-src-list="[scope.row.thumb]"
          >
          </el-image>
        </template> -->
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          v-model="params.content"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 6 }"
        ></el-input>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-date-picker
          class="el-date-editor--datetime"
          v-model="params.createTime"
          type="datetime"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="标签">
        <el-select
          v-model="params.tags"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
import { defineComponent, toRefs, watch } from 'vue';

export default defineComponent({
  props: {
    modal: {
      type: Object,
      default: () => ({})
    },
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['close', 'saveEdit'],
  setup(props, { emit }) {
    const { modal: modalParams, formData: params } = toRefs(props);

    // 将字符串标签转为数组
    watch(
      () => props.modal,
      () => {
        if (props.modal.show && params.value.tags) {
          params.value.tags = params.value.tags.split(',');
        }
      },
      {
        deep: true
      }
    );

    const options = [
      {
        value: '随笔',
        label: '随笔'
      },
      {
        value: '鸡毛蒜皮',
        label: '鸡毛蒜皮'
      }
    ];

    // 取消
    function close(): void {
      emit('close');
    }

    // 保存
    function saveEdit(): void {
      // 将数组标签转为字符串
      params.value.tags = params.value.tags.join(',');
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
