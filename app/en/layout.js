
import '../globals.css'




function RootLayout({ children,params }) {

  return (
    <html lang={params.lang}>
      <body >{children}</body>
    </html>
  )
}

export default RootLayout;