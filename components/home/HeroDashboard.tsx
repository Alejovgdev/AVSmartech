import {
  BarChart3,
  CheckCircle2,
  Clock3,
  MousePointerClick,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const dashboardCards = [
  {
    label: "Visibilidad",
    value: "SEO local activo",
    icon: TrendingUp,
    bar: "w-4/5",
  },
  {
    label: "Contactos",
    value: "Web + CTA",
    icon: MousePointerClick,
    bar: "w-3/5",
  },
  {
    label: "Tiempo",
    value: "Automatización",
    icon: Clock3,
    bar: "w-2/3",
  },
];

const stats = [
  {
    value: "+40",
    label: "empresas ya confian en nosotros",
    icon: Users,
  },
  {
    value: "+80%",
    label: "más visibilidad",
    icon: TrendingUp,
  },
  {
    value: "+50%",
    label: "tareas automatizadas",
    icon: Zap,
  },
];

const flow = ["Visita", "Web", "Contacto", "Seguimiento", "Cliente"];

export function HeroDashboard() {
  return (
    <div className="absolute right-1 top-1/2 hidden w-[390px] -translate-y-1/2 lg:block xl:right-0 xl:w-[440px]">
      <div className="dashboard-enter glass-card-dark subtle-sheen relative overflow-hidden p-5">
        {/* Background glows */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1">
                <Sparkles className="h-3.5 w-3.5 text-cyan" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan">
                  Sistema digital
                </p>
              </div>

              <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                Captación y control
              </h2>

              <p className="mt-1 text-sm text-white/55">
                Todo conectado para convertir visitas en clientes.
              </p>
            </div>

            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white/12 text-cyan ring-1 ring-white/12">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>

          {/* Main stats */}
          <div className="mb-4 grid grid-cols-3 gap-3">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-center shadow-sm transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-cyan/14 text-cyan">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="font-display text-lg font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium leading-tight text-white/55">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Dashboard cards */}
          <div className="grid gap-3">
            {dashboardCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.label}
                  className="group rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-white/[0.1]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/14 text-cyan ring-1 ring-cyan/15">
                        <Icon className="h-5 w-5" />
                      </span>

                      <div>
                        <p className="text-xs font-semibold text-white/56">
                          {card.label}
                        </p>
                        <p className="text-sm font-semibold text-white">
                          {card.value}
                        </p>
                      </div>
                    </div>

                    <CheckCircle2 className="h-5 w-5 text-cyan" />
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-cyan to-white/75 shadow-[0_0_18px_rgba(34,211,238,0.35)] ${card.bar}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
