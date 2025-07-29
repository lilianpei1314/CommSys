<script setup>

</script>

<template>
  <router-view></router-view>
</template>

<style >
::-webkit-scrollbar-track{
  background: raba(0,0,0,0.1);
  border-radius: 0;
}

::-webkit-scrollbar{
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb{
  cursor: pointer;
  border-radius: 5px;
  background: rgba(0,0,0,0.25);
  transform: color 0.2s ease;
}
</style>
