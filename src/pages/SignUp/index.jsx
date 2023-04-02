import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { signUpFetch } from '../../api/user';
import { TOKEN } from '../../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import styles from './index.module.css'

const signUpSchema = Yup.object().shape({
  email: Yup.string().email('Некорректный email').required('Required'),
  password: Yup.string().required('Required'),
  group: Yup.string().required('Required'),
});

export const SignUp = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem(TOKEN)
    if (token) navigate('/products')
  }, [navigate])

  const initialValuesSignUp = {
    email: '',
    password: '',
    group: '',
  }

  const onSubmit = async (values) => {
    const res = await signUpFetch(values)
    if (res.ok) {
      const responce = await res.json()
      localStorage.setItem(TOKEN, responce.token)
      return navigate('/signin')
    }

    // return
  }

  return (
    <div className={styles.signUpForm}>
      <h1>Регистрация</h1>
      <Formik
        initialValues={initialValuesSignUp}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
      >
        <Form className={styles.classForm}>
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="password" type='password' />
          <Field id="group" name="group" placeholder="group" type='group' />

          <button type="submit">Submit</button>
          {/* <p>Если вы не зарегистрированы, <Link className = {styles.linkStyle} to={'/signup'}>Регистрация</Link></p> */}
        </Form>
      </Formik>
    </div>
  )
}
