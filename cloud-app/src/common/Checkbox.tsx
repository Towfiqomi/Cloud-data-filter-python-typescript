import React from "react";
import { Field, FieldProps } from "formik";

interface Props {
  label: string;
  value: boolean;
}

export const Checkbox = ({ label }: Props): JSX.Element => (
  <Field
    name={label}
    render={({ field }: FieldProps) => <input {...field} type="checkbox" checked={field.value} />}
  />
);
