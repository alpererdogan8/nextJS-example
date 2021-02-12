import Head from 'next/head'
import Navigation from './navigation'



const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Alper Erdoğan'ın web sitesi</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Design by Alper</footer>
    </div>
  )
}

export default Layout
