import Layout from "@/components/layout"

import homeImg from "@/assets/images/home.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBath, faBed, faExpand, faPaperPlane, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { MyInput, MyTextarea } from "@/components/input"
import { useFormik } from "formik"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProperty } from "@/utils/apis/properties"
import { Form } from "reactstrap"
import { messageSchema, storeMessage } from "@/utils/apis/contacts"
import MyButton from "@/components/button"
import { toast } from "react-toastify"
const Property = () => {
    const { id } = useParams()
    const [property, setProperty] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)
    const [user, setUser] = useState({})

    const formatRupiah = (value) => {
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        })
        return formatter.format(value)
    }

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        setUser(JSON.parse(localStorage.getItem('user')))
        const fetchProperty = async () => {
            try {
                const response = await getProperty(id)
                setProperty(response)
            } catch (error) {
                console.log(error);
            }
        }
        fetchProperty()
    }, [])

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
        },
        validationSchema: messageSchema,
        onSubmit: async (values) => {
            try {
                await toast.promise(storeMessage(values), {
                    pending: 'Loading...',
                    success: {
                        render: "Selamat anda berhasil mengirim pesan",
                        onClose: () => {
                            formik.handleReset()
                        }
                    },
                    error: "Gagal mengirim pesan"
                });
            } catch (error) {
                toast.error("Gagal mengirim pesan");
                Error(error);
            }

        }
    })
    return (
        <Layout className="bgc-f7">
            < div className="container" style={{ marginTop: "100px" }} >
                <div className="row wow fadeInUp" data-wow-delay="100ms">
                    <div className="col-lg-8">
                        <div className="single-property-content mb30-md">
                            <h2 className="sp-lg-title">{property.title}</h2>
                            <div className="pd-meta mb15 d-md-flex align-items-center">
                                <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
                                    {property.address}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-property-content">
                            <div className="property-action text-lg-end">
                                <h3 className="price mb-0">{formatRupiah(property.price)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb30 mt30 wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-sm-12">
                        <div className="sp-img-content mb15-md">
                            <a
                                className="popup-img preview-img-1 sp-img"
                                href={property.photos}
                            >
                                <img
                                    className="w-100"
                                    src={property.photos}
                                    alt="image.jpg"
                                    style={{ borderRadius: "15px" }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row wrap wow fadeInUp" data-wow-delay="500ms">
                    <div className={isLoggedIn && user.role === "user" ? "col-lg-8" : "col-lg-12"}>
                        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                            <h4 className="title fz17 mb30">Overview</h4>
                            <div className="row">
                                <div className="col-sm-6 col-lg-6">
                                    <div className="overview-element mb25 d-flex align-items-center">
                                        <FontAwesomeIcon className="me-2" icon={faBed} />
                                        <div className="ml15">
                                            <h6 className="mb-0">Kamar Tidur</h6>
                                            <p className="text mb-0 fz15">{property.bedrooms}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="overview-element mb25 d-flex align-items-center">
                                        <FontAwesomeIcon className="me-2" icon={faBath} />
                                        <div className="ml15">
                                            <h6 className="mb-0">Kamar Mandi</h6>
                                            <p className="text mb-0 fz15">{property.bathrooms}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="overview-element mb25 d-flex align-items-center">
                                        <FontAwesomeIcon className="me-2" icon={faWarehouse} />
                                        <div className="ml15">
                                            <h6 className="mb-0">Garasi</h6>
                                            <p className="text mb-0 fz15">{property.garage}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6">
                                    <div className="overview-element mb25-xs d-flex align-items-center">
                                        <FontAwesomeIcon className="me-2" icon={faExpand} />
                                        <div className="ml15">
                                            <h6 className="mb-0">Luas</h6>
                                            <p className="text mb-0 fz15">{property.propertySize} m <sup>2</sup></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                            <h4 className="title fz17 mb30">Deskripsi Properti</h4>
                            <p className="text mb10">
                                {property.description}
                            </p>
                            <h4 className="title fz17 mb30 mt50">Detail Properti</h4>
                            <div className="row">
                                <div className="col-md-6 col-xl-4">
                                    <div className="d-flex justify-content-between">
                                        <div className="pd-list">
                                            <p className="fw600 mb10 ff-heading dark-color">Harga</p>
                                            <p className="fw600 mb10 ff-heading dark-color">Luas Bangunan</p>
                                            <p className="fw600 mb10 ff-heading dark-color">Kamar Mandi</p>
                                            <p className="fw600 mb-0 ff-heading dark-color">Kamar Tidur</p>
                                        </div>
                                        <div className="pd-list">
                                            <p className="text mb10">{formatRupiah(property.price)}</p>
                                            <p className="text mb10">{property.propertySize} m <sup>2</sup></p>
                                            <p className="text mb10">{property.bathrooms}</p>
                                            <p className="text mb-0">{property.bedrooms}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xl-4 offset-xl-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="pd-list">
                                            <p className="fw600 mb10 ff-heading dark-color">Garasi</p>
                                            <p className="fw600 mb10 ff-heading dark-color">Luas Garasi</p>
                                            <p className="fw600 mb10 ff-heading dark-color">Tahun Dibuat</p>
                                            <p className="fw600 mb10 ff-heading dark-color">Tipe Properti</p>
                                        </div>
                                        <div className="pd-list">
                                            <p className="text mb10">{property.garage}</p>
                                            <p className="text mb10">{property.garageSize} m <sup>2</sup></p>
                                            <p className="text mb10">{property.yearBuilt}</p>
                                            <p className="text mb10">{property.propertyType}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {isLoggedIn && user.role === "user" &&
                        (
                            <div className="col-lg-4">
                                <div className="column">
                                    <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                                        <h4 className="form-title mb5">Schedule a tour</h4>
                                        <p className="text">Choose your preferred day</p>
                                        <div className="ps-navtab">
                                            <Form className="form-style1" onSubmit={formik.handleSubmit} >
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="">
                                                            <MyInput
                                                                type="text"
                                                                placeholder="Nama"
                                                                field={formik.getFieldProps('name')}
                                                                form={formik}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="">
                                                            <MyInput
                                                                type="text"
                                                                placeholder="Nomor Telepon"
                                                                field={formik.getFieldProps('phone')}
                                                                form={formik}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="">
                                                            <MyInput
                                                                type="text"
                                                                placeholder="Email"
                                                                field={formik.getFieldProps('email')}
                                                                form={formik}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="">
                                                            <MyTextarea
                                                                placeholder="Pesan"
                                                                field={formik.getFieldProps('message')}
                                                                form={formik}
                                                                style={{ height: "100px" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="d-grid">
                                                            <MyButton
                                                                type="submit"
                                                                label="Kirim Pesan"
                                                                icon={<FontAwesomeIcon icon={faPaperPlane} className="ms-2" />}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </ div>
        </Layout>
    )
}

export default Property

