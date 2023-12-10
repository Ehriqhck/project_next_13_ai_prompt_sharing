import "@styles/globals.css";
import { Exo } from 'next/font/google'
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss';

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const metadata = {
  title: "Control Mapper",
  description: "",
};

const RootLayout = ({ children }) => (
  <html lang='en' className="dark">


    <body>

      <Provider >
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>

    </body>
  </html>
);

export default RootLayout;
