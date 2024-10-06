import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import css from "./ContactForm.module.css"

const ContactForm = ({addUser}) => {

  const nameFormId = nanoid();
  const numberFormId = nanoid()

  const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

  const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be less than 20 characters")
    .required("Name is required"),
  number: Yup.string()
    .required("Phone is required")
    .matches(
      phoneNumberRegex,
      "Invalid phone number. Phone must be +380XXXXXXXXX"
    ),
  })

  const initialValues = {
    id: nanoid(),
    name: "",
    number: ""
  }

  const handleSubmit = (value, actions) => {
    addUser(value);
    actions.resetForm();
  }

  return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className={css.formikForm}>
          <label htmlFor={nameFormId}>Name</label>
        <Field type="text" name="name" id={nameFormId} placeholder="Tom Ford"/>
        <ErrorMessage name="username" component="span"/>
          <label htmlFor={numberFormId}>Number</label>
        <Field type="tel" name="number" id={numberFormId} placeholder="380 XX XXX XX XX "/>
        <ErrorMessage name="number" component="span"/>
          <button type='submit'>Add contact</button>
        </Form>
      </Formik>
  )
}

export default ContactForm
