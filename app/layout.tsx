import { ReactNode } from 'react'
import '../app/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Jazz Blog</title>
        <meta name="description" content="A blog about the world of jazz music" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}