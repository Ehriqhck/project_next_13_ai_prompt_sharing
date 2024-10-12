import '@styles/globals.css'
import { Exo } from 'next/font/google'
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss'
import NavEditor from '@components/NavEditor.jsx'
import { Context } from '@components/Provider.jsx'
import { useContext } from 'react';
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import NoSsr from '@components/NoSsr'
export const metadata = {
  title: 'Control Mapper',
  description: ''
}

const RootLayout = ({ children }) => (
  <html lang='en' className='dark'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <NoSsr>
            {children}

          </NoSsr>
        </main>
      </Provider>
    </body>
  </html>
)

export default RootLayout
