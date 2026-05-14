import { useState } from 'react'

const EMAIL = 'bozzomarion59@gmail.com'

/**
 * Formulaire de contact en `mailto:`.
 * Le visiteur remplit les champs, son client mail s'ouvre avec le message
 * pré-rempli, il l'envoie depuis sa propre adresse, et l'email arrive
 * directement dans la boîte de Marion. Aucune API, aucun serveur.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', body: '' })
  const [sent, setSent] = useState(false)

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const bodyText = `${form.body}\n\n— ${form.name} (${form.email})`
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(bodyText)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <label>
          <span>Nom</span>
          <input
            type="text"
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={update('name')}
            placeholder="Votre nom"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="vous@entreprise.fr"
          />
        </label>
      </div>

      <label>
        <span>Sujet</span>
        <input
          type="text"
          required
          minLength={3}
          maxLength={200}
          value={form.subject}
          onChange={update('subject')}
          placeholder="Proposition d'alternance, mission, échange…"
        />
      </label>

      <label>
        <span>Message</span>
        <textarea
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          value={form.body}
          onChange={update('body')}
          placeholder="Bonjour Marion, …"
        ></textarea>
      </label>

      <button type="submit" className="btn btn--primary">
        <i className="fa-solid fa-paper-plane"></i> Envoyer le message
      </button>

      {sent && (
        <p className="contact-form__feedback contact-form__feedback--success">
          <i className="fa-solid fa-circle-check"></i> Votre client mail vient
          de s'ouvrir avec le message pré-rempli — cliquez « Envoyer » pour le
          transmettre.
        </p>
      )}
    </form>
  )
}
