import "./globals.css"
import { Open_Sans } from "next/font/google"
import Sidebar from "@/components/sidebar"
import GlobalState from "@/context"
import Header from "@/components/header"
import NextAuthProvider from "@/auth-provider"

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <NextAuthProvider>
          <GlobalState>
            <div className='flex h-screen overflow-hidden'>
              <Sidebar />

              <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
                <Header />
                <main>
                  <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html>
  )
}