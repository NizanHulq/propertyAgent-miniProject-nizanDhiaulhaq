import * as yup from "yup";

export const messageSchema = yup.object({
  name: yup.string().required("Nama harus diisi"),
  phone: yup.string().required("Nomor Telepon harus diisi"),
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email harus diisi"),
  message: yup.string().required("Pesan harus diisi"),
});
