import "../styles/globals.css"
import Providers  from "./providers"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'Zidan Rohman',
  description: 'portfolio ZidanRohman..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       
      <body className="dark:bg-stone-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
