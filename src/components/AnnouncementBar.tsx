const MESSAGE =
  'Plano de 12 meses a R$10/mês (R$120 no total) | Teste grátis de 6 horas'

export default function AnnouncementBar() {
  const items = Array.from({ length: 4 })

  return (
    <div className="overflow-hidden border-b border-white/10 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-2 text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((_, i) => (
          <span key={i} className="mx-6 text-xs font-semibold tracking-wide sm:text-sm">
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  )
}
