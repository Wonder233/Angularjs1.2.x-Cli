/**
 * Created by wonder
 */
let pageHtml = {};
let templs = require.context('./pages/', true, /^((?!\/test\/).)*.html$/);
let ctrls = require.context('./pages/', true, /^((?!\/test\/).)*.ctrl.js$/);

templs.keys().forEach(key => {
    pageHtml[key] = templs(key)
});

export default ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise("/index/realtimeWarning");
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: pageHtml['./login/login.html'],
            controller: ctrls('./login/login.ctrl.js').default,
            controllerAs: 'login',
        })
        .state('index', {
            url: '/index',
            templateUrl: pageHtml['./common/common.html'],
            controller: ctrls('./common/common.ctrl.js').default,
            controllerAs: 'common',
            abstract: true,
        })
        .state('realtimeWarning', {
            url: '/realtimeWarning',
            parent:'index',
            templateUrl: pageHtml['./realtimeWarning/realtimeWarning.html'],
            controller: ctrls('./realtimeWarning/realtimeWarning.ctrl.js').default,
            controllerAs: 'realtimeWarning',
        })
        .state('warningManage', {
            url: '/warningManage',
            parent:'index',
            templateUrl: pageHtml['./warningManage/warningManage.html'],
            controller: ctrls('./warningManage/warningManage.ctrl.js').default,
            controllerAs: 'warningManage',
        })
        .state('pointManage', {
            url: '/pointManage',
            parent:'index',
            templateUrl: pageHtml['./pointManage/pointManage.html'],
            controller: ctrls('./pointManage/pointManage.ctrl.js').default,
            controllerAs: 'pointManage',
        })
        .state('modelManage', {
            url: '/modelManage',
            parent:'index',
            templateUrl: pageHtml['./modelManage/modelManage.html'],
            controller: ctrls('./modelManage/modelManage.ctrl.js').default,
            controllerAs: 'modelManage',
        })
        .state('plant', {
            url: '/plant/{id}',
            parent:'index',
            templateUrl: pageHtml['./plant/plant.html'],
            controller: ctrls('./plant/plant.ctrl.js').default,
            controllerAs: 'plant',
        })
}