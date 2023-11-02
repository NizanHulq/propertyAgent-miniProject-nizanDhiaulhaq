import { faBath, faBed, faEdit, faExpand, faEye, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Badge, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap"
import Button from "./button"
import MyButton from "./button"
import { useEffect } from "react"
import { useState } from "react"

const MyCard = ({ data, handleDelete }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false)
    const [user, setUser] = useState({})
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('isLoggedIn'))
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const formatRupiah = (value) => {
        // using Intl.NumberFormat
        const formatter = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        })
        return formatter.format(value)
    }

    return (
        <>
            <Card className="listing-style1">
                <div className="list-thumb">
                    <CardImg
                        className=""
                        alt="Card image cap"
                        src={data.image}
                        top
                        width="100%"
                    />
                    <Badge className="list-tag fz12 py-2" color="info">
                        {data.type}
                    </Badge>
                    <div className="list-price">
                        {formatRupiah(data.price)}
                    </div>
                </div>
                <CardBody className="list-content">
                    <CardTitle tag="h6">
                        <Link to={`/property/${data.id}`}>
                            {data.title}
                        </Link>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted list-text"
                    >
                        {data.location}
                    </CardSubtitle>
                    <div className="list-meta d-flex align-items-center">
                        <a href="">
                            <FontAwesomeIcon className="me-2" icon={faBed} />{data.bed} bed
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="me-2" icon={faBath} />{data.bath} bath
                        </a>
                        <a href="">
                            <FontAwesomeIcon className="me-2" icon={faExpand} />
                            {data.sqft} m <sup>2</sup>
                        </a>
                    </div>
                    <hr className="my-2" />
                    <div className="col-12 d-flex justify-content-end">
                        {isLoggedIn && user.role === "agent" ?
                            <>
                                <Link to={`/property/edit/${data.id}`}>
                                    <MyButton
                                        label="Edit"
                                        className="ud-btn btn-thm-border me-2"
                                        icon={<FontAwesomeIcon className="me-2" icon={faEdit} />}
                                        style={{ padding: "5px 10px", fontSize: "13px" }}
                                    />
                                </Link>
                                <MyButton
                                    label="Delete"
                                    className="ud-btn btn-thm-border me-2"
                                    icon={<FontAwesomeIcon className="me-2" icon={faTrash} />}
                                    style={{ padding: "5px 10px", fontSize: "13px" }}
                                    onClick={() => handleDelete(data.id)}
                                />
                            </>
                            : ""}
                        <Link to={`/property/${data.id}`}>
                            <MyButton label="View More" icon={<FontAwesomeIcon className="me-2" icon={faEye} />} style={{ padding: "5px 10px", fontSize: "13px" }} />
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default MyCard