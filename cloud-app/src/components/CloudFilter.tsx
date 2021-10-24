import { Field, Form, Formik, FormikProps } from "formik";
import CustomSelect from "../common/Select";
import "./CloudList.css"
import useCloudFilters from "../hooks/useCloudFilters"
import { useEffect } from "react";
import {Checkbox} from "../common/Checkbox";

export interface FormValues {
  region: string;
  provider: string[],
  distance: boolean
}

const defaultValues: FormValues = {
  region: "",
  provider: [],
  distance : false
};

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
          name="provider"
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
        name="region"
        options={regions}
        component={CustomSelect}
        placeholder="Select Region"
      />
      <Field
        label="distance"
        value= "true"
        component={Checkbox}
      />
      <label className="text-style">
        Distance
      </label>
      <div>
        <button className="form-button-style" type="submit">Filter Cloud</button>
      </div>
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
