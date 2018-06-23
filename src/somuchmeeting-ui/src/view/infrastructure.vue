<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item  label="设备名称">
            <el-select v-model="formInline.value5" filterable placeholder="请选择设备">
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
            <el-button type="success" icon="el-icon-plus" @click="formInline.dialogTableVisible = true">添加设备</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="text item">
        <el-table :data="device_data" border style="width: 100%">
          <el-table-column fixed prop="name" label="设备名称" width="150"></el-table-column>
          <el-table-column fixed prop="brand" label="设备品牌" width="100"></el-table-column>
          <el-table-column fixed prop="model" label="设备型号" width="100"></el-table-column>
          <el-table-column fixed prop="image" label="设备缩略图" width="150">            
              <template slot-scope="scope">
                <img :src="scope.row.image" alt="" style="width: 50px;height: 50px">
              </template>
          </el-table-column>
          <el-table-column prop="count" label="设备数量" width="100"></el-table-column>
          <el-table-column prop="create_time" label="添加时间" width="150"></el-table-column>
          <el-table-column fixed="right" label="操作" width="*">
            <template slot-scope="scope">
              <el-button type="primary" icon="el-icon-edit" size="small">编辑</el-button>
              <el-button type="danger" icon="el-icon-delete" size="small">删除设备</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog title="添加/编辑设备" :visible.sync="formInline.dialogTableVisible" width="520px" :before-close="handleClose">
      <el-form ref="form" :model="meetingInfo" label-width="80px">
        <el-form-item label="设备名称">
          <el-input v-model="meetingInfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="设备品牌">
          <el-input v-model="meetingInfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="设备型号">
          <el-input v-model="meetingInfo.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="当前库存">
          <el-input type="number" v-model="meetingInfo.name" clearable></el-input>
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
  name:'Infrastructure',
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
          name: '极米投影仪',
          image: 'http://image2.suning.cn/b2c/catentries/000000000146311646_1_800x800.jpg',
          model:'H1S',
          brand:'极米',
          count: 12,
          create_time: '2016-05-02 20:06'
        },{
          name: 'TCL液晶电视',
          image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t5842/7/1517763246/154980/2e6dc317/59277e26Nfaca3cae.jpg',
          model:'65A730U',
          brand:'TCL',
          count: 8,
          create_time: '2016-05-05 20:06'
        },{
          name: '爱普生高清投影仪',
          image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t7399/254/2500197521/99595/5c3a19c3/59af9766Nae5bc89b.jpg',
          model:'CB-S41',
          brand:'爱普生',
          count: 12,
          create_time: '2016-05-02 20:06'
        },{
          name: '康佳液晶电视',
          image: 'https://img14.360buyimg.com/n1/jfs/t17752/149/2093019489/138121/b10dcca3/5ae2cf46N667a6646.jpg',
          model:'LED43E330C',
          brand:'康佳',
          count: 8,
          create_time: '2016-05-05 20:06'
        },{
          name: '极米高清投影仪',
          image: 'http://image2.suning.cn/b2c/catentries/000000000146311646_1_800x800.jpg',
          model:'H1S',
          brand:'极米',
          count: 12,
          create_time: '2016-05-02 20:06'
        },{
          name: 'TCL液晶电视',
          image: 'https://img10.360buyimg.com/n1/s450x450_jfs/t5842/7/1517763246/154980/2e6dc317/59277e26Nfaca3cae.jpg',
          model:'65A730U',
          brand:'TCL',
          count: 8,
          create_time: '2016-05-05 20:06'
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
