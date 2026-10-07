const MONTHS: Record<string, string> = {
  janeiro: '01', fevereiro: '02', março: '03', marco: '03', abril: '04', maio: '05', junho: '06',
  julho: '07', agosto: '08', setembro: '09', outubro: '10', novembro: '11', dezembro: '12',
}

/** "17 de Agosto de 2026" -> "2026-08-17" */
export function brDateToISO(dateStr: string): string {
  const m = dateStr.match(/(\d+)\s+de\s+(\S+)\s+de\s+(\d+)/)
  if (!m) throw new Error(`Unparseable blog date: ${dateStr}`)
  const month = MONTHS[m[2].toLowerCase()]
  if (!month) throw new Error(`Unknown month in blog date: ${dateStr}`)
  return `${m[3]}-${month}-${m[1].padStart(2, '0')}`
}
