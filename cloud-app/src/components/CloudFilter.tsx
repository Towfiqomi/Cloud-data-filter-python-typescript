import { Field, Form, Formik, FormikProps } from "formik";

import CustomSelect from "../common/Select";
import { Checkbox } from "../common/Checkbox";
import { Option, CloudFiltersFormValues } from "../types";

import "./CloudList.css";

const defaultValues: CloudFiltersFormValues = {
  region: "",
  provider: "",
  distance: false,
};

interface Props {
  providers: Option[];
  regions: Option[];
  handleSubmit: (current_page: number, data: CloudFiltersFormValues) => void;
}

export const ClouFilter = ({ providers, regions, handleSubmit }: Props) => {
  const onSubmit = (values: CloudFiltersFormValues) => {
    handleSubmit(1, values);
  };

  const ClouFilterForm = (formikBag: FormikProps<CloudFiltersFormValues>) => (
    <Form>
      <label className="text-style">Cloud Provider</label>
      <Field
        name="provider"
        options={providers}
        component={CustomSelect}
        placeholder="Select Cloud Provider"
        isMulti={false}
      />
      <label className="text-style">Cloud Region</label>
      <Field name="region" options={regions} component={CustomSelect} placeholder="Select Region" />
      <Field label="distance" value="true" component={Checkbox} />
      <label className="text-style">Distance</label>
      <div>
        <button className="form-button-style" type="submit">
          Filter Cloud
        </button>
      </div>
    </Form>
  );

  return <Formik initialValues={defaultValues} render={ClouFilterForm} onSubmit={onSubmit} />;
};
