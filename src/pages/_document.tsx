import { Html, Head, Main, NextScript } from 'next/document'
import Navigation from "@/components/navigation";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;