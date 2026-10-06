export const business = {
 storeName: 'Anuradha Kapda Pasal', address: 'Pipra-5, Hardiya, Nepal', addressNe: 'पिपरा-५, हरदिया, नेपाल', phone: '+9779807605076', whatsapp: '+9779761658442', googleMapsUrl: '', facebookUrl: '', instagramUrl: '', tiktokUrl: '', businessHours: '', siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
};
export const callUrl = `tel:${business.phone}`;
export const directionsUrl = business.googleMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.storeName+' '+business.address)}`;
export function whatsappUrl(message = '') { return `https://wa.me/${business.whatsapp.replace(/\D/g,'')}${message ? '?text='+encodeURIComponent(message) : ''}`; }
export function orderMessage(product, lang, size = '', color = '', quantity = 1) { return lang === 'ne' ? `नमस्ते ${business.storeName}, मलाई ${product.name.ne} मन परेको छ। कृपया यसको उपलब्ध साइज, रङ र मूल्यको जानकारी दिनुहोस्। साइज: ${size || 'छानिएको छैन'}, रङ: ${color || 'छानिएको छैन'}, संख्या: ${quantity}।` : `Namaste ${business.storeName}, I am interested in ${product.name.en}. Please tell me the available size, color and price. Size: ${size || 'not selected'}, color: ${color || 'not selected'}, quantity: ${quantity}.`; }
