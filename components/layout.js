import Head from 'next/head'
import Link from 'next/link'


function Layout({ children }) {
    
    return (
        

        <div>
            <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="x-ua-compatible" content="ie=edge"/>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            {children}
        
        </div>
        
    )
  }
  
  export default Layout