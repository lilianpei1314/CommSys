<template>
  <div>
    <el-result
      icon="warning"
      title="404"
      sub-title="你找的页面走丢了~"
    >
      <template #extra>
        <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
      </template>
    </el-result>
  </div>
</template>