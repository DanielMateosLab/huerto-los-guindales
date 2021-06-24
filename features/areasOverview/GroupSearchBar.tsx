import { Field, Form, Formik } from "formik"

export default function GroupSearchBar() {
  return (
    <Formik
      initialValues={{ groupNameQuery: "" }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.groupNameQuery)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            className="nameField"
            type="text"
            name="groupNameQuery"
            id="groupNameQuery"
            aria-label="Filtrar por nombre"
            placeholder="Filtrar por nombre"
          />

          <button type="submit" disabled={isSubmitting}>
            Buscar
          </button>

          <style jsx>{`
            :global(.nameField) {
              margin-right: 0.5rem;
            }
          `}</style>
        </Form>
      )}
    </Formik>
  )
}
