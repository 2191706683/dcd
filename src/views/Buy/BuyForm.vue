<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="result" is-link readonly name="picker" label="购车城市" placeholder="点击选择城市"
                @click="showPicker = true" />
            <van-popup v-model:show="showPicker" position="bottom">
                <van-picker :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
            </van-popup>
            <van-field v-model="username" name="您的姓名" label="您的姓名" placeholder="请输入姓名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" name="手机号" label="手机号" placeholder="请输入手机号"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button block color="#ffe698" native-type="submit">
                立即申请
            </van-button>
        </div>
        <van-checkbox v-model="checked" shape="square" checked-color="#ffcc32">复选框</van-checkbox>
    </van-form>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true)
</script>

<style lang="stylus" scoped>

</style>