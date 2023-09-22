
import '../globals.css'
import localFont from 'next/font/local';


const myFont = localFont({ src: '../../font/iransansdn.ttf' })


function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
      <body className={myFont.className} >{children}</body>
    </html>
  )
}

export default RootLayout;