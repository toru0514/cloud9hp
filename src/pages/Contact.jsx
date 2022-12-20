import React from 'react'
import './Contact.css'

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert('Form successfully submitted'))
      .catch((error) => alert(error))
  }

  return (
    <>
      <div className="container">
        <h1 className="contact-page">お問い合わせ</h1>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
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
          <button className="send-button" type="submit">送信する</button>
        </form>
      </div>
    </>
  )
}

export default ContactPage