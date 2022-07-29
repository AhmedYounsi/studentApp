import Layout from '../components/Layout'
import '../styles/globals.scss'
import "../public/assets//css/bootstrap.min.css"
import "../public/assets/css/main.css"
 

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
