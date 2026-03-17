<template>
    <div class="home-contact--wrapper" data-aos="fade-up" data-aos-delay="500">
        <div class="home-contact">
            <h2 class="home-contact--text">Join our list for <br /> insights, news and <br /> special offers.</h2>
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
    padding: 32px;
    max-width: var(--dls-max-width);
    margin: 0 auto;

    .home-contact {
        width: 100%;
        padding: 48px;
        background: var(--dls-color-sunlight);
        border-radius: 30px;
        display: flex;
        align-items: center;
        overflow: hidden;

        &--text {
            margin: 0;
        }

        &--form {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
    }

    @media (max-width: 1024px) {
        .home-contact {
            padding: 32px;
            flex-direction: column;
            gap: 32px;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        .home-contact {
            justify-content: center;
            align-items: center;

            &--form {
                width: 100%;
                flex-direction: column;
            }
        }
    }

    @media (max-width: 425px) {
        .home-contact {
            &--text {
                font-size: 28px;
                letter-spacing: -2px;
            }
        }
    }
}
</style>

<style lang="scss">
.el-input {
    min-width: 200px;

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