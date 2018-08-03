import './topNav.less';
export default () => {
    return {
        restrict: 'EA',
        replace: true,
        templateUrl: './components/topNav/topNav.html',
        controller: ($scope) => {
            layui.use(['layer', 'element'], function() {
                var element = layui.element,
                    layer = layui.layer,
                    $ = layui.jquery;
                //…
            });
        }
    }
}