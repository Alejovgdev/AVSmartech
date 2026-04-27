import {
  BarChart3,
  Bot,
  CheckCircle2,
  Clock3,
  Database,
  Globe2,
  Mail,
  MapPinned,
  Megaphone,
  Network,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconName } from "@/lib/data";

const icons: Record<IconName, LucideIcon> = {
  bot: Bot,
  chart: BarChart3,
  check: CheckCircle2,
  clock: Clock3,
  database: Database,
  globe: Globe2,
  mail: Mail,
  map: MapPinned,
  megaphone: Megaphone,
  network: Network,
  play: PlayCircle,
  shield: ShieldCheck,
  sparkles: Sparkles,
  target: Target,
  workflow: Workflow
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Component = icons[name];

  return <Component className={className} aria-hidden="true" />;
}
