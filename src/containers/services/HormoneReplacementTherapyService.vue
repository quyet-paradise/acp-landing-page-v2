<template>
    <div class="bhrt-service">
        <div class="bhrt-service--header">
            <div class="bhrt-service--header--left">
                <img class="bg" src="@/assets/images/services/fountain-path-yellow.png" alt="bg">
                
                <div class="headline-1 title">HRT Therapy: Feel your youthful self again</div>
            </div>

            <div class="bhrt-service--header--right"></div>
        </div>

        <div class="bhrt-service--content">
            <div class="conditions-list">
                <div class="conditions-list--title headline-1">Conditions HRT can treat*</div>

                <div class="conditions-list--collapse">
                    <el-collapse v-model="activeConditionsNames" class="collapse-obj">
                        <el-collapse-item v-for="item in conditions" :key="item?.id" :title="item?.question" :name="item?.id">
                            <template #icon="{ isActive }">
                                <span class="icon-ele">
                                    <div v-if="isActive" class="bo_minus"></div>
                                    <div v-else class="bo_add"></div>
                                </span>
                            </template>
                            <div v-html="item?.answer"></div>
                        </el-collapse-item>
                    </el-collapse>
                </div>

                <div class="conditions-list--hint long-paragraph">*Benefits vary from person to person. We customize every prescription to your lab results and symptoms.</div>
            </div>

            <div class="process">
                <div class="process--title headline-1">How our HRT Program Works</div>
                
                <div class="process--content">
                    <div class="process--content--item" v-for="item in processes" :key="item?.id">
                        <div class="title headline-3">{{ item?.title }}</div>
                        <div class="desc long-paragraph">{{ item?.desc }}</div>
                    </div>
                </div>
            </div>

            <div class="faqs-list">
                <div class="faqs-list--title headline-1">FAQ</div>

                <div class="faqs-list--collapse">
                    <el-collapse v-model="activeFAQsNames" class="collapse-obj">
                        <el-collapse-item v-for="item in faqs" :key="item?.id" :title="item?.question" :name="item?.id">
                            <template #icon="{ isActive }">
                                <span class="icon-ele">
                                    <div v-if="isActive" class="bo_minus"></div>
                                    <div v-else class="bo_add"></div>
                                </span>
                            </template>
                            <div v-html="item?.answer"></div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>

            <div class="book-consultation-btn-v1">BOOK CONSULTATION</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

type CollapseItem = {
    id: string,
    question: string,
    answer: string
}

type ProcessItem = {
    id: string,
    title: string,
    desc: string
}

const conditions: CollapseItem[] = [
    {
        id: '1',
        question: '1. Menopause and Perimenopause',
        answer: 'BHRT can alleviate common symptoms like hot flashes, night sweats, vaginal dryness, sleep problems, fatigue, weight gain, mood swings, and memory loss.'
    },
    {
        id: '2',
        question: '2. Low Libido and Sexual Dysfunction',
        answer: 'BHRT can help with decreased libido and sexual dysfunction in both men and women.'
    },
    {
        id: '3',
        question: '3. Erectile Dysfunction',
        answer: 'BHRT can be used to treat erectile dysfunction, a common issue in men as they age. BHRT can also address symptoms like fatigue, reduced libido, and muscle loss associated with andropause.'
    },
    {
        id: '4',
        question: '4. Mood Disorders',
        answer: 'Hormonal fluctuations during menopause and andropause can lead to mood swings, anxiety, and depression, which BHRT can help address.'
    },
    {
        id: '5',
        question: '5. Loss of Bone Density (Osteoporosis)',
        answer: 'BHRT can improve postmenopausal osteoporosis, a condition where bones become brittle and prone to fracture.'
    },
    {
        id: '6',
        question: '6. Muscle Loss and Weakness',
        answer: 'BHRT can help prevent the loss of muscle mass and strength that can occur with age and hormonal decline.'
    },
    {
        id: '7',
        question: '7. Post-Hysterectomy Hormone Loss',
        answer: 'BHRT can help women who have undergone a hysterectomy and are experiencing hormone deficiencies.'
    },
    {
        id: '8',
        question: '8. Insulin Resistance',
        answer: "BHRT can be beneficial for individuals with insulin resistance, a condition where the body doesn't use insulin effectively."
    },
    {
        id: '9',
        question: '9. Adrenal and Thyroid Disorders',
        answer: 'BHRT can help regulate adrenal and thyroid function, which can be disrupted by hormonal imbalances.'
    },
    {
        id: '10',
        question: '10. Fibromyalgia',
        answer: 'BHRT can help alleviate symptoms of fibromyalgia by addressing underlying hormone deficiencies.'
    },
    {
        id: '11',
        question: '11. Sleep Disorders',
        answer: 'BHRT can help restore a healthy sleep-wake cycle by addressing hormonal imbalances that contribute to sleep disturbances.'
    },
    {
        id: '12',
        question: '12. Chronic Fatigue',
        answer: 'BHRT can help improve energy levels and overall vitality by addressing the root causes of fatigue related to hormonal imbalances.'
    },
    {
        id: '13',
        question: '13. Premenstrual Syndrome (PMS)',
        answer: 'PMS symptoms often arise from the hormonal fluctuations during the menstrual cycle. BHRT can help restore hormonal balance and alleviate PMS symptoms, such as anxiety, sleep disturbances, and mood swings.'
    },
    {
        id: '14',
        question: '14. Polycystic Ovary Syndrome (PCOS)',
        answer: 'BHRT can help regulate hormone levels, potentially reducing symptoms like acne, excessive hair growth, and irregular periods, potentially improving fertility and reducing the risk of cysts.'
    }
]

const processes: ProcessItem[] = [
    {
        id: '1',
        title: '1. Consultation',
        desc: 'We listen to your symptoms, wellness goals, and medical history.'
    },
    {
        id: '2',
        title: '2. Doctor Partnership',
        desc: 'Therapy starts with a prescription and is closely monitored with lab work.'
    },
    {
        id: '3',
        title: '3. Testing',
        desc: 'A hormone panel shows what’s out of balance.'
    },
    {
        id: '4',
        title: '4. Start Compounding',
        desc: 'We made the exact dose and combination you need in your preferred form: topical cream or gel, sublingual lozenge, oral capsure.'
    },
    {
        id: '5',
        title: '5. Follow Up & Fine Tuning',
        desc: 'We repeat labs and adjust your formula until you feel your best.'
    },
    {
        id: '6',
        title: '6. Ongoing Support',
        desc: 'Your dedicated pharmacist is here for refills, questions, and lifestyle tips.'
    }
]

const faqs: CollapseItem[] = [
    {
        id: '1',
        question: 'How soon will I notice a difference?',
        answer: 'Most people feel small improvements in 2–4 weeks and full benefits within 3–6 months.'
    },
    {
        id: '2',
        question: 'Will I gain weight?',
        answer: 'Balanced hormones often make weight control easier, not harder. Diet and exercise still matter.'
    },
    {
        id: '3',
        question: 'Is BHRT just for women?',
        answer: 'No, men use testosterone BHRT to boost energy, muscle tone, and mood.'
    },
    {
        id: '4',
        question: 'How long do I stay on it?',
        answer: 'Some choose 1–2 years to get through menopause; others continue longer for bone, brain, or heart support. We review your plan every year.'
    }
]

const activeConditionsNames = ref<string[]>(['1'])
const activeFAQsNames = ref<string[]>(['1'])
</script>

<style lang="scss" scoped>
.bhrt-service {
    width: 100%;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 64px;

    &--header {
        display: flex;
        height: 80vh;
        width: 100%;
        padding: 0 16px;

        &--left {
            flex: 1 0 50%;
            background-color: var(--dls-color-burgundy);
            position: relative;
            overflow: hidden;
            padding: 32px;

            .bg {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0);
                width: 80%;
                z-index: 0;
            }

            .title {
                color: var(--dls-color-sunlight);
                position: relative;
                z-index: 1;
            }
        }

        &--right {
            flex: 1 0 50%;
            background-image: url('/images/services/header-banner.png');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    &--content {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 0 32px;
        align-items: center;

        .conditions-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;

            &--title {
                border-bottom: 1px solid var(--dls-color-burgundy);
            }
        }

        .faqs-list {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;

             &--title {
                border-bottom: 1px solid var(--dls-color-burgundy);
            }
        }

        .process {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;

            &--title {
                border-bottom: 1px solid var(--dls-color-burgundy);
            }

            &--content {
                display: flex;
                flex-wrap: wrap;
                padding: 32px 80px;
                gap: 80px;

                &--item {
                    flex: 1 0 calc(100% / 3 - 80px);
                    display: flex;
                    flex-direction: column;
                }
            }
        }

        .book-consultation-btn-v1 {
            width: fit-content;
        }
    }

    .bo_minus, .bo_add {
        font-size: 32px;
        color: var(--dls-color-burgundy);
    }
}
</style>

<style lang="scss">
.el-collapse {
    border-top: 0;
}

.el-collapse-item {
    padding: 8px 0;
}

.el-collapse-item__header {
    background: transparent;
    border-bottom: 1px solid var(--dls-color-burgundy);
    height: auto;
    gap: 8px;
    padding-right: 0 !important;
}

.el-collapse-item__wrap {
    background: transparent;
    border-bottom: 1px solid var(--dls-color-burgundy);
}

.el-collapse-item__title {
    font-family: 'SpeziaBookB';
    font-size: 50px;
    color: var(--dls-color-burgundy);
    line-height: 60px;
    letter-spacing: -3px;
}

.el-collapse-item__content {
    font-family: 'Jost';
    font-size: 24px;
    color: var(--dls-color-burgundy);
    line-height: 25.5px;
    letter-spacing: 0;
    font-weight: 300;
    width: 60%;
    padding: 16px 0 32px 48px;
}

</style>
