/**
 * Created by wonder
 * @Date 2018-8-2 10:14:36
 */
import './styles/index.less';
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import route from './_route.js';
import './components/index'; // 加载组件
import './scripts/common/layui.config'; // 加载layui模块

angular.module('myApp', [uiRouter,'myApp.components'])
    .config(route)
    .run(['$window', '$rootScope', '$location', ($window, $rootScope) => {
        $window.angular = angular;
        $window.$ = angular.element;
        $rootScope.title = "powerPlant";
        $rootScope.$on('$locationChangeSuccess', function(event, next, current) {
            console.log(current);

        });
    }]);