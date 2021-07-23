<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>基础信息</span>
            </div>
          </template>
          <div class="info">
            <el-upload
              class="avatar-uploader"
              action="/api/upload-file/avatar"
              :show-file-list="false"
              :before-upload="beforeAvatarUpload"
              :on-success="handleAvatarSuccess"
            >
              <div class="info-image">
                <img :src="avatarImg" />
                <span class="info-edit">
                  <i class="el-icon-lx-camerafill"></i>
                </span>
              </div>
            </el-upload>
            <div class="info-name">{{ userInfo.username }}</div>
            <div class="info-desc">{{ userInfo.desc }}</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>账户编辑</span>
            </div>
          </template>
          <el-form label-width="90px">
            <el-form-item label="用户名：">
              <el-input
                type="text"
                v-model="userInfo.username"
                readonly
              ></el-input>
            </el-form-item>
            <el-form-item label="旧密码：">
              <el-input type="password" v-model="form.oldPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码：">
              <el-input type="password" v-model="form.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="个人简介：">
              <el-input v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit">保存</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { updateUser } from '@api/user';
import { ResponseDataType } from '@/types/types';
import { ElMessage } from 'element-plus';

type Form = {
  userId: number;
  oldPassword: string;
  newPassword: string;
  desc: string;
};

export default defineComponent({
  name: 'user',
  setup() {
    const $router = useRouter();
    const $store = useStore();

    // 用户信息
    const userInfo = computed(() => $store.getters.userInfo);

    const avatarImg = ref<string>(userInfo.value.avatarUrl);

    function beforeAvatarUpload(file: { type: string }) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';

      if (!isJPG && !isPNG) {
        return ElMessage.error('上传头像图片只能是 JPG、PNG 格式!');
      }
    }

    function handleAvatarSuccess(res: ResponseDataType) {
      if (res.code === 200) {
        ElMessage.success(res.msg);
        // 更新用户信息
        const data = { ...userInfo.value, avatarUrl: res.fileUrl };
        $store.commit('setUserInfo', data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        avatarImg.value = res.fileUrl as string;
      } else {
        ElMessage.error(res.msg);
      }
    }

    const form = reactive<Form>({
      userId: Number(userInfo.value.userId),
      oldPassword: '',
      newPassword: '',
      desc: String(userInfo.value.desc)
    });
    // 修改资料
    function submit() {
      updateUser({ ...form })
        .then((res: ResponseDataType) => {
          if (res.code === 200) {
            ElMessage.success(res.msg);
            setTimeout(() => {
              $router.push({ name: 'login' });
            }, 1000);
          } else {
            ElMessage.error(res.msg);
          }
        })
        .catch(() => ({}));
    }

    return {
      userInfo,
      avatarImg,
      beforeAvatarUpload,
      handleAvatarSuccess,
      form,
      submit
    };
  }
});
</script>

<style lang="less" scoped>
@import './user.less';
</style>
