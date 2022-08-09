import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Google fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;900&family=Poppins:wght@400;500;600;700;900&display=swap'
            rel='stylesheet'
          />
          {/* Animate CSS  */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
          />
        </Head>
        <body className='relative overflow-x-clip scroll-smooth font-openSans text-slate-600 dark:text-gray-400'>
          <Main />
          <NextScript />
          <Script
            src='https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'
            integrity='sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          ></Script>
          <script>new WOW().init();</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
