<template>
    <div class="home-contact--wrapper">
        <div class="home-contact">
            <div class="home-contact--text headline-1">Join our list for <br /> insights, news and <br /> special offers.</div>
            <el-form
                ref="formRef" 
                class="home-contact--form"
                :model="contactForm"
                :inline="true">
                <el-form-item
                    prop="name"
                    :rules="[{
                        required: true,
                        message: 'Please input name',
                        trigger: 'blur',
                    }]">
                    <el-input v-model="contactForm.name" placeholder="NAME"></el-input>
                </el-form-item>

                <el-form-item
                    prop="email"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input email address',
                            trigger: 'blur',
                        },
                        {
                            type: 'email',
                            message: 'Wrong email format',
                            trigger: 'blur',
                        }
                    ]">
                    <el-input v-model="contactForm.email" placeholder="EMAIL"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button @click="submitForm(formRef)">SUBMIT</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

const formRef = ref<FormInstance>()
const contactForm = reactive<{
    name: string,
    email: string
}>({
    name: '',
    email: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}
</script>

<style lang="scss" scoped>
.home-contact--wrapper {
    width: 100%;
    padding: 0 32px;

    .home-contact {
        width: 100%;
        padding: 32px 32px 32px 48px;
        background: var(--dls-color-sunlight);
        border-radius: 30px;
        display: flex;
        align-items: flex-end;

        &--form {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }
}
</style>

<style lang="scss">
.el-input {
    min-width: 360px;

    .el-input__wrapper {
        box-shadow: none;
        background-color: transparent;
        border-bottom: 1px solid var(--dls-color-burgundy);
        border-radius: 0;
        padding: 1px 0;

        .el-input__inner {
            font-family: 'Jost';
            font-size: 16px;
            color: var(--dls-color-burgundy);

            &::placeholder {
                color: var(--dls-color-burgundy);
                font-family: 'Jost';
                font-size: 16px;
            }
        }
    }
}

.el-form--inline .el-form-item {
    margin-right: 16px;
}

.el-form-item.is-error .el-form-item__content .el-input-tag__wrapper, .el-form-item.is-error .el-form-item__content .el-input-tag__wrapper.is-focus, .el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:focus, .el-form-item.is-error .el-form-item__content .el-input-tag__wrapper:hover, .el-form-item.is-error .el-form-item__content .el-input__wrapper, .el-form-item.is-error .el-form-item__content .el-input__wrapper.is-focus, .el-form-item.is-error .el-form-item__content .el-input__wrapper:focus, .el-form-item.is-error .el-form-item__content .el-input__wrapper:hover, .el-form-item.is-error .el-form-item__content .el-select__wrapper, .el-form-item.is-error .el-form-item__content .el-select__wrapper.is-focus, .el-form-item.is-error .el-form-item__content .el-select__wrapper:focus, .el-form-item.is-error .el-form-item__content .el-select__wrapper:hover, .el-form-item.is-error .el-form-item__content .el-textarea__inner, .el-form-item.is-error .el-form-item__content .el-textarea__inner.is-focus, .el-form-item.is-error .el-form-item__content .el-textarea__inner:focus, .el-form-item.is-error .el-form-item__content .el-textarea__inner:hover {
    box-shadow: none;
}

.el-button {
    padding: 20px 16px;
    font-size: 16px;
    font-family: "Jost";
    font-weight: 400;
    color: var(--dls-color-burgundy);
    background-color: var(--dls-color-sunlight);
    border: 1px solid var(--dls-color-burgundy);

    &:hover {
        background-color: var(--dls-color-burgundy);
        border-color: var(--dls-color-sunlight);
        color: var(--dls-color-sunlight);
    }
}
</style>