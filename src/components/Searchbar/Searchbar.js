import React from 'react';
import { Formik } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        intialValue={{
          search: '',
        }}
        onSubmit={values => {
          onSubmit(values.search);
        }}
      >
        <Form>
          <div>
            <input
              id="search"
              name="search"
              placeholder="Search image and photo"
            />
            <button type="submit"></button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
