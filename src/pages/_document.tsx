import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Google fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;900&family=Poppins:wght@400;500;600;700;900&display=swap"
            rel="stylesheet"
          />
          {/* Animate CSS  */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </Head>
        <body className="scroll-smooth relative font-openSans text-slate-600 dark:text-gray-400 overflow-x-clip">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
