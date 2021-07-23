<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-search"> 查询 </el-button>
      </div>
      <el-table
        :data="table.list"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column type="expand">
          <template #default="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <div v-for="(item, index) in props.row.subList" :key="index">
                <el-form-item label="ID">
                  <span>{{ item.id }}</span>
                </el-form-item>
                <el-form-item label="类型">
                  <span>{{ item.type === 1 ? '心情随笔' : '鸡毛蒜皮' }}</span>
                </el-form-item>
                <el-form-item label="标题">
                  <span>{{ item.title }}</span>
                </el-form-item>
                <el-form-item label="内容">
                  <span>{{ item.contnet }}</span>
                </el-form-item>
                <el-form-item label="创建时间">
                  <span>{{ item.createTime }}</span>
                </el-form-item>
                <el-form-item label="标签">
                  <span>{{ item.tags }}</span>
                </el-form-item>
                <el-form-item label="内容">
                  <span>{{ item.contnet }}</span>
                </el-form-item>
                <el-form-item label="内容">
                  <span>{{ item.contnet }}</span>
                </el-form-item>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期"></el-table-column>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { statisticsList } from '@api/statistics';
import { ResponseDataType } from '@/types/types';

type Table = {
  list: unknown[];
  total: number;
};

export default defineComponent({
  name: 'Statistics',
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
      statisticsList({ type: 1 })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            table.list = res.data;
            // table.total = res.total || 0;
          }
        })
        .catch(() => ({}));
    };
    getTableData();

    // 分页
    function handlePageChange(val: number): void {
      params.page = val;
      getTableData();
    }

    return {
      params,
      table,
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
