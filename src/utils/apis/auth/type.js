import * as yup from "yup";

export const registerSchema = yup.object({
  username: yup.string().required("Username tidak boleh kosong"),
  password: yup
    .string()
    .required("Password tidak boleh kosong")
    .min(8, "Password minimal terdiri dari 8 karakter")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Password harus terdiri dari huruf kapital, huruf biasa, dan angka"
    ),
  role: yup.string().required("Role tidak boleh kosong"),
});

export const loginSchema = yup.object({
  username: yup.string().required("Username tidak boleh kosong"),
  password: yup.string().required("Password tidak boleh kosong"),
});
