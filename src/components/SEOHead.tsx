import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "Calmato",
  description = "CalmatoのWebサイトです",
  ogImage = "img/ogp/calmato.png",
  ogTitle,
  ogDescription,
}: Props) {
  const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL || "https://www.calmato.jp";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/calmato.ico" />
      <meta property="og:title" content={ogTitle ? ogTitle : title} />
      <meta property="og:description" content={ogDescription ? ogDescription : description} />
      <meta property="og:image" content={`${HOST_URL}/${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
