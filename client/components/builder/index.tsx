import { Builder, BuilderComponent } from "@builder.io/react";
import React from "react";

// Initialize Builder
Builder.init("065997bd13e4442e888a08652fcd61ba");

// Register custom components (add your custom components here)
Builder.registerComponent(
  {
    name: "SaintVisionHero",
    inputs: [
      { name: "title", type: "string", defaultValue: "Welcome to SaintVision" },
      {
        name: "subtitle",
        type: "string",
        defaultValue: "Divine AI Technology",
      },
      {
        name: "backgroundImage",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
      },
    ],
  },
  (props: any) => (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  ),
);

export { Builder, BuilderComponent };
