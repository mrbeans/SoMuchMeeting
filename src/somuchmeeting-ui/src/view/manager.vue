<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item  label="会议室名称">
            <el-select v-model="formInline.value5" filterable placeholder="请选择会议室">
            <el-option
              v-for="item in formInline.options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
            <el-button type="success" icon="el-icon-plus" @click="formInline.dialogTableVisible = true">添加会议室</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="text item">
        <el-table :data="device_data" border style="width: 100%">
          <el-table-column fixed prop="name" label="名称" width="200"></el-table-column>
          <el-table-column fixed prop="place" label="位置" width="150"></el-table-column>
          <el-table-column fixed prop="count" label="可容纳人数" width="100"></el-table-column>
          <el-table-column fixed prop="status" label="开放状态" width="100"></el-table-column>
          <el-table-column left prop="infrastructures" label="基础设施" width="*"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog title="添加/编辑设备" :visible.sync="formInline.dialogTableVisible" width="520px" :before-close="handleClose">
      <el-form ref="form" :model="meetingInfo" label-width="100px">
        <el-form-item label="会议室名称">
          <el-input v-model="meetingInfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="会议室位置">
          <el-input v-model="meetingInfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="可容纳人数">
          <el-input v-model="meetingInfo.name" clearable maxlength="5"></el-input>
        </el-form-item>
        <el-form-item label="会议室状态">
          <el-switch v-model="meetingInfo.name" active-text="开放中" inactive-text="维护中"></el-switch>
        </el-form-item>
        <el-form-item label="基础设施">
          <div>
            <el-badge :value="0">
              <el-button size="small">投影仪</el-button>
            </el-badge>
            <el-badge :value="1">
              <el-button size="small">投影仪</el-button>
            </el-badge>
            <el-badge :value="2">
              <el-button size="small">投影仪</el-button>
            </el-badge>
            <el-badge :value="3">
              <el-button size="small">投影仪</el-button>
            </el-badge>
            <el-badge :value="4">
              <el-button size="small">投影仪</el-button>
            </el-badge>
            <el-badge :value="12">
              <el-button size="small">投影仪</el-button>
            </el-badge>
          </div>
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
  name:'Manager',
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
        device_data: [{
          id:1,
          name: '头脑风暴厅',
          place: '开开大厦19#1902',
          count: '12',
          infrastructures:'S002投影仪,液晶显示器*2,会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,投影幕布*2,HIFI音响设备*4,音响遥控器,液晶电视遥控器,投影仪遥控器,黑板,讲台',
          status:'开放'
        },{
          id:2,
          name: '丛林厅',
          place: '开开大厦19#1903',
          count: '6',
          infrastructures:'S002投影仪,会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,投影幕布*2,HIFI音响设备*4,音响遥控器,投影仪遥控器,黑板,讲台',
          status:'开放'
        },{
          id:3,
          name: '英国厅',
          place: '开开大厦12#1204',
          count: '20+',
          infrastructures:'液晶显示器*2,会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,HIFI音响设备*4,音响遥控器,液晶电视遥控器,黑板,讲台',
          status:'开放'
        },{
          id:4,
          name: '美国厅',
          place: '开开大厦12#1202',
          count: '20+',
          infrastructures:'液晶显示器*2,会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,HIFI音响设备*4,音响遥控器,液晶电视遥控器',
          status:'维护中'
        },{
          id:5,
          name: '202',
          place: '浦东大厦2楼',
          count: '8',
          infrastructures:'会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,HIFI音响设备*4,音响遥控器',
          status:'开放'
        },{
          id:6,
          name: '我看名字有多长可以用厅',
          place: '浦东大厦3楼',
          count: '14',
          infrastructures:'S002投影仪,液晶显示器*2,会议桌,人体工程学座椅*10,博视郎视讯外呼电话机*2,佳能高清摄像头,投影幕布*2,HIFI音响设备*4,音响遥控器,液晶电视遥控器,投影仪遥控器,黑板,讲台',
          status:'开放'
        }],
        imageUrl: ''
      }
    },
    methods: {
      onSubmit() {

      },
      handleClose(done) {

      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>
