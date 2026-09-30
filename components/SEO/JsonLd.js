import React from "react";
import Head from "next/head";

export function GlobalJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://xdcodeclub.netlify.app/#organization",
        "name": "XD Code Club",
        "alternateName": [
          "XD Code Club SRCEM",
          "XD Coding Club",
          "ShriRam College Coding Club",
          "SRGOC Coding Club"
        ],
        "url": "https://xdcodeclub.netlify.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://xdcodeclub.netlify.app/xdcodeclub-logo2.png",
          "width": 512,
          "height": 512
        },
        "description":
          "Official student software engineering and coding community of ShriRam College of Engineering & Management (SRCEM), part of ShriRam Group of Colleges, Banmore (near Gwalior), Madhya Pradesh.",
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
        ],
        "knowsAbout": [
          "Computer Science",
          "Software Engineering",
          "Full-Stack Web Development",
          "Artificial Intelligence and Machine Learning",
          "Data Structures and Algorithms",
          "Open Source Software",
          "Web3 and Blockchain",
          "IoT and Embedded Systems",
          "Hackathons"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://xdcodeclub.netlify.app/#website",
        "url": "https://xdcodeclub.netlify.app",
        "name": "XD Code Club | Official Coding Club - SRCEM",
        "description": "Coding for creativity, curiosity & community.",
        "publisher": {
          "@id": "https://xdcodeclub.netlify.app/#organization"
        }
      }
    ]
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function FaqJsonLd({ faqs }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function ProjectsJsonLd({ projects }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((p, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": p.title,
        "applicationCategory": p.category,
        "operatingSystem": "Web, Cross-platform",
        "description": p.description,
        "author": {
          "@type": "Person",
          "name": p.contributors
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    }))
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}

export function MemberJsonLd({ member }) {
  if (!member) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.bio,
      "affiliation": {
        "@type": "EducationalOrganization",
        "name": "XD Code Club, ShriRam College of Engineering & Management (ShriRam Group of Colleges)"
      },
      "knowsAbout": member.skills,
      "sameAs": [
        member.links?.github,
        member.links?.linkedin,
        member.links?.linktree
      ].filter(Boolean)
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
