import { FieldProps } from "formik";
import Select from "react-select";
import { Option } from "../types";

interface CustomSelectProps extends FieldProps {
  options: Option[];
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}: CustomSelectProps) => {
  const onChange = (option: Option | Option[]) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter((option: { value: any; }) => field.value.indexOf(option.value) >= 0)
        : options.find((option: { value: any; }) => option.value === field.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

export default CustomSelect;
