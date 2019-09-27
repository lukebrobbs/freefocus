import React from "react"

export const ContactForm = () => {
  return (
    <form className="contactForm__wrapper">
      <div className="contactForm__emailName__wrapper">
        <input placeholder="Name" className="name__input" />
        <input placeholder="Email" type="email" className="email__input" />
      </div>
      <input placeholder="Subject" className="contactForm__input" />
      <textarea placeholder="Message" className="contactForm__input textArea" />
      <button className="contactForm__submitButton">SEND</button>
    </form>
  )
}
