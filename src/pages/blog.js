import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

 const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <div className="nav-spacing margin">
        <h1 className="pixel-font">Blog</h1>
        <table>
        
            <StaticQuery query={graphql`  
                            query MyQuery1 {
                                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blog/"}}, sort: {fields: frontmatter___date, order: ASC}) {
                                    nodes {
                                        frontmatter {
                                            slug
                                            date
                                            author
                                            title
                                            featuredImage {
                                                childImageSharp {
                                                    fluid(maxWidth: 800) {
                                                        ...GatsbyImageSharpFluid
                                                    }
                                                }
                                            }
                                        }
                                        excerpt(format: HTML, pruneLength: 300)
                                    }
                                }
                            }
                        `}
            render={data => {
                return <tbody>
                    {data.allMarkdownRemark.nodes.map((node) => {
                        let slugString;
                        if(node.frontmatter.slug == undefined || node.frontmatter.slug == ""){
                            slugString = `/blog/${node.frontmatter.title}`;
                            slugString = slugString.replace(/\s/g, '-').toLowerCase();
                            slugString = encodeURI(slugString);
                        }
                        else {
                            slugString = node.frontmatter.slug;
                        }
                        let featuredImgFluid = node.frontmatter.featuredImage.childImageSharp.fluid
                        return <tr>
                            <td><div className="preview-image"><Img fluid={featuredImgFluid} /></div></td>
                            <td className="blog-preview" >
                                <div>
                                <Link className="link-to-blog" to={slugString} key={slugString}>{node.frontmatter.title}</Link><br/>
                                By {node.frontmatter.author}<br/><br/>
                                
                                <div className="markdown-preview" dangerouslySetInnerHTML={{__html: node.excerpt}}></div>
                                <Link className="link-to-blog read-more" to={slugString} key={slugString + "2"}>Read more...</Link><br/>
                                </div>
                            </td>
                        </tr>
                    })}
                    
                </tbody>
            }}  
            />
        </table>
    </div>
  </Layout>
)

export default BlogPage
