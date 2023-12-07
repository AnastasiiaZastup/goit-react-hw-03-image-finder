import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={values => {
          onSubmit(values);
        }}
      >
        <Form>
          <div>
            <Field
              type="text"
              name="query"
              placeholder="Search image and photo"
            />
            <button type="submit">Search</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
