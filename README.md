# vue_test

> vue-demo

## Build Setup

``` bash
# install dependencies
npm install

# 安装组件的依赖
npm install --save multifunctional-datepicker

# 全局注册
import datePicker from 'multifunctional-datepicker'
Vue.prototype.$datepicker = datePicker

# 参数配置（可选择组件列数，是否需要中文格式显示等）
params = {
    type: 2, // 2：年月；3：年月日；4：年月日时；5：年月日时分
    showChinese: false, // 默认false，不显示中文格式
    value: [], // 默认选择显示的日期，是一个数组
    quarter: false, // 时间是否以刻度形式显示，默认false
    min: [], // 设置日期的下限
    max: [], // 设置日期的上限
}

# 调用方式
showDatePicker() {
    var time = [2018,10,1]
    let init = JSON.parse(JSON.stringify(time));
    this.$datepicker(params).then((e) => {
        // do something
    }).catch((e) => {
        // console.log(e)
    })
},

# serve with hot reload at localhost:8080
npm run dev

## 案例效果图
# 常规显示
![work flows](src/assets/images/1.jpg)

# 中文格式显示
![work flows](src/assets/images/1_1.jpg)
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# multifunctional-datepicker


