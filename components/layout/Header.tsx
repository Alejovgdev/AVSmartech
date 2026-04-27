import { getBrandAssets } from "@/lib/public-assets";
import { HeaderClient } from "@/components/layout/HeaderClient";

export function Header() {
  const assets = getBrandAssets();

  return <HeaderClient logoSrc={assets.logo} />;
}
