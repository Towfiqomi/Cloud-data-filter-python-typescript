import React from "react"
import { Field, ErrorMessage } from "formik"

export const Checkbox = (props : any) => {
  const { label, name, options, ...rest } = props
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {(formik: any) => {
          const { field } = formik
          return options && options.map((option : any) => {
            return (
              <div key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      <ErrorMessage name={name} />
    </div>
  )
}

export default Checkbox