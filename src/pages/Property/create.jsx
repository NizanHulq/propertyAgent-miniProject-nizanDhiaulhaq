import MyButton from "@/components/button"
import { MyInput, MySelect, MyTextarea } from "@/components/input"
import Layout from "@/components/layout"
import { getProperty, propertySchema, storeProperty, updateProperty } from "@/utils/apis/properties"
import { faPlus, faPlusCircle, faPlusSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFormik } from "formik"
import { Form } from "reactstrap"
import { toast } from "react-toastify"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"


const CreateProperty = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            price: '',
            yearBuilt: '',
            propertyType: '',
            address: '',
            propertySize: '',
            bedrooms: '',
            bathrooms: '',
            garage: '',
            garageSize: '',
        },
        validationSchema: propertySchema,
        onSubmit: async (values) => {
            try {
                await toast.promise(id ? updateProperty(id, values) : storeProperty(values), {
                    pending: 'Loading...',
                    success: {
                        render: id ? "Selamat anda berhasil mengubah properti" : "Selamat anda berhasil menambahkan properti",
                        onClose: () => navigate("/")
                    },
                    error: id ? "Gagal mengubah properti" : "Gagal menambahkan properti"
                })
            } catch (error) {
                toast.error(id ? "Gagal mengubah properti" : "Gagal menambahkan properti");
                Error(error)
                console.log(error)
            }
        },
    })

    useEffect(() => {
        if (id) {
            const fetchProperty = async () => {
                try {
                    const response = await getProperty(id)
                    formik.setValues({
                        title: response.title,
                        description: response.description,
                        price: response.price,
                        yearBuilt: response.yearBuilt,
                        propertyType: response.propertyType,
                        address: response.address,
                        propertySize: response.propertySize,
                        bedrooms: response.bedrooms,
                        bathrooms: response.bathrooms,
                        garage: response.garage,
                        garageSize: response.garageSize,
                    });
                } catch (error) {
                    console.error(error);
                }
            }
            fetchProperty();
        }
    }, [id, formik.setValues]);

    return (
        <>
            <Layout className="bgc-f7">
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row align-items-center pb40">
                        <div className="col-lg-12">
                            <div className="">
                                <h2>Tambah Properti</h2>
                                <p className="text">Tambahkan properti yang akan dijual!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="ps-widget bgc-white bdrs12 default-box-shadow2 mb30 overflow-hidden position-relative">
                                <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
                                    <Form className="form-style1" onSubmit={formik.handleSubmit}>
                                        <h4 className="title fz17 mb30">Deskripsi Properti</h4>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <MyInput
                                                    label="Judul"
                                                    type="text"
                                                    placeholder="Judul"
                                                    field={formik.getFieldProps('title')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <MyTextarea
                                                    label="Deskripsi"
                                                    placeholder="Deskripsi"
                                                    field={formik.getFieldProps('description')}
                                                    form={formik}
                                                    style={{ height: "100px" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <h4 className="title fz17 mb30">Detail Properti</h4>
                                            <div className="col-md-4">
                                                <MyInput
                                                    label="Harga"
                                                    type="text"
                                                    placeholder="Rp. 1000.000"
                                                    field={formik.getFieldProps('price')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <MyInput
                                                    label="Tahun"
                                                    type="text"
                                                    placeholder="Tahun Dibangun"
                                                    field={formik.getFieldProps('yearBuilt')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <MySelect
                                                    label="Tipe Properti"
                                                    field={formik.getFieldProps('propertyType')}
                                                    form={formik}
                                                    options={[
                                                        { value: "Rumah", label: "Rumah" },
                                                        { value: "Apartemen", label: "Apartemen" },
                                                    ]}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <MyTextarea
                                                    label="Alamat"
                                                    placeholder="Alamat properti"
                                                    field={formik.getFieldProps('address')}
                                                    form={formik}
                                                    style={{ height: "100px" }}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <MyInput
                                                    label="Luas Properti"
                                                    type="text"
                                                    placeholder="Luas Properti (m2)"
                                                    field={formik.getFieldProps('propertySize')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <MyInput
                                                    label="Kamar Tidur"
                                                    type="text"
                                                    placeholder="Jumlah kamar tidur"
                                                    field={formik.getFieldProps('bedrooms')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <MyInput
                                                    label="Kamar Mandi"
                                                    type="text"
                                                    placeholder="Jumlah kamar mandi"
                                                    field={formik.getFieldProps('bathrooms')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <MyInput
                                                    label="Garasi"
                                                    type="text"
                                                    placeholder="Garasi"
                                                    field={formik.getFieldProps('garage')}
                                                    form={formik}
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <MyInput
                                                    label="Luas Garasi"
                                                    type="text"
                                                    placeholder="Luas Garasi (m2)"
                                                    field={formik.getFieldProps('garageSize')}
                                                    form={formik}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 d-flex justify-content-end">
                                                <MyButton
                                                    label={id ? "Update Properti" : "Tambah Properti"}
                                                    type="submit"
                                                    icon={<FontAwesomeIcon className="me-2" icon={faPlusSquare} />}
                                                />
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CreateProperty