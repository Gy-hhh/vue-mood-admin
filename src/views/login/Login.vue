<<<<<<< HEAD
<template>
  <div class="login-wrap">
    <div class="content">
      <div class="ms-login">
        <div class="ms-title">心情随笔管理系统</div>
        <el-form
            class="ms-content"
            :model="formData"
            :rules="rules"
            ref="loginRef"
            label-width="0px"
        >
          <el-form-item prop="username">
            <el-input v-model="formData.username" placeholder="请输入用户名">
              <template #prepend>
                <el-button icon="el-icon-user"></el-button>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                type="password"
                placeholder="请输入密码"
                v-model="formData.password"
                @keyup.enter="submitForm()"
            >
              <template #prepend>
                <el-button icon="el-icon-lock"></el-button>
              </template>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm">登录</el-button>
          </div>
        </el-form>
      </div>
      <div class="register" @click="$router.push('/register');">注册</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { login } from '@api/user';
import { ResponseDataType } from '@/types/types';
import { ElMessage, ElForm } from 'element-plus';

export default defineComponent({
  setup() {
    const $router = useRouter();
    const $store = useStore();

    const formData = reactive({
      username: '',
      password: ''
    });

    const rules = {
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    };

    const loginRef = ref<InstanceType<typeof ElForm>>();
    // 登录
    function submitForm() {
      (loginRef.value as InstanceType<typeof ElForm>).validate(valid => {
        if (valid) {
          login({
            ...formData
          })
            .then((res: ResponseDataType) => {
              if (res.code === 200) {
                ElMessage.success('登录成功');
                $store.commit('setUserInfo', res.data);
                localStorage.setItem('userInfo', JSON.stringify(res.data));
                $router.push('/');
              } else {
                ElMessage.error(res.msg);
              }
            })
            .catch(() => ({}));
        }
      });
    }

    return {
      formData,
      rules,
      loginRef,
      submitForm,
    };
  }
});
</script>

<style lang="less" scoped>
@import './login.less';
</style>
=======
<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">心情随笔管理系统</div>
      <el-form
        class="ms-content"
        :model="formData"
        :rules="rules"
        ref="loginRef"
        label-width="0px"
      >
        <el-form-item prop="username">
          <el-input v-model="formData.username" placeholder="请输入用户名">
            <template #prepend>
              <el-button icon="el-icon-user"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="formData.password"
            @keyup.enter="submitForm()"
          >
            <template #prepend>
              <el-button icon="el-icon-lock"></el-button>
            </template>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { login } from '@api/user';
import { ResponseDataType } from '@/types/types';
import { ElMessage, ElForm } from 'element-plus';

export default defineComponent({
  setup() {
    const $router = useRouter();
    const $store = useStore();

    const formData = reactive({
      username: '',
      password: ''
    });

    const rules = {
      username: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }
      ],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    };

    const loginRef = ref<InstanceType<typeof ElForm>>();
    // 登录
    function submitForm() {
      (loginRef.value as InstanceType<typeof ElForm>).validate(valid => {
        if (valid) {
          login({
            ...formData
          })
            .then((res: ResponseDataType) => {
              if (res.code === 200) {
                ElMessage.success('登录成功');
                $store.commit('setUserInfo', res.data);
                localStorage.setItem('userInfo', JSON.stringify(res.data));
                $router.push('/');
              } else {
                ElMessage.error(res.msg);
              }
            })
            .catch(() => ({}));
        }
      });
    }

    return {
      formData,
      rules,
      loginRef,
      submitForm
    };
  }
});
</script>

<style lang="less" scoped>
@import './login.less';
</style>
>>>>>>> 9e1bac8f9a346c984273c8f9d769d0394191b4cc
