import React from "react"
import Layout from "../components/layout"
import { Link, graphql, StaticQuery } from "gatsby"

const GET_IMAGEDATA = graphql`
  query getImageData {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
        }
      }
    }
  }
`

export default () => {
  return (
    <Layout>
      <h1>Hello from page 3</h1>
      <h3>Image file data</h3>
      <StaticQuery
        query={GET_IMAGEDATA}
        render={(data, i) => (
          <table>
            <thead>
              <tr key={i}>
                <th>Relative Path</th>
                <th>Size Image</th>
                <th>Extension IMG</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map(
                ({ node: { relativePath, size, extension } }, i) => (
                  <tr key={i}>
                    <td>{relativePath}</td>
                    <td>{size}</td>
                    <td>{extension}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      />

      <Link to="/page-2">Go to page 2</Link>
    </Layout>
  )
}
