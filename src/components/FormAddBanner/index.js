import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { LinearProgress } from '@material-ui/core';

const FormAddBanner = ({onClose, fetchAddBanner, active}) => {
	const defaultValues = {
		title: '',
		subtitle: '',
		textButton: '',
		urlButton: '',
		image: '',
	};
	if(active){
		onClose(true)
	}
  return (
	 <Formik
		initialValues={defaultValues}
		validate={(values) => {
			const errors = {};
			if (values.title.trim() === '') {
				errors.title = 'Campo Obligatorio';
			}

			if (values.subtitle.trim() === '') {
				errors.subtitle = 'Campo Obligatorio';
			}

			if (values.textButton.trim() === '') {
				errors.textButton = 'Campo Obligatorio';
			}

			if (values.urlButton.trim() === '') {
				errors.urlButton = 'Campo Obligatorio';
			}

			if (Object.keys(errors).length > 0) return errors;
		}}
		onSubmit={(values, { setSubmitting }) => {
			let formData = new FormData();
			formData.append('title', values.title);
			formData.append('subtitle', values.subtitle);
			formData.append('textButton', values.textButton);
			formData.append('urlButton', values.urlButton);
			formData.append('image', values.image);

			fetchAddBanner(formData)

			setTimeout(() => {
				setSubmitting(false);
			}, 500);
		}}
		render={({ submitForm, isSubmitting, values, setFieldValue }) => (
		  <Form className='formularyFormik' encType='multipart/form-data'>
			 <div>
				<Field
				  fullWidth
				  name='title'
				  className='form-control'
				  type='text'
				  placeholder='Titulo'
				  component={TextField}
				/>
				<Field
				  fullWidth
				  name='subtitle'
				  type='text'
				  className='form-control'
				  placeholder='Sub titulo'
				  component={TextField}
				/>
				<Field
				  fullWidth
				  name='textButton'
				  type='text'
				  className='form-control'
				  placeholder='Texto de Boton'
				  component={TextField}
				/>
				<Field
				  fullWidth
				  name='urlButton'
				  type='text'
				  className='form-control'
				  placeholder='Url boton'
				  component={TextField}
				/>
				<div>
				  <input
					 id='file'
					 name='image'
					 type='file'
					 className='form-control'
					 onChange={(event) => {
						setFieldValue('image', event.currentTarget.files[0]);
					 }}
				  />
				</div>
			 </div>

			 {isSubmitting && <LinearProgress />}

			 <button
				className='btn btn-sm btn-block btn-primary'
				type='submit'
				disabled={isSubmitting}
				onClick={() => submitForm}
			 >
				Enviar 
			 </button>
		  </Form>
		)}
	 />
  );
};

export default FormAddBanner;
