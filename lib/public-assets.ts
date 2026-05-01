import fs from "node:fs";
import path from "node:path";

const extensions = ["webp", "png", "jpg", "jpeg", "svg"] as const;

export function publicAsset(baseName: string, aliases: string[] = []) {
  const publicDir = path.join(process.cwd(), "public");
  const candidates = [baseName, ...aliases];

  for (const candidate of candidates) {
    const match = extensions.find((extension) =>
      fs.existsSync(path.join(publicDir, `${candidate}.${extension}`))
    );

    if (match) {
      return `/${candidate}.${match}`;
    }
  }

  return `/${baseName}.png`;
}

export function getBrandAssets() {
  return {
    logo: publicAsset("avsmartech-logo-trans", ["avsmartech-logo"]),
    logoCircle: publicAsset("avsmartech-logo-circle", [
      "avsmartech_logo_circle_masked",
      "avsmartech_logo_circle",
      "logo-circle"
    ]),
    meet: publicAsset("avsmartech-meet"),
    hook: publicAsset("avsmartech-hook"),
    office: publicAsset("avsmartech-office")
  };
}
