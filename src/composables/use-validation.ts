import type { Ref } from 'vue'
import { ref } from 'vue'
import type { ZodIssue } from 'zod'
import { z, ZodString } from 'zod'

type ValidMethodItem = [string] | [string, any]
type FieldsType = { [K in keyof ValidMethods]: Ref<string> };

export type ValidMethods = {
  [key: string]: ValidMethodItem[]
}

const validMethodMapping = (previous: ZodString, method: string, value?: any) => {
  const map: { [key: string]: (arg: any) => ZodString } = {
    min: (value: number) => previous.min(value),
    max: (value: number) => previous.max(value),
    email: () => previous.email(),
    regex: (value: RegExp) => previous.regex(value)
    // 필요에 따라 추가 필요.
  }
  return (map[method] || (() => previous))(value)
}

const dynamicChain = (methods: ValidMethodItem[]) =>
  methods.reduce((previousValue, [method, value]) => validMethodMapping(previousValue, method, value), z.string())

export function useValidation(validator: ValidMethods) {
  const fields = Object.keys(validator).reduce((acc, field) => {
    acc[field] = ref('')
    return acc
  }, {} as Record<string, Ref<string>>)
  
  const validationSchema = z.object(
    Object.entries(validator).reduce((acc, [field, methodItems]) => {
      acc[field] = dynamicChain(methodItems)
      return acc
    }, {} as Record<string, ZodString>)
  )
  const validateForm = (): ZodIssue[] | null => {
    const values = Object.entries(fields).reduce((acc, [field, ref]) => {
      acc[field] = ref.value
      return acc
    }, {} as Record<string, string>)
    const result = validationSchema.safeParse(values)
    if (!result.success) return result.error.issues
    return null
  }
  
  return { ...fields, validateForm } as FieldsType & { validateForm: () => ZodIssue[] | null }
}