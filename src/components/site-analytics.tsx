"use client";

import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Vercel Analytics is cookieless and needs no consent banner. Google Analytics
 * is opt-in through NEXT_PUBLIC_GA_ID for anyone who wants funnels and
 * attribution that Vercel's pageview data does not cover.
 */
export function SiteAnalytics() {
  return (
    <>
      <Analytics />
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
