// window.alert(1)
require(['/assets/js/config.js'], function () {
  require(['jquery', '/assets/js/common.js', 'datepicker', 'validate', 'form', 'zh'], function ($) {
    // $(input).datepicker()

    // 日期插件初始化
    $('input[name="tc_join_date"]').datepicker({
      format: 'yyyy/mm/dd',
      language: 'zh-CN'
    })

    // 表单控件验证
    $('form').validate({
      submitHandler: function () {
        // 验证通过会执行这个方法
        // 这里调用发ajax请求的方法
        $('form').ajaxSubmit({
          url: '/api/teacher/add',
          type: 'post',
          // data:
          success: function (data) {
            if (data.code === 200) {
              window.alert('添加成功！')
            }
          }
        })
      },
      rules: {
        tc_name: {
          required: true,
          rangelength: [2, 4]
        },
        tc_pass: {
          required: true
        },
        tc_join_data: {
          required: true,
          date: true
        }
      },
      messages: {
        tc_name: {
          required: '不能为空',
          rangelength: '长度要在2到4之间'
        },
        tc_pass: {
          required: '密码不能为空'
        }
      }
    })
  })
})
