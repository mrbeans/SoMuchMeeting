<template>
  <div class="common-bg">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="会议日期">
            <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" :picker-options="pickerOptions2">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            <el-button type="success" @click="onSubmit" icon="el-icon-plus">发起会议</el-button>
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
        meeting_data: [{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        },{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        },{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        },{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        },{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        },{
          start_time: '2016-05-03 16:00',
          end_time:'2016-05-03 20:00',
          board_room: '头脑风暴厅',
          booked_by: '刘永超',
          partake_count: '6+',
          max_count: 10,
          create_time:'2016-05-02 20:06'
        }]
      }
    }
  }

</script>
