export const SITE_NAME = 'IPTV WEBCSGO'
export const SITE_URL = 'https://iptvwebcsgo.com'

export const WHATSAPP_NUMBER = '17185864134'
export const WHATSAPP_DISPLAY = '+1 718 586-4134'
export const SUPPORT_EMAIL = 'suporte@iptvwebcsgo.com'

/**
 * Builds a wa.me deep link, optionally with a pre-filled message.
 */
export function whatsappLink(message?: string): string {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_GENERIC = whatsappLink(
  'Olá! Vim pelo site e gostaria de mais informações sobre a IPTV WebCSGO.'
)

export const WHATSAPP_TRIAL = whatsappLink(
  'Olá! Gostaria de solicitar meu teste grátis de 6 horas da IPTV WebCSGO.'
)

export const WHATSAPP_RESELLER = whatsappLink(
  'Olá! Tenho interesse em me tornar um revendedor IPTV WebCSGO.'
)

export const WHATSAPP_SUPPORT = whatsappLink(
  'Olá! Preciso de ajuda com o suporte técnico da IPTV WebCSGO.'
)
