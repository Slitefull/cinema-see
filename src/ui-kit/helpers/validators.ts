import * as yup from "yup";


const PASSWORD_MIN_LENGTH = 8;
const EMAIL_MAX_LENGTH = 100;

export const requiredString = () =>
  yup.string().nullable().required("This field is required!");

export const limitedString = (
  options: {
    maxLength: number;
    minLength?: number;
  },
  required = false
) => {
  let string = required ? yup
      .string()
      .max(
        options.maxLength,
        `Value is too long ${options.maxLength}`
      )
    : yup.string()
      .nullable(true)
      .max(
        options.maxLength,
        `ui-kit.value-is-too-long ${options.maxLength}`
      );

  if (options.minLength !== undefined) {
    string = string.min(
      options.minLength,
      `ui-kit.value-is-too-short ${options.minLength}`
    );
  }

  if (required) {
    string = string.required(("field is required"));
  }

  return string;
};

export const phone = (length: number, required = false) =>
  required
    ? yup
      .string()
      .required(("field is required"))
      .matches(
        /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
        "ui-kit.phone-should-be-numeric"
      )
      .max(length, `"ui-kit.value-is-too-long ${length}`)
    : yup
      .string()
      .nullable(true)
      .matches(
        /^$|^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
        ("ui-kit.phone-should-be-numeric")
      )
      .max(length, `ui-kit.value-is-too-long ${length}`);

export const checkedCheckbox = () => yup.boolean().oneOf([true], ("ui-kit.accept_terms"));

export const email = (required = false) => {
  let email = yup
    .string()
    .email("not valid email")
    .max(
      EMAIL_MAX_LENGTH,
      `max length is ${EMAIL_MAX_LENGTH}`
    );

  if (required) {
    email = email.required("field is required");
  }

  return email;
};

export const password = () =>
  yup
    .string()
    .required("field is required")
    .min(
      PASSWORD_MIN_LENGTH,
      `min length is ${PASSWORD_MIN_LENGTH}`
    )
    .matches(
      /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/gi,
      ("ui-kit.required_one_letter_digit_special_character")
    );

export const confirmPassword = (rePasswordRef: string) =>
  yup
    .string()
    .required("field is required")
    .oneOf([yup.ref(rePasswordRef)], ' ');
