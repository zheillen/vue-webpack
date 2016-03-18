<template>
    <my-unit></my-unit>
    <div>
        <p>当前路径: {{$route.path}}</p>
        <p>当前params参数: {{$route.params.userId}}</p>
        <p>当前query参数: {{$route.query.code}}</p> 
        <p>Current count:{{msg}}</p>
        <a v-link="{ name: 'users', params: { userId: 'eillen' }, query:{code:'xixi'}}">Go to users/eillen</a>
        <div class="child">
            <h2>子路由</h2>
            <router-view></router-view>
        </div>        
    </div>
</template>

<script>
    module.exports = {
        data:function(){
            return{
                msg:"xixi"
            }
        }
    }
</script>
<style lang="stylus">
.child
  background-color rgba(202, 62, 199, 0.42)
</style>