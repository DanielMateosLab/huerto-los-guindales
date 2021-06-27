const ErrorMessage: React.FC<{
  title: string
  description?: string
  details?: string
}> = (props) => (
  <article className="container">
    <div className="title">
      <span className="material-icons md-36 error-icon">error</span>
      <h3>{props.title}</h3>
    </div>

    <p>{props.description}</p>
    {props.details && (
      <section className="details">
        <h4>Detalles</h4>
        <p>{props.details}</p>
      </section>
    )}

    <style jsx>
      {`
        .container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;

          color: rgba(255, 255, 255, 0.95);
          background-color: rgb(210, 0, 0);

          padding: 2rem 0.5rem;

          animation-name: appear;
          animation-duration: 0.5s;
          animation-timing-function: ease-out;
        }
        @keyframes appear {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .title {
          display: flex;
          align-items: center;
        }
        .error-icon {
          margin-right: 0.5rem;
        }

        h3 {
          margin: 0;
          font-size: 1.25rem;
        }

        h4 {
          margin: 0;
        }
        .details {
          font-size: 14px;
        }
        .details p {
          margin: 0.5rem;
        }
      `}
    </style>
  </article>
)

export default ErrorMessage
