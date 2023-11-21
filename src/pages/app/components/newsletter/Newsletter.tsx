import { useForm } from 'react-hook-form'
import styles from './Newsletter.module.css'
import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'

const errorStyle: CSSProperties = {
  color: 'var(--negative-color)',
  textAlign: 'start',
  width: '100%',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}

const Newsletter = () => {
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  return (
    <div className={styles.newsletter}>
      <p>Newsletter 📧</p>
      <p>
        Kindly subscribe to my newsletter to remain <br />
        informed about my latest projects.
      </p>
      <form onSubmit={handleSubmit((data) => console.log(data))} method='post'>
        <fieldset>
          <label htmlFor=''>Email</label>
          <input
            type='email'
            placeholder='Email: example@mail.com'
            id=''
            {...register('email', { required: t('email_required') })}
          />
          {/*Here we display error messages */}
          {errors.email?.type === 'required' && (
            <p style={errorStyle} className={styles.p1}>
              {errors.email.message?.toString()}
            </p>
          )}
          {errors.email?.type === 'pattern' && (
            <p style={errorStyle} className={styles.p1}>
              Invalid email format!
            </p>
          )}
        </fieldset>

        <input type='submit' value='→' />
      </form>
    </div>
  )
}
export default Newsletter
