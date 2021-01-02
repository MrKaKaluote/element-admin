<!--
 * @Description:
 * @Autor: GaoSong
 * @Date: 2021-01-02 12:29:38
 * @LastEditors: GaoSong👉😜👈
 * @LastEditTime: 2021-01-02 14:50:34
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "./assets/css/index.scss";
body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    overflow: scroll;
    overflow-y: hidden;
}

#app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}

.el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
}

.toolbar {
    background: #f2f2f2;
    padding: 10px;
    margin: 10px 0;
    .el-form-item {
        margin-bottom: 10px;
    }
}

</style>
