import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa"

const Description = () => {
    const social_url = {
        discord: "https://discord.com/invite/toddlerpillars",
        instagram: "https://instagram.com/toddlerpillars?",
        twitter: "https://twitter.com/toddlerpillars"
    }

    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    sub_title
                    sub_description
                }
            }
        }
    `)
    const inviteSocial = (url) => {
        window.open(url, "_blank")
    } 
    return (
        <div className="space-y-4">
      <div className="flow-root">
        <h1 className="text-3xl mt-5 md:mt-0 md:text-4xl py-2 md:py-3 font-semibold">{ data.site.siteMetadata.title }</h1>
      </div>
      <div className="flow-root">
        <p className="text-md py-4 md:py-1">{ data.site.siteMetadata.description }</p> 
      </div>
      <div className="flow-root">
        <h2 className="text-2xl  md:text-3xl py-1 md:py-2">{ data.site.siteMetadata.sub_title }</h2>
      </div>
      <div className="flow-root">
        <p className="text-md py-2 md:py-4">{ data.site.siteMetadata.sub_description }</p>  
      </div>
      <div className="flow-root text-center md:text-left">
        <button
          onClick={() => inviteSocial(social_url.discord)}
          className="inline-flex items-center text-center h-13 md:h-14 text-white rounded-full px-20 bg-gray-800 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800">
          <FaDiscord fontSize={34} />&nbsp;&nbsp;
          <span className="text-xl md:text-2xl font-semibold">Discord</span></button>
      </div>
      <div className="flow-root text-center md:text-left">
        <button
            onClick={() => inviteSocial(social_url.instagram)}
            className="w-10 h-10 mr-2 mt-1 md:mt-5 rounded-full text-white bg-gray-800 items-center justify-center text-3xl transition-colors duration-150 focus:shadow-outline hover:bg-pink-600">
          <FaInstagram className="full-current m-auto p-0.5" />
        </button>
        <button
          onClick={() => inviteSocial(social_url.twitter)}
          className="w-10 h-10 ml-2 mt-1 md:mt-5 rounded-full text-white bg-gray-800 items-center justify-center text-3xl transition-colors duration-150 focus:shadow-outline hover:bg-blue-500">
          <FaTwitter className="full-current m-auto p-0.5"/>
        </button>
      </div>
    </div>
  )
}

export default Description