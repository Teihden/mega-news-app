# Forms

Forms use Formik for form state and Yup for validation.

Current patterns:

- Form components live in the owning feature's `ui/` folder.
- Form value, request, and response types live in the feature's `config/` folder.
- Validation schema builders live in `lib/`.
- Initial-value helpers and persistence helpers also live in `lib/`.
- API mutations come from `@shared/api`.
- Submit feedback uses `react-hot-toast`, usually through `toast.promise`.

Formik usage:

- Type `Formik` with the form value interface.
- Use `initialValues` from a helper when values need persistence or defaults.
- Use `validationSchema` from a Yup schema builder.
- Use `Field` with existing shared inputs when possible.
- Use `ErrorMessage` with a styled error component from local `styles.ts`.

Validation:

- Build Yup schemas in `lib/` so validation messages can be passed from i18n.
- Keep validation messages translated through `useTranslation`.
- Do not hard-code user-facing validation text in schema files.

Accessibility:

- Keep a real `label` for every form control. Use `visually-hidden` when the design does not show a visible label.
- Preserve `htmlFor`, `id`, `name`, `title`, and `autoComplete` where relevant.
- Disable submit controls while submitting or when known validation errors should block submission.

Persistence:

- Use `sessionStorage` only for short-lived form drafts.
- Keep storage keys in `config/`.
- Remove persisted drafts after successful submission.

Submission:

- Convert payloads to the expected request shape before calling an API mutation.
- Use `.unwrap()` on RTK Query mutations when promise success/error handling is needed.
- Keep success, loading, and error toast messages localized.
