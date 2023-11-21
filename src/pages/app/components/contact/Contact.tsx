import { FieldValues, useForm } from 'react-hook-form'
import styles from './Contact.module.css'
import { CSSProperties, ForwardedRef, forwardRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const errorStyle: CSSProperties = {
  color: 'var(--negative-color)',
  textAlign: 'start',
  width: '100%',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}

const options = [
  '',
  'Consultation',
  'Front-end Web Development',
  'Cross-platform Mobile App Development',
  'API & Backend Development',
  'MVP Application Development',
  'PWA Application Development',
  'Scripting',
  'Task automation using bash scripting',
  'Desktop Application Development',
  'Software Specification',
  'Full Stack Application Development',
  'Social Media ChatBot Development',
  'Embedded Systems Development',
  'Native Android App Development',
  'SQL Database Development',
  'Other(Please specify in the message)'
]

const Contact = forwardRef((_, ref) => {
  const { t } = useTranslation()
  const [selectedSubject, setSelectedSubject] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  //TODO: https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js
  //https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha
  const onSubmit = async (data: FieldValues, e) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: JSON.stringify({
        fullName: data['fullName'],
        email: data['email'],
        subject: data['subject'],
        message: data['message'],
        access_key: '52acdac4-b1b5-4c14-a373-41b68db7539b'
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <section
      className={`${styles.contact} hidden`}
      ref={ref as ForwardedRef<HTMLElement>}
    >
      <div className={styles.title}>
        <p>{t('contact_form')}</p>
      </div>
      {/*   <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data)
        })}
      >*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*   <form action='https://api.web3forms.com/submit' method='POST'>*/}
        <fieldset>
          <label htmlFor=''>Full Name</label>
          <input
            type='text'
            id=''
            placeholder={t('full_name')}
            {...register('fullName', { required: t('full_name_required') })}
          />
          {errors.fullName?.type === 'required' && (
            <p style={errorStyle} className={styles.p1}>
              {errors.fullName.message?.toString()}
            </p>
          )}

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

          <select
            name='subject'
            value={selectedSubject}
            required
            onChange={(event) => {
              setSelectedSubject(event.currentTarget.value)
            }}
          >
            {options.map((item, index) => {
              if (index == 0) {
                return (
                  <option value={''} disabled selected>
                    {t('choose_subject')}
                  </option>
                )
              } else {
                return <option value={item}>{item}</option>
              }
            })}
          </select>

          <label htmlFor=''>Message</label>
          <textarea
            id=''
            cols={30}
            rows={6}
            placeholder={t('message')}
            {...register('message', { required: t('message_required') })}
          ></textarea>
          {errors.message?.type === 'required' && (
            <p style={errorStyle} className={styles.p1}>
              {errors.message.message?.toString()}
            </p>
          )}
        </fieldset>

        {isLoading ? <p className={styles.loading}>↻</p> : null}

        <input type='submit' value={t('send_message')} />
      </form>

      <script src='https://web3forms.com/client/script.js' async defer></script>
    </section>
  )
})

export default Contact
