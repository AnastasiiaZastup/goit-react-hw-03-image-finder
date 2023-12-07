import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={values => {
          onSubmit(values.search);
        }}
      >
        <Form>
          <div>
            <Field
              type="text"
              id="search"
              name="search"
              placeholder="Search image and photo"
            />
            <button type="submit">Search</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
