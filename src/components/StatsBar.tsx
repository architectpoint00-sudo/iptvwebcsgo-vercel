import type { StatItem } from '@/lib/data'

export default function StatsBar({ stats }: { stats: StatItem[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111827]">
      <div className="grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-extrabold text-transparent sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-gray-400 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
