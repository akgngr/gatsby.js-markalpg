import React from "react";
import { Helmet } from "react-helmet"

const ldjson = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.markaotogaz.com",
          "name": "Marka Otogaz",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-532-255-1345",
            "contactType": "Detaylı bilgi alın.."
          }
        }
      `}
        </script>
    </Helmet>
)

export default ldjson;