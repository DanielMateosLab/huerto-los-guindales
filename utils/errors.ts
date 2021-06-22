export class MissingEnvVarError extends Error {
  status = 500

  constructor(envVar: string) {
    super(`Missing ${envVar} environment variable`)
  }
}
