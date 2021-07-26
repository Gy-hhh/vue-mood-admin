<template>
  <div class="register-wrap">
    <div class="content-left">
      <img src="../../assets/image/1.png" alt="">
    </div>
    <div class="content-right">
      <div class="title">欢迎注册心情随笔</div>
      <div class="desc">希望有一天可以像你一样无所畏惧!</div>
      <div class="box">
        <el-form
          class="ms-content"
          :model="formData"
          :rules="rules"
          ref="loginRef"
          label-width="0px"
        >
          <el-form-item prop="username">
            <el-input
              autocomplete="new-password"
              v-model="formData.username"
              placeholder="用户名"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              autocomplete="new-password"
              type="password"
              placeholder="密码"
              v-model="formData.password"
              @keyup.enter="submitForm()"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passwordAgain">
            <el-input
              autocomplete="new-password"
              type="password"
              placeholder="确认密码"
              v-model="formData.passwordAgain"
              @keyup.enter="submitForm()"
            ></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm">立即注册</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {defineComponent, ref, reactive} from 'vue';
  import {useRouter} from 'vue-router';
  import {useStore} from 'vuex';
  import {register} from '@api/user';
  import {ResponseDataType} from '@/types/types';
  import {ElMessage, ElForm} from 'element-plus';

  export default defineComponent({
    setup() {
      const $router = useRouter();
      const $store = useStore();
      const formData = reactive({
        username: '',
        password: '',
        passwordAgain: ''
      });

      const validatePass = (rule:any, value:any, callback:any) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== formData.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      const rules = {
        username: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '不能小于6位字符', trigger: 'blur' }
        ],
        passwordAgain: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, message: '不能小于6位字符', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ]
      };
      const loginRef = ref<InstanceType<typeof ElForm>>();

      // 注册
      function submitForm() {
        (loginRef.value as InstanceType<typeof ElForm>).validate(valid => {
          if (valid) {
            register({
              ...formData
            }).then((res: ResponseDataType) => {
              if (res.code === 200) {
                ElMessage.success(res.msg);
                $router.push('/login');
              } else {
                ElMessage.error(res.msg);
              }
            }).catch(() => ({}));
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
  @import './register.less';
</style>
