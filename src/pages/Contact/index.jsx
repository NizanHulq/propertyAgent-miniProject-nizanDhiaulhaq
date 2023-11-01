import OpenAI from "openai"

import MyButton from "@/components/button"
import Layout from "@/components/layout"
import MyTable from "@/components/table"
import { fetchAllMessages, fetchMessage } from "@/utils/apis/contacts"
import { faComment, faPaperPlane, faPlane, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useEffect } from "react"
import { set } from "react-hook-form"

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
});

const Contact = () => {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState({})
    const [prompt, setPrompt] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([])


    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetchAllMessages()
                setMessages(response)
            } catch (error) {
                console.log(error);
            }
        }
        fetchMessages()
    }, [])

    async function fetchDataAi(param) {
        try {
            const response = await openai.chat.completions.create({
                messages: [{ role: "user", content: param }],
                model: "gpt-3.5-turbo",
                max_tokens: 150,
            });
            setResults((prevResults) => [
                ...prevResults,
                { message: response.choices[0].message }
            ])
        } catch (error) {
            console.log(error)
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }
    }

    const getMessage = async (id) => {
        try {
            const response = await fetchMessage(id)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const handleRowClick = async (id) => {
        setIsLoading(true)
        const message = await getMessage(id)
        console.log(message)
        setMessage(message)
        setResults([
            {
                message: {
                    content: message.message,
                    role: "user"
                }
            }
        ])
        await fetchDataAi(message.message)


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const assisMsg = {
            message: {
                content: prompt,
                role: "assistant",
            },
        }
        const newData = [...results, assisMsg]
        setResults(newData)
        setPrompt("")

    }

    return (
        <>
            {console.log(results)}
            {/* Our Contact With Map */}
            <Layout className="bgc-f7">
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h3 className="title">Daftar Pesan</h3>
                        <MyTable data={messages} handleRowClick={handleRowClick} />
                    </div>
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h3 className="title">Detail Pesan</h3>
                        <div className="col-md-6 col-xl-4">
                            <div className="d-flex justify-content-between">
                                <div className="pd-list">
                                    <p className="fw600 mb10 ff-heading dark-color">Nama</p>
                                    <p className="fw600 mb10 ff-heading dark-color">Nomor Telepon</p>
                                    <p className="fw600 mb10 ff-heading dark-color">Email</p>
                                </div>
                                <div className="pd-list">
                                    <p className="text mb10">{message.name}</p>
                                    <p className="text mb10">{message.phone}</p>
                                    <p className="text mb10">{message.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-2 p-4 border border-0 rounded-3 w-100" style={{ boxShadow: "inset 0 3px 5px #B0B0B0" }}>
                            {results.map((result, index) => (
                                <div key={index} className="d-flex">
                                    {result.message.role === "user" ? <FontAwesomeIcon className="me-2" icon={faUser} style={{ color: "#6b717b" }} /> : ""}
                                    <p
                                        className={
                                            result.message.role === "user" ? " rounded-3 p-2 me-auto" : " rounded-3 p-2 ms-auto"
                                        }
                                        style={{ backgroundColor: '#a8a8a8', width: "fit-content", color: "#fff" }}
                                    >
                                        {result.message.content}
                                    </p>
                                    {result.message.role === "assistant" ? <FontAwesomeIcon className="ms-2" icon={faComment} style={{ color: "#6b717b" }} /> : ""}
                                </div>
                            ))}
                            <form onSubmit={handleSubmit} className="d-flex flex-row gap-2 w-100">
                                <input className="form-control w-100" type="text" name="prompt" id="prompt" placeholder="Kirim pesan"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)} />
                                <MyButton label={isLoading ? "Loading" : "Kirim"} type="submit" icon={!isLoading ? <FontAwesomeIcon icon={faPaperPlane} /> : <FontAwesomeIcon icon={faSpinner} />} style={{ width: "170px" }} disabled={isLoading} />
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Contact