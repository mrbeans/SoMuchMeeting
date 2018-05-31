<template>
  <el-container>
    <el-aside width="200px">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-setting"></i>基础管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <i class="el-icon-date"></i>会议一览
            </el-menu-item>
            <el-menu-item index="1-2">
              <i class="el-icon-location-outline"></i>会议室管理
            </el-menu-item>
            <el-menu-item index="1-3">
              <i class="el-icon-edit-outline"></i>基础设置配置
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Dennis.Liu</span>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">森亿智能·版权所有 2016-2018 & CopyRight</div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </el-container>
</template>
