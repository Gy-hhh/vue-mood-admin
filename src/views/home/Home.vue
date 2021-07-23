<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height: 252px">
          <div class="user-info">
            <img class="user-avator" :src="userInfo.avatarUrl" alt="" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ userInfo.username }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            <span class="title">上次登录时间：</span>
            <span>2021-07-14</span>
          </div>
          <div class="user-info-list">
            <span class="title">上次登录地点：</span>
            <span>厦门</span>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue
          <el-progress :percentage="71.3" color="#42b983"></el-progress
          >JavaScript
          <el-progress :percentage="24.1" color="#f1e05a"></el-progress>CSS
          <el-progress :percentage="13.7"></el-progress>HTML
          <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover" style="height: 403px">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" type="text"
                >添加</el-button
              >
            </div>
          </template>
          <el-table :show-header="false" :data="table.list" style="width: 100%">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox
                  v-model="scope.row.statusText"
                  @change="value => statusChange(value, scope.row)"
                ></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div
                  class="todo-item"
                  :class="{
                    'todo-item-del': scope.row.statusText
                  }"
                >
                  {{ scope.row.title }}
                </div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { todoList, updateTodo } from '@api/todo';
import { ResponseDataType } from '@/types/types';
import { ElMessage } from 'element-plus';

type Table = {
  list: unknown[];
  total: number;
};

type TodoItem = {
  id: number;
  title: string;
  status: number;
  statusText?: boolean;
  createTime: string;
};

export default defineComponent({
  name: 'Home',
  setup() {
    const $store = useStore();

    // 用户信息
    const userInfo = computed(() => $store.getters.userInfo);

    const role = computed(() => {
      const userType = Number(userInfo.value.userType);
      if (userType === 0) {
        return '超级管理员';
      }
      if (userType === 1) {
        return '管理员';
      }
      if (userType === 2) {
        return '普通用户';
      }
      return '普通用户';
    });

    const params = reactive({
      page: 1,
      size: 10
    });

    const table = reactive<Table>({
      list: [],
      total: 0
    });

    // 获取代办事项列表
    function getTodoList(): void {
      todoList({
        page: params.page,
        size: params.size
      })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            // 处理status
            res.data.forEach((item: TodoItem) => {
              item.statusText = Number(item.status) === 0 ? false : true;
            });
            table.list = res.data;
            table.total = res.total || 0;
          }
        })
        .catch(() => ({}));
    }
    getTodoList();

    // 代办事项更新
    function statusChange(value: boolean, row: TodoItem): void {
      const status = value ? 1 : 0;
      updateTodo({
        id: row.id,
        title: row.title,
        status: status,
        createTime: row.createTime
      })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
          } else {
            ElMessage.error(res.msg);
          }
        })
        .catch(() => ({}));
    }

    return {
      userInfo,
      table,
      role,
      statusChange
    };
  }
});
</script>

<style lang="less" scoped>
@import './home.less';
</style>
