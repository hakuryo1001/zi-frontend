
import Head from 'next/head'
import Footer from './footer'
import Navbar from './navbar'




 

export default function Layout({ props, children }: any) {
    return (

        <div>
            <Head>
                <title>Minting Site</title>
                <meta name="description" content="hakuryo" />
                <link rel="icon" href="/hakuryo_signature_final.png" />
            </Head>

            <Navbar />
                <main className="min-h-screen flex place-items-center justify-center bg-black" >
                <div className="container xl:w-1/2 lg:w-3/4 md:w-3/4 sm:w-3/4 text-gray-200">
                    {children}
                </div>
            
            </main>
            <Footer/>
        </div>
    )
}