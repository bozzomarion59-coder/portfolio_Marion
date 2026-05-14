import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__inner">
        <span className="notfound__code">404</span>
        <h1>Page introuvable</h1>
        <p>Cette page n'existe pas. Mais le reste du portfolio, oui !</p>
        <Link to="/" className="btn btn--primary">
          Retour à l'accueil
        </Link>
      </div>
    </main>
  )
}
