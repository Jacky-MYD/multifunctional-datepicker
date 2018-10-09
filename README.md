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
# ⚠️注意事项：
当showChinese的值为true时，time的格式需要配置为：var time = ['2018年', '10月', '9日']
当showChinese的值为false时，time的格式需要配置为：var time = [2018, 10, 9]

# serve with hot reload at localhost:8088
npm run dev

```
# 案例效果图
## 区间选择效果
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/gif.gif)<br />
## 常规显示
### 1.年月<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/1_1.jpg)<br />
### 2.年月日<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/2_2.jpg)<br />
### 3.年月日时<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/3_3.jpg)<br />
### 4.年月日时分<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/4_4.jpg)<br />
### 5.年月日时分，刻度格式<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/5_5.jpg)<br />

# 中文格式显示
### 1.年月<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/1.jpg)<br />
### 2.年月日<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/2.jpg)<br />
### 3.年月日时<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/3.jpg)<br />
### 4.年月日时分<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/4.jpg)<br />
### 5.年月日时分，刻度格式<br />
![Image text](https://github.com/Jacky-MYD/multifunctional-datepicker/blob/master/src/assets/image/5.jpg)<br />




