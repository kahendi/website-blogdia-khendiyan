import React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
// import Footer from "../components/footer"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    
    <div>
      <Layout>
        <h1>Hallo GatsbyJs.</h1>
        <h2>Saya Khendi Khen, Sebagai Developer GatsbyJs</h2>
        <p>
          jika anda ingin belajar mengenai Web Developer GatsbyJs, Silahkan Hubungi <Link to="/contact">Kami </Link>
        </p>
        <p>
          ini keterangan saya <Link to="/about">..Link..</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage