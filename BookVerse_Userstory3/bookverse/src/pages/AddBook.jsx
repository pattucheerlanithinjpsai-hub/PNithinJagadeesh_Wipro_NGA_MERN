import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BookActions } from '../flux/BookActions';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: '',
    author: '',
    price: ''
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive')
  });

  const onSubmit = (values, { resetForm }) => {
    const newBook = { ...values, id: Date.now() };
    BookActions.addBook(newBook);
    resetForm();
    navigate('/home'); // SPA navigation without reload
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <div>
            <label>Title: </label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Author: </label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Price: </label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Add Book</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBook;
