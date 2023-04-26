import './globals.css'

export const metadata = {
  title: 'Anthony Castro | Software Engineer',
  description: 'Generated by create next app',
  viewport: 'initial-scale=1, viewport-fit=cover',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
