import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#5F4DFF" />
          <meta name="msapplication-TileColor" content="#060607" />
          
          {/* Favicons & Manifest */}
          <link rel="icon" type="image/png" href="/xdcodeclub-logo2.png" />
          <link rel="apple-touch-icon" href="/xdcodeclub-logo2.png" />
          <link rel="manifest" href="/manifest.json" />

          {/* Geo & Local Search Optimization (Banmore, near Gwalior, Madhya Pradesh, India) */}
          <meta name="geo.region" content="IN-MP" />
          <meta name="geo.placename" content="Banmore, Gwalior, Madhya Pradesh, India" />
          <meta name="geo.position" content="26.3547;78.1189" />
          <meta name="ICBM" content="26.3547, 78.1189" />

          {/* Author & Search Directives */}
          <meta name="author" content="XD Code Club - SRCEM" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

          {/* Default Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="XD Code Club - SRCEM" />
          <meta property="og:image" content="/xdcodeclub-logo2.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content="XD Code Club SRCEM Logo" />

          {/* Default Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="/xdcodeclub-logo2.png" />
          <meta name="twitter:site" content="@xdcodeclub" />

          {/* Global Structured Data JSON-LD for Search Engines & AI Overviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "XD Code Club",
                "alternateName": [
                  "XD Code Club SRCEM",
                  "XD Coding Club",
                  "ShriRam College Coding Club",
                  "SRGOC Coding Club"
                ],
                "url": "https://xdcodeclub.netlify.app",
                "logo": "https://xdcodeclub.netlify.app/xdcodeclub-logo2.png",
                "description":
                  "Official student coding and software engineering community of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, located at National Expressway, AB Road, Banmore (near Gwalior), Madhya Pradesh.",
                "parentOrganization": {
                  "@type": "CollegeOrUniversity",
                  "name": "ShriRam College of Engineering & Management",
                  "alternateName": "SRCEM (ShriRam Group of Colleges)",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "National Expressway, AB Road",
                    "addressLocality": "Banmore (near Gwalior)",
                    "addressRegion": "Madhya Pradesh",
                    "postalCode": "476444",
                    "addressCountry": "IN"
                  }
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Lab 304, Computer Science Department, SRCEM Campus, National Expressway, AB Road",
                  "addressLocality": "Banmore (near Gwalior)",
                  "addressRegion": "Madhya Pradesh",
                  "postalCode": "476444",
                  "addressCountry": "IN"
                },
                "sameAs": [
                  "https://www.linkedin.com/company/xd-code-club/",
                  "https://discord.gg/vVh32R6t",
                  "https://www.instagram.com/xdcodeclub/",
                  "https://github.com/XDCodeClub"
                ]
              })
            }}
          />

          {/* Preconnect Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body className="bg-[#060607] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
