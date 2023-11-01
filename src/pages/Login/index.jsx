import loginPhoto from '@/assets/icon/login-page-icon.svg'
import headerLogo from '@/assets/header-logo2.svg'
import Button from '@/components/button'
import { Link, useNavigate } from 'react-router-dom'
import { MyInput } from '@/components/input'
import { useFormik } from 'formik';
import { Form } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import { loginSchema } from '@/utils/apis/auth'
import { getUsers } from '@/utils/apis/auth/api'

const Login = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            try {
                const response = await getUsers()
                const matchedUser = response.find(user => user.username === values.username && user.password === values.password)

                if (matchedUser) {
                    localStorage.setItem('isLoggedIn', 'true')
                    localStorage.setItem('user', JSON.stringify(matchedUser))
                }

                await toast.promise(new Promise((resolve, reject) => {
                    setTimeout(() => {
                        if (matchedUser) {
                            resolve("Selamat anda berhasil masuk")
                        } else {
                            reject("Password atau username salah")
                        }
                    }, 1000)
                }), {
                    pending: 'Loading...',
                    success: {
                        render: "Selamat anda berhasil masuk",
                        onClose: () => navigate("/")
                    },
                    error: "Gagal masuk"
                });
            } catch (error) {
                toast.error("Gagal masuk");
                Error(error);
            }
        },
    });


    return (
        <>
            <section className="our-compare pt60 pb60">
                <img
                    src={loginPhoto}
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
                                    <h2>Sign in</h2>
                                    <p className="text">
                                        Masuk untuk mendapatkan pengalaman terbaik dari GenProperty.
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
                                    <div className="d-grid mb20">
                                        <Button label="Sign in" type="submit" />
                                    </div>
                                </Form>
                                <div className="hr_content mb20">
                                    <hr />
                                    <span className="hr_top_text">OR</span>
                                </div>
                                <p className="dark-color text-center mb0 mt10">
                                    Belum punya akun?{" "}
                                    <Link className="dark-color fw600" to="/register">Buat akun disini.</Link>
                                    {" "}/{" "}Kembali ke <Link className="dark-color fw600" to="/">Home</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Login