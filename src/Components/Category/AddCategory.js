import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Formik, Field, Form } from 'formik';
import { TextField, Button  } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import yup from "yup";


export const AddCategory = () => {

  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Formik 
          initialValues={{ 
            catgoryName: "", 
          }}
          onSubmit={(data, { setSubmitting,  })=> {
            setSubmitting(true);
            //API Call here
            setSubmitting(false);
          }}
        >
        {({ values, isSubmitting, setFieldValue })=>(
          <Form>
            <Field name="catgoryName" type="input" placeholder="Category Name" as={TextField} />
            <div>
              <Field 
                name="image1" 
                type="file" 
                onChange={e => setFieldValue("file1", e.currentTarget.files[0]) }
              />
              { values.file1 ? (<Avatar alt={values.file1.name} src={values.file1.name} className={classes.avatar} />) : "" }
            </div>
            <div>
            <Field 
              name="image2" 
              type="file" 
              onChange={ e => setFieldValue("file2", e.currentTarget.files[0]) }
            />
            { values.file2 ? (<Avatar alt={values.file2.name} src={values.file2.name} className={classes.avatar} />) : "" }
            </div>
            <div>
              <Button disabled={isSubmitting} type="submit">Submit</Button>
            </div>
            <pre>{JSON.stringify(
              {
                catgoryName: values.catgoryName,
                file1: values.file1 ? values.file1.name : '',
                file2: values.file2 ? values.file2.name : '',
              }, null, 2)}</pre>
          </Form>
        )}
        </Formik>
      </Paper>
    </div>

  );

}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  paper:{
    padding: 10
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

export default AddCategory