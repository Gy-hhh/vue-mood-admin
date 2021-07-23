<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-plus" @click="handleAdd">
          新增
        </el-button>
      </div>
      <el-table
        :data="table.list"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column
          prop="id"
          label="ID"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template #default="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.row)"
              >编辑
            </el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="params.page"
          :page-size="params.size"
          :total="table.total"
          @current-change="handlePageChange"
        ></el-pagination>
      </div>
    </div>
    <Modal
      :modal="modal"
      :formData="formData"
      @saveEdit="saveEdit"
      @close="close"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { moodList, addMood, updateMood, deleteMood } from '@api/mood-essay';
import { ResponseDataType } from '@/types/types';
import { ElMessage, ElMessageBox } from 'element-plus';
import { formatDateTime } from '@utils/utils';
import Modal from './modal/Modal.vue';

type Table = {
  list: unknown[];
  total: number;
};

type FormData = {
  id?: number;
  title: string;
  content: string;
  createTime: string;
  tags: string;
};

export default defineComponent({
  name: 'MoodEssay',
  components: {
    Modal
  },
  setup() {
    const params = reactive({
      page: 1,
      size: 10
    });

    const table = reactive<Table>({
      list: [],
      total: 0
    });
    // 获取表格数据
    const getTableData = () => {
      moodList({
        page: params.page,
        size: params.size
      })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            table.list = res.data;
            table.total = res.total || 0;
          }
        })
        .catch(() => ({}));
    };
    getTableData();

    const modal = reactive({
      show: false,
      type: 'add',
      title: '新增'
    });
    const formData = reactive<FormData>({
      id: -1,
      title: '',
      content: '',
      createTime: '',
      tags: ''
    });
    // 新增
    function handleAdd(): void {
      formData.id = -1;
      formData.title = '';
      formData.content = '';
      formData.createTime = '';
      formData.tags = '';
      modal.type = 'add';
      modal.title = '新增';
      modal.show = true;
    }

    // 编辑
    function handleEdit(row: FormData): void {
      formData.id = row.id;
      formData.title = row.title;
      formData.content = row.content;
      formData.createTime = row.createTime;
      formData.tags = row.tags;
      modal.type = 'edit';
      modal.title = '编辑';
      modal.show = true;
    }

    // 编辑 - 保存
    function saveEdit(params: FormData): boolean | undefined {
      if (!params.title) {
        ElMessage.error('标题未填写');
        return false;
      }
      if (!params.content) {
        ElMessage.error('内容未填写');
        return false;
      }
      if (!params.createTime) {
        ElMessage.error('时间未填写');
        return false;
      }
      // 新增
      if (modal.type === 'add') {
        addMood({
          ...params,
          createTime: formatDateTime(new Date(params.createTime)),
          type: '心情随笔'
        })
          .then((res: ResponseDataType) => {
            if (res.code === 200) {
              ElMessage.success(res.msg);
              getTableData();
              modal.show = false;
            } else {
              ElMessage.error(res.msg);
            }
          })
          .catch(() => ({}));
        return false;
      }

      // 编辑
      updateMood({
        ...params,
        createTime: formatDateTime(new Date(params.createTime)),
        type: '心情随笔'
      })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            getTableData();
            modal.show = false;
          } else {
            ElMessage.error(res.msg);
          }
        })
        .catch(() => ({}));
    }

    // 删除
    function handleDelete(row: FormData): void {
      ElMessageBox.confirm('确定要删除吗？', '提示', {
        type: 'warning'
      })
        .then(() => {
          deleteMood({ ids: String(row.id) })
            .then((res: ResponseDataType) => {
              if (res.code === 200) {
                ElMessage.success(res.msg);
                getTableData();
              } else {
                ElMessage.error(res.msg);
              }
            })
            .catch(() => ({}));
        })
        .catch(() => ({}));
    }

    // 关闭
    function close(): void {
      modal.show = false;
    }

    // 分页
    function handlePageChange(val: number): void {
      params.page = val;
      getTableData();
    }

    return {
      params,
      table,
      modal,
      formData,
      handleAdd,
      handleEdit,
      saveEdit,
      close,
      handleDelete,
      handlePageChange
    };
  }
});
</script>

<style lang="less" scoped>
.handle-box {
  margin-bottom: 20px;
  text-align: left;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>
