import MyCard from "@/components/card"
import Layout from "@/components/layout"
import Navbar from "@/components/navbar"
import { deleteProperty, getAllProperties } from "@/utils/apis/properties"
import { useEffect, useState } from "react"
import swal from "sweetalert"

const Home = () => {
    const [properties, setProperties] = useState([])
    const fetchData = async () => {
        try {
            const response = await getAllProperties()
            setProperties(response)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleDeleteCard = (id) => {
        swal({
            title: "Apakah kamu yakin?",
            text: "Data properti yang sudah dihapus tidak dapat dikembalikan!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    await deleteProperty(id)
                    await fetchData()
                    swal("Data properti berhasil dihapus!", {
                        icon: "success",
                    })
                } catch (error) {
                    console.log(error)
                    swal("Data properti gagal dihapus!", {
                        icon: "error",
                    })
                }
            } else {
                return
            }
        })
    }

    return (
        <Layout>
            <section className="home-banner-style1 p0">
                <div className="home-style1">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-11 mx-auto">
                                <div className="inner-banner-style1 text-center">
                                    <h6 className="hero-sub-title animate-up-1 fw-semibold" style={{ color: "GrayText" }}>JALAN TERBAIK UNTUK</h6>
                                    <h2 className="hero-title animate-up-2">Menemukan Tempat Tinggal Impianmu</h2>
                                    <p className="hero-text fz15 animate-up-3">
                                        Kami memfasilitasi lebih dari 100.000 hunian terbaik.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Property */}
            <section className="py50" style={{ backgroundColor: "grey" }}>
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="00ms">
                        <div className="col-lg-12">
                            <div className="main-title2">
                                <h2 className="title text-white">Semua Property Dijual</h2>
                                <p className="paragraph text-white">
                                    Properti terbaik yang kami miliki untuk Anda. Mulai dari apartemen, rumah, dan lainnya.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {properties.map((property, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <MyCard
                                    handleDelete={handleDeleteCard}
                                    data={
                                        {
                                            title: property.title,
                                            price: property.price,
                                            image: property.photos,
                                            location: property.address,
                                            description: property.description,
                                            type: property.propertyType,
                                            id: property.id,
                                            sqft: property.propertySize,
                                            bed: property.bedrooms,
                                            bath: property.bathrooms,
                                            garage: property.garage,
                                            garageSize: property.garageSize,
                                            yearBuilt: property.yearBuilt,
                                        }
                                    }
                                />
                            </div>
                        ))
                        }

                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Home