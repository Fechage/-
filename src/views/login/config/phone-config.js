export default {
  number: [
    {
      required: true,
      message: '请输入电话号码',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '必须为11位大陆手机号码',
      trigger: 'blur'
    }
  ],
  verify: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{4}$/,
      message: '',
      trigger: 'blur'
    }
  ]
}
