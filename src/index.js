import Vue from 'vue'
import VueRouter from 'vue-router'
var Bpp = require('./comps/main.vue');
var Users = require('./comps/users.vue');
var Eillen = require('./comps/eillen.vue');
var App = Vue.extend({});

Vue.use(VueRouter);
var router = new VueRouter();
router.map({
    '/':{
        component: Bpp
    },
    '/users': {
        component: Users,  
        subRoutes:{
            '/':{
                component:{
                    template:'<p>Default router view</p>'
                }
            },
            '/:userId':{
                name: 'users',
                component: Eillen
            }
        }     
        // subRoutes:{
            // '/':{
            //     component:{
            //         template:'<p>Default sub view</p>'
            //     }
            // },
        //     '/bar':{
        //         query:{
        //             user:'1'
        //         },
        //         component: Bar,
        //         subRoutes:{
        //             '/':{
        //                 component:{
        //                     template:'<p>Default sub view</p>'
        //                 }
        //             },
        //             '/:userId': {
        //                 name: 'bar', // 给这条路径加上一个名字
        //                 component:{
        //                     template:'<p>userId view</p>'
        //                 }
        //             }
        //         }
        //     }
        // }
    }
});
router.beforeEach(function () {
    window.scrollTo(0, 0)
});
router.start(App, '#test');
