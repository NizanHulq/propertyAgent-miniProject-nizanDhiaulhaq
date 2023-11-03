import * as yup from "yup";

export const propertySchema = yup.object({
  title: yup.string().required("Judul wajib diisi"),
  description: yup
    .string()
    .required("Deskripsi wajib diisi")
    .max(255, "Deskripsi tidak boleh lebih dari 255 karakter"),
  price: yup.number().required("Harga wajib diisi"),
  address: yup.string().required("Alamat wajib diisi"),
  propertySize: yup.number().required("Ukuran properti wajib diisi"),
  bedrooms: yup
    .number()
    .required("Jumlah kamar tidur wajib diisi")
    .max(999, "Jumlah kamar tidur tidak boleh lebih dari 3 digit angka"),
  bathrooms: yup
    .number()
    .required("Jumlah kamar mandi wajib diisi")
    .max(999, "Jumlah kamar mandi tidak boleh lebih dari 3 digit angka"),
  garage: yup
    .number()
    .required("Jumlah garasi wajib diisi")
    .max(999, "Jumlah garasi tidak boleh lebih dari 3 digit angka"),
  garageSize: yup.number().required("Ukuran garasi wajib diisi"),
  yearBuilt: yup
    .date()
    .required("Tahun pembangunan wajib diisi")
    .min(1000, "Tahun pembangunan tidak valid")
    .max(9999, "Tahun pembangunan tidak valid"),
  propertyType: yup.string().required("Tipe properti wajib diisi"),
});
