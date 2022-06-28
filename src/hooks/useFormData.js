import { ref } from 'vue'

export const useFormData = (config) => {
  // 1拿到表单的配置项
  const formItems = config?.formItems ?? []
  // 1.2.动态创建绑定表单配置项
  const originFormData = {}
  for (const item of formItems) {
    originFormData[item.field] = ''
  }
  const formData = ref(originFormData)

  return formData
}
