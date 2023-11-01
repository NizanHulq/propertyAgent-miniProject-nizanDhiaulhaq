import registerIcon from "@/assets/icon/register-page-icon.svg"
import headerLogo from "@/assets/header-logo2.svg"
import Button from "@/components/button"
import { MyInput, MySelect } from "@/components/input"
import { Form } from "reactstrap"
import { useFormik } from 'formik';
import { register, registerSchema } from "@/utils/apis/auth"
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"

const Register = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            role: ''
        },
        validationSchema: registerSchema,
        onSubmit: async (values) => {
            try {
                await toast.promise(register(values), {
                    pending: 'Loading...',
                    success: {
                        render: "Selamat anda berhasil mendaftar",
                        onClose: () => navigate("/login")
                    },
                    error: "Gagal mendaftar"
                });
            } catch (error) {
                toast.error("Gagal mendaftar");
                Error(error);
            }
        },
    });

    return (
        <>
            <section className="our-compare pt60 pb60">
                <img
                    src={registerIcon}
                    alt=""
                    className="login-bg-icon wow fadeInLeft"
                    data-wow-delay="300ms"
                />
                <div className="container">
                    <div className="row wow fadeInRight" data-wow-delay="300ms">
                        <div className="col-lg-6">
                            <div className="log-reg-form signup-modal form-style1 bgc-white p50 p30-sm default-box-shadow2 bdrs12">
                                <div className="text-center mb40">
                                    <img className="mb25" src={headerLogo} alt="" />
                                    <h2>Create account</h2>
                                    <p className="text">
                                        Daftar untuk mendapatkan pengalaman terbaik dari GenProperty.
                                    </p>
                                </div>
                                <Form onSubmit={formik.handleSubmit}>
                                    <MyInput
                                        label="Username"
                                        field={formik.getFieldProps('username')}
                                        form={formik}
                                        type="text"
                                        placeholder="Masukkan username"
                                    />
                                    <MyInput
                                        label="Password"
                                        field={formik.getFieldProps('password')}
                                        form={formik}
                                        type="password"
                                        placeholder="Masukkan password"
                                    />
                                    <MySelect
                                        label="Role"
                                        field={formik.getFieldProps('role')}
                                        form={formik}
                                        options={[
                                            { value: 'user', label: 'User' },
                                            { value: 'agent', label: 'Agent' },
                                        ]}
                                    />
                                    <div className="d-grid mb20">
                                        <Button label="Sign in" type="submit" />
                                    </div>
                                </Form>
                                <div className="hr_content mb20">
                                    <hr />
                                    <span className="hr_top_text">OR</span>
                                </div>
                                <p className="dark-color text-center mb0 mt10">
                                    Sudah punya akun?{" "}
                                    <Link className="dark-color fw600" to="/login">Silahkan login disini.</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )

}

export default Register