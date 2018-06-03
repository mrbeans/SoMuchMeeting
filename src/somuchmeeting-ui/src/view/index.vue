<template>
  <div class="common-bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="会议日期">
            <el-date-picker v-model="formInline.value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" :picker-options="formInline.pickerOptions2">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formInline.value5" filterable multiple placeholder="请选择">
              <el-option v-for="item in formInline.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            <el-button type="success" icon="el-icon-plus" @click="formInline.dialogTableVisible = true">发起会议</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="text item">
        <el-table :data="meeting_data" border style="width: 100%">
          <el-table-column fixed prop="start_time" label="开始时间" width="200"></el-table-column>
          <el-table-column fixed prop="end_time" label="结束时间" width="200"></el-table-column>
          <el-table-column prop="board_room" label="会议室" width="200"></el-table-column>
          <el-table-column prop="booked_by" label="预订人" width="120"></el-table-column>
          <el-table-column prop="partake_count" label="参会人数" width="100"></el-table-column>
          <el-table-column prop="max_count" label="最多可容纳人数" width="200"></el-table-column>
          <el-table-column prop="create_time" label="预定时间" width="200"></el-table-column>
          <el-table-column fixed="right" label="操作" width="*">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" size="small">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small">取消预定</el-button>
              <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button> -->
              <!-- <el-button type="text" size="small">取消预定</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog title="发起/修改会议" :visible.sync="formInline.dialogTableVisible" :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="meetingInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="meetingInfo.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="meetingInfo.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="meetingInfo.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="meetingInfo.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="meetingInfo.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="meetingInfo.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input type="textarea" v-model="meetingInfo.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="formInline.dialogTableVisible = false">立即创建</el-button>
          <el-button @click="formInline.dialogTableVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        meetingInfo: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formInline: {
          dialogTableVisible: false,
          pickerOptions2: {
            shortcuts: [{
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近一个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            }, {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }]
          },
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value5: [],
          value7: []
        },
        meeting_data: [{
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }, {
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }, {
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }, {
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }, {
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }, {
          start_time: '2016-05-03 16:00',
          end_time: '2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time: '2016-05-02 20:06'
        }]
      }
    },
    methods: {
      onSubmit() {

      },
      handleClose(done) {

      }
    }
  }

</script>
