import React from 'react'
import styles from './contact.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const ContactPage = () => {

  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error))
  }

  return (
    <>
      <div className={cx('container')}>
        <h1 className={cx('contact-page')}>お問い合わせ</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <label htmlFor="name">お名前（必須）</label>
            <input name="name" type="text" required/>
          </div>
          <div>
            <label htmlFor="email">メールアドレス（必須）</label>
            <input name="email" type="email" required/>
          </div>
          <div>
            <label htmlFor="content">お問い合わせ内容</label>
            <textarea
              name="content"
              rows="10"
              required
            />
          </div>
          <button className={cx('send-button')} type="submit" onSubmit={handleSubmit}>送信する</button>
        </form>
      </div>
    </>
  )
}

export default ContactPage