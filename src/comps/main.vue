<template>
    <div>
        <h2>一、双向绑定</h2>
        <div>
            <p>{{ message1 }}</p>
            <input v-model="message1">
        </div>
    </div>

    <div>
        <h2>二、 渲染列表</h2>
        <div>
            <ul>
                <li v-for="todo in todos1">
                  {{ todo.text }}
                </li>
            </ul>
        </div>
    </div>

    <div>
        <h2>三、处理用户输入</h2>
        <div>
            <p>{{ message2 }}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
    </div>
    <div>
        <h2>四、综合</h2>
        <div>
            <input v-model="newTodo" v-on:blur="addTodo">
            <ul>
                <li v-for="todo in todos2">
                    <span>{{ todo.text }}</span>
                    <button v-on:click="removeTodo($index)">X</button>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <h2>五、VueRouter路由跳转</h2>
        <a v-link="{ path:'/users'}">Go to Users</a>
    </div>
    <div>
        <h2>六、组件注册</h2>
        <my-unit></my-unit>
        <my-component></my-component>
        <!-- is特性 -->
        <table>
            <tr is="my-unit"></tr>
        </table>
    </div>  
    <div>
        <h2>七、Props：从父组件传递数据给子组件</h2>
        <child my-message="hello!"></child><!-- 默认为单向绑定 -->

        <input v-model="parentMsg">
        <child v-bind:my-message="parentMsg"></child>
    </div>  
    <div>
        <h2>八、Ajax</h2>
        <p>{{test}}</p>
    </div>     
</template>
<script>
    import $ from 'jquery'
    import Vue from 'vue'; 
    import Unit from './unit.vue';
    var MyComponent = Vue.extend({
        template: '<div>A custom component!</div>'
    })
    Vue.component('my-unit', Unit);//注册组件，全局注册
    Vue.component('my-component', MyComponent);
    Vue.component('child', {
        props: ['myMessage'],
        template: '<p>{{ myMessage }}</p>'
    });
    module.exports = {
        data:function(){//先进入这里的data，再进入路由data钩子
            return{
                message1:"xixihaha",
                message2:"nice",
                newTodo:"",
                todos1: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue.js' },
                    { text: 'Build Something Awesome' }
                ],
                todos2: [
                    { text: 'hahaxixi' }
                ],
                parentMsg:"Mesg from parent",
                test:""               
            }
        },
        methods:{
            reverseMessage:function(){
                this.message2 = this.message2.split('').reverse().join('');
            },
            addTodo: function () {
                var text = this.newTodo.trim();
                if(text){
                    this.todos2.push({text:text}),
                    this.newTodo = ''
                }
            },
            removeTodo: function (index) {
                this.todos2.splice(index, 1)
            }
        },
        ready:function(){
        },
        route:{
            data:function(){
                var _self = this;
                $.ajax({         
                    url: '../../data/test.json',
                    type: 'GET',
                    dataType: 'json',
                    success: function(data){ 
                        _self.test = data.test;
                    },
                    error: function(xhr, errorType, error){
                        console.log(errorType);
                    }
                });
                return { test:""}   
            }
        },   
    }
</script>
<style lang="stylus">
html, body
  font-family Verdana
  font-size 13px
  background-color rgba(79, 202, 62, 0.09)
</style>