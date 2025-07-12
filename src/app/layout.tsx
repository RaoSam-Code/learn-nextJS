import Footer from "./footer"
export const metadata = {
  title: 'Next by Satyam',
  description: 'project Started by Satyam to learn Nextjs 15',
}
// You can also create a specific layout for specific folder , for that you have to only define it in specific folder 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning = {true}>
      <body>
        <header style={{backgroundColor: "magenta",padding:"1rem"}}>
          <strong><a href="/">Home</a></strong>
          </header>

        {children}
        <Footer/>
        </body>
    </html>
  )
}
