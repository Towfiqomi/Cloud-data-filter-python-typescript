import { Field, Form, Formik, FormikProps } from "formik";
import CustomSelect from "../common/Select";
import "./CloudList.css"
import useCloudFilters from "../hooks/useCloudFilters"
import { useEffect } from "react";

export interface FormValues {
  region: string;
  provider: string[];
}

const defaultValues: FormValues = {
  region: "",
  provider: []
};

const providerOptions = [
  {
    label: "AWS",
    value: "aws"
  },
  {
    label: "Google",
    value: "google"
  },
  {
    label: "Azure",
    value: "azure"
  },
  {
    label: "Do",
    value: "do"
  },
  {
    label: "Up cloud",
    value: "upcloud"
  }
];

export const ClouFilter = () => {

  const {providers, regions, fetchCloudFilters} = useCloudFilters();

  useEffect(() => {
    const fetch = async () =>{
      await fetchCloudFilters();
    };
    fetch()
  }, [])

  const onSubmit = (values: FormValues) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderForm = (formikBag: FormikProps<FormValues>) => (
    <Form>
      <label className="text-style">
        Cloud Provider
      </label>
        <Field
          className="custom-select"
          name="singleProvider"
          options={providers}
          component={CustomSelect}
          placeholder="Select Cloud Provider"
          isMulti={false}
        />
      <label className="text-style">
        Cloud Region
      </label>
      <Field
        className="custom-select"
        name="multiProvider"
        options={regions}
        component={CustomSelect}
        placeholder="Select Region"
      />
      <button type="submit">Filter Cloud</button>
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
    />
  );
};
