import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/style.css'
import '@/styles/custom-style.css'
import '@/styles/templates/ace-responsive-menu.css'
import '@/styles/templates/ud-custom-spacing.css'
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import Footer from "./footer"
import MyNavbar from "./navbar"

import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify'

export default function Layout({ children, className = "" }) {
  return (
    <div className={"wrapper ovh " + className}>
      {/* Navbar */}
      <MyNavbar />
      <div className="body_content_wrapper">
        {/* Content */}
        {children}
        {/* Footer */}
        <Footer />
        <a className="scrollToHome" href="#">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
      </div>
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
    </div>
  );
}
