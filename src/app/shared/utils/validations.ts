import moment from "moment";
import * as yup from "yup";

export const schemaLogin = yup.object({
  username: yup.string().required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaNewPassword = yup.object({
  temporary: yup
    .string()
    .required("Campo obrigatório")
    .max(8, "Deve conter no máximo 8 digítos")
    .min(6, "Deve conter no minímo 6 digítos"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&!*_\-])(?=.{8,})[A-Za-z\d@#$%^&!*_\-]+$/,
      "A senha deve conter 1 letra maiúsculo, 1 caracter especial, 1 número e ter pelo menos 8 caracteres"
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .test(
      "passwords-match",
      "As senhas não coincidem",
      function (value: string) {
        return this.parent.password === value;
      }
    ),
});

export const schemaResetPassword = yup.object({
  "code-1": yup.string().required(" "),
  "code-2": yup.string().required(" "),
  "code-3": yup.string().required(" "),
  "code-4": yup.string().required(" "),
  "code-5": yup.string().required(" "),
  "code-6": yup.string().required(" "),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&!*_\-])(?=.{8,})[A-Za-z\d@#$%^&!*_\-]+$/,
      "A senha deve conter 1 letra maiúsculo, 1 caracter especial, 1 número e ter pelo menos 8 caracteres"
    ),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .test(
      "passwords-match",
      "As senhas não coincidem",
      function (value: string) {
        return this.parent.password === value;
      }
    ),
});

export function checkRequiredCodes(obj: any) {
  for (const key in obj) {
    if (key.startsWith("code") && obj[key].message === " ") {
      return "Campo obrigatório";
    }
  }
}
