import React from "react";
import Head from "next/head";
import siteContent from "../../data/siteContent";

export function GlobalJsonLd() {
  const { club, socialLinks } = siteContent;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${club.websiteUrl}/#organization`,
        "name": club.name,
        "alternateName": [
          `${club.name} ${club.collegeShort}`,
          `${club.name} SRCEM`,
          "XD Coding Club",
          "ShriRam College Coding Club",
          "SRGOC Coding Club",
        ],
        "url": club.websiteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${club.websiteUrl}${club.logo}`,
          "width": 512,
          "height": 512,
        },
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
          "streetAddress": `${club.headquarters}`,
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
        "knowsAbout": [
          "Computer Science",
          "Software Engineering",
          "Full-Stack Web Development",
          "Artificial Intelligence and Machine Learning",
          "Data Structures and Algorithms",
          "Open Source Software",
          "Web3 and Blockchain",
          "IoT and Embedded Systems",
          "Hackathons",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${club.websiteUrl}/#website`,
        "url": club.websiteUrl,
        "name": `${club.name} | ${club.badgeText}`,
        "description": club.motto,
        "publisher": {
          "@id": `${club.websiteUrl}/#organization`,
        },
      },
    ],
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
    "mainEntity": (faqs || []).map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
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
    "itemListElement": (projects || []).map((p, index) => ({
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
          "name": p.contributors,
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
    })),
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
  const { club } = siteContent;

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
        "name": `${club.name}, ${club.college} (${club.group})`,
      },
      "knowsAbout": member.skills,
      "sameAs": [
        member.links?.github,
        member.links?.linkedin,
        member.links?.linktree,
      ].filter(Boolean),
    },
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
