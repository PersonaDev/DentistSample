import { Helmet } from "react-helmet-async";

const SITE_NAME = "Heritage Oak Dental";
const SITE_URL = "https://www.heritageoakdental.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;
const DEFAULT_DESCRIPTION =
  "Heritage Oak Dental in Rocklin, CA offers comprehensive dental care including general, cosmetic, implant, and orthodontic services. Serving Rocklin, Roseville, Granite Bay, Loomis & Sacramento.";

interface SEOHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: object | object[];
  noIndex?: boolean;
}

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  schema,
  noIndex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${canonicalPath}`;

  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Schemas */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
