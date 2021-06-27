const LoadingSpinner: React.FC<{
  size?: "md-18" | "md-24" | "md-36" | "md-48"
}> = ({ size = "md-24" }) => (
  <div>
    <span
      className={`material-icons md-dark ${size} spinner`}
      aria-label="Cargando"
    >
      autorenew
    </span>

    <style jsx>
      {`
        .spinner {
          animation-name: spin;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-out;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
  </div>
)

export default LoadingSpinner
