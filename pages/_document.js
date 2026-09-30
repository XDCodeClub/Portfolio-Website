import Document, { Html, Head, Main, NextScript } from "next/document";
import siteContent from "../data/siteContent";

class MyDocument extends Document {
  render() {
    const { club, socialLinks } = siteContent;

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#5F4DFF" />
          <meta name="msapplication-TileColor" content="#060607" />
          
          {/* Favicons & Manifest */}
          <link rel="icon" type="image/png" href={club.logo} />
          <link rel="apple-touch-icon" href={club.logo} />
          <link rel="manifest" href="/manifest.json" />

          {/* Geo & Local Search Optimization (Banmore, near Gwalior, Madhya Pradesh, India) */}
          <meta name="geo.region" content="IN-MP" />
          <meta name="geo.placename" content="Banmore, Gwalior, Madhya Pradesh, India" />
          <meta name="geo.position" content={`${club.address.coordinates.latitude};${club.address.coordinates.longitude}`} />
          <meta name="ICBM" content={`${club.address.coordinates.latitude}, ${club.address.coordinates.longitude}`} />

          {/* Author & Search Directives */}
          <meta name="author" content={`${club.name} - ${club.collegeShort}`} />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

          {/* Default Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={`${club.name} - ${club.collegeShort}`} />
          <meta property="og:image" content={club.logo} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content={`${club.name} ${club.collegeShort} Logo`} />

          {/* Default Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={club.logo} />
          <meta name="twitter:site" content="@xdcodeclub" />

          {/* Global Structured Data JSON-LD for Search Engines & AI Overviews */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": club.name,
                "alternateName": [
                  `${club.name} ${club.collegeShort}`,
                  "XD Coding Club",
                  "ShriRam College Coding Club",
                  "SRGOC Coding Club",
                ],
                "url": club.websiteUrl,
                "logo": `${club.websiteUrl}${club.logo}`,
                "description": club.affiliation,
                "parentOrganization": {
                  "@type": "CollegeOrUniversity",
                  "name": club.college,
                  "alternateName": `${club.collegeShort} (${club.group})`,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": club.address.street,
                    "addressLocality": club.address.locality,
                    "addressRegion": club.address.region,
                    "postalCode": club.address.postalCode,
                    "addressCountry": club.address.countryCode,
                  },
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": club.headquarters,
                  "addressLocality": club.address.locality,
                  "addressRegion": club.address.region,
                  "postalCode": club.address.postalCode,
                  "addressCountry": club.address.countryCode,
                },
                "sameAs": [
                  socialLinks.linkedin,
                  socialLinks.discord,
                  socialLinks.instagram,
                  socialLinks.github,
                ].filter(Boolean),
              }),
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
