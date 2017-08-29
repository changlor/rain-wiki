<template>
  <div>
    <banner />
    <div class="container">
      <div class="md" v-html="md(doc)"></div>
    </div>
  </div>
</template>
<script>
  import { Func } from '../vendor/lib';
  import banner from '../components/header';
  export default {
    data () {
      return {
        doc: `
# 英语能力竞赛平台付款协议
> 欢迎您购买竞赛平台的服务！

## 费用说明
> 本次支付可能包含的费用：

- **报名费用**
> 包含线上和线下的所有考试费用，仅收取一次，不会重复收取。

- **练习册费用**
> 包含往年真题和模拟题，反复练习可以大大提高竞赛成绩。

## 退款说明
> 报名费用必须在报名截止提前发起退费申请，**报名截止后不支持退费。**
模拟题没有练习过，7天内支持退费。**练习过的或购买7天后的模拟题，不支持退费。**

## 关于售后
> 在使用竞赛平台过程中如有任何疑问，可通过以下方式进行反馈：

- 通过“在线客服”功能，联系我们；

-     或在每日9:00-22:00时段内拨打用户服务专线：{# phone #}

## 隐私条款
> 竞赛平台注重保护用户个人信息及隐私，未经用户允许不会向第三方披露您的个人信息。除非满足下述情形之一：

- 根据法律法规的规定需要披露的；

- 符合您与竞赛平台之间的相关服务条款、软件许可使用协定的约定。
`,
      }
    },
    methods: {
      request (subscription, payload) {
        this.$store.dispatch('requestCustomer', { request: subscription, payload, page: this });
      },
      md (str) {
        return Func.parseMarkdown(str);
      }
    },
    components: {
      banner
    }
  }
</script>
