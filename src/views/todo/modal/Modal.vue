<<<<<<< HEAD
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
      <el-form-item label="状态" class="form-status">
        <el-switch
          v-model="params.statusText"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="statusChange"
        ></el-switch>
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
        if (props.modal.show) {
          params.value.statusText =
            Number(params.value.status) === 0 ? false : true;
        }
      },
      {
        deep: true
      }
    );

    // 状态更新
    function statusChange(value: boolean): void {
      params.value.statusText = value;
    }

    // 取消
    function close(): void {
      emit('close');
    }

    // 保存
    function saveEdit(): void {
      params.value.status = params.value.statusText ? 1 : 0;
      emit('saveEdit', params.value);
    }
    return {
      modalParams,
      params,
      statusChange,
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

.form-status {
  text-align: left;
}
</style>
=======
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
      <el-form-item label="状态" class="form-status">
        <el-switch
          v-model="params.statusText"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="statusChange"
        ></el-switch>
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
        if (props.modal.show) {
          params.value.statusText =
            Number(params.value.status) === 0 ? false : true;
        }
      },
      {
        deep: true
      }
    );

    // 状态更新
    function statusChange(value: boolean): void {
      params.value.statusText = value;
    }

    // 取消
    function close(): void {
      emit('close');
    }

    // 保存
    function saveEdit(): void {
      params.value.status = params.value.statusText ? 1 : 0;
      emit('saveEdit', params.value);
    }
    return {
      modalParams,
      params,
      statusChange,
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

.form-status {
  text-align: left;
}
</style>
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
