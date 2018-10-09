<style lang="less" scoped>
  @import "../../assets/datePickerDemo/datePickerDemo.less";
</style>
<template>
  <div class="datePickerDemo">
    <div class="head">datePickerDemo</div>
    <div class="content">
      <div class="demo">
        <span class="format">年、月：</span>
        <span class="show" @click="showDatePicker(1, 2)">{{demo1?demo1:'请选择demo1'}}</span>
      </div>
      <div class="demo">
        <span class="format">年、月、日：</span>
        <span class="show" @click="showDatePicker(2, 3)">{{demo2?demo2:'请选择demo2'}}</span>
      </div>
      <div class="demo">
        <span class="format">年、月、日、时：</span>
        <span class="show" @click="showDatePicker(3, 4)">{{demo3?demo3:'请选择demo3'}}</span>
      </div>
      <div class="demo1">
        <div class="format">年、月、日、时、分：</div>
        <div class="show" @click="showDatePicker(4, 5)">{{demo4?demo4:'请选择demo4'}}</div>
      </div>
      <div class="demo1">
        <div class="format">年、月、日、时、分（00，15，30，45）：</div>
        <div class="show" @click="showDatePicker(5, 5)">{{demo5?demo5:'请选择demo5'}}</div>
      </div>
      <div style="text-align: left; font-weight: bold;margin-top: 20px;padding-left: 15px">以下是选择时间段</div>
      <div class="demo1">
        <div class="format">开始时间：</div>
        <div class="show" @click="showDatePicker(6, 5)">{{demo6?demo6:'请选择demo6'}}</div>
      </div>
      <div class="demo1">
        <div class="format">结束时间：</div>
        <div class="show" @click="showDatePicker(7, 5)">{{demo7?demo7:'请选择demo7'}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      demo1: '',
      demo2: '',
      demo3: '',
      demo4: '',
      demo5: '',
      demo6: '',
      demo7: '',
      time: [2018, 1, 1, 0, 0],
      minTime: [2018, 1, 1, 0, 0],
      maxTime: [],
      showChinese: false,
      resetTime: [],
      type: null
    }
  },
  methods: {
    // 获取当前时间
    getCurTime (minTime) {
      var date
      if (minTime) {
        var newMinTime = []
        minTime.forEach((item, ind) => {
          if (ind < 3) {
            newMinTime.push(item)
          }
        })
        date = new Date(newMinTime.join('/'))
      } else {
        date = new Date()
      }

      var dafultTiemEnd = new Date(date)
      dafultTiemEnd.setDate(date.getDate() + 30)
      var y1 = dafultTiemEnd.getFullYear()
      var m1 = this.dealTimeFormat(dafultTiemEnd.getMonth() + 1)
      var d1 = this.dealTimeFormat(dafultTiemEnd.getDate())
      var h1 = date.getHours()
      var min1 = date.getMinutes()
      this.maxTime = [y1 * 1, m1 * 1, d1 * 1, h1 * 1, min1 * 1]
    },
    dealTimeFormat (data) {
      return data > 9 ? data : '0' + data
    },
    // 选择时间
    showDatePicker (demo, type) {
      var date = new Date()
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      var h = date.getHours()
      var min = date.getMinutes()
      this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', min + '分'] : [y * 1, m * 1, d * 1, h * 1, min * 1]
      var dataObj = {}
      if (demo < 6) {
        dataObj = {
          type: type,
          showChinese: this.showChinese
        }
        if (demo === 5) {
          this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', '00分'] : [y * 1, m * 1, d * 1, h * 1, '00']
          dataObj.quarter = true
        }
      } else {
        if (demo === 6) {
          this.minTime = [2018, 1, 1, 0, 0]
        }
        if (demo === 7) {
          if (!this.resetTime[0]) return alert('请先选择开始时间！')
          var resetTime = []
          if (this.showChinese) {
            this.resetTime.forEach((item, index) => {
              resetTime.push((item.substr(0, item.length - 1)) * 1)
            })
          }
          this.time = this.resetTime
          this.minTime = this.showChinese ? resetTime : this.resetTime
          this.getCurTime(this.minTime)
        }
        dataObj = {
          type: type,
          min: this.minTime,
          max: this.maxTime,
          showChinese: this.showChinese
        }
      }
      let init = JSON.parse(JSON.stringify(this.time))
      dataObj.value = init
      this.$datepicker(dataObj).then((e) => {
        var y = e[0]
        var m = e[1]
        var d = e[2]
        var h = e[3]
        var mm = e[4]
        if (demo === 1) {
          this.demo1 = dataObj.showChinese ? y + m : y + '年' + m + '月'
        } else if (demo === 2) {
          this.demo2 = dataObj.showChinese ? y + m + d : y + '年' + m + '月' + d + '日'
        } else if (demo === 3) {
          this.demo3 = dataObj.showChinese ? y + m + d + h : y + '年' + m + '月' + d + '日' + h + '时'
        } else if (demo === 4) {
          this.demo4 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
        } else if (demo === 5) {
          this.demo5 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
        } else if (demo === 6) {
          this.resetTime = e
          this.demo6 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
          this.demo7 = ''
        } else if (demo === 7) {
          this.demo7 = dataObj.showChinese ? y + m + d + h + mm : y + '年' + m + '月' + d + '日' + h + '时' + mm + '分'
        }
      }).catch((e) => {
        // console.log(e)
      })
    }
  },
  mounted () {
    this.getCurTime()
  }
}
</script>
