import React from "react";

export default function BrandShowcase() {
  const brandAssets = [
    {
      name: "SAINTSAL™ Circuit Board Logo",
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/23b227793103accd33c7649ebabb0572cddb55c1?width=2048",
      usage: "Primary logo, navigation, headers",
    },
    {
      name: "Cookin' Knowledge Logo",
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/4509d1503f738400c83cbc94ba7a62f0470b21d7?width=2048",
      usage: "Secondary branding, taglines",
    },
    {
      name: "SAINTSAL™ Transparent Logo",
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/46ab1422c157e614ab6683e4bc30e5ce36870ec4?width=3072",
      usage: "Overlays, watermarks",
    },
    {
      name: "Side Logo Design",
      url: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd4cde1845c8259165edfb536d4afccebe33767d?width=2048",
      usage: "Sidebar branding, compact layouts",
    },
  ];

  return (
    <div className="min-h-screen bg-charcoal p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            SAINTSAL™ Brand Assets
          </h1>
          <p className="text-muted-foreground text-lg">
            Premium branding integrated into your platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brandAssets.map((asset, index) => (
            <div
              key={index}
              className="elite-card p-6 rounded-2xl text-center space-y-4"
            >
              <div className="flex items-center justify-center h-32 bg-muted/20 rounded-xl">
                <img
                  src={asset.url}
                  alt={asset.name}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {asset.name}
              </h3>
              <p className="text-muted-foreground text-sm">{asset.usage}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 elite-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Brand Implementation Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                ✅ Implemented
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Sidebar logo updated</li>
                <li>• Homepage hero branding</li>
                <li>• Loading screen logo</li>
                <li>• Navigation consistency</li>
                <li>• Brand color scheme</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                🚀 Ready for Enhancement
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dashboard background graphics</li>
                <li>• Email template branding</li>
                <li>• Social media assets</li>
                <li>• Marketing page headers</li>
                <li>• Mobile app icons</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
