import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Description from "../components/Description"
import ImageSlider from "../components/Silder"

const IndexPage = () => (
  <Layout>
    <div className="h-full container m-auto md:flex xs:block items-center md:py-8 md:px-7 sm:py-6 sm:px-6">
      <Seo title="Home" />
      <section className="w-full px-0 md:px-10 md:w-5/12">
        <Description />
      </section>
      <section className="relative top-5 md:top-1 w-full px-0 md:px-10 md:w-7/12">
        <ImageSlider />
      </section>
    </div>
  </Layout>
)

export default IndexPage
