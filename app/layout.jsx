import './globals.css';
import { Mukta, Noto_Serif_Devanagari } from 'next/font/google';
const nepaliBody = Mukta({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], variable: '--font-nepali-body', display: 'swap', preload: false });
const nepaliHeadings = Noto_Serif_Devanagari({ subsets: ['devanagari'], weight: ['400', '500', '600', '700'], variable: '--font-nepali-heading', display: 'swap', preload: false });
import { business } from '../lib/business.mjs';
export const metadata = { title: 'Anuradha Kapda Pasal | Clothing in Pipra, Hardiya, Nepal', description: 'Fashion for the whole family. Explore women, men and kids clothing at Anuradha Kapda Pasal, Pipra-5, Hardiya, Nepal. Contact us on WhatsApp.', keywords: ['Anuradha Kapda Pasal','Kapda Pasal Pipra','Clothing Store Pipra Nepal','Clothes Shop Hardiya Nepal',"Women's Clothes Pipra","Men's Clothes Pipra",'Kids Clothes Pipra','Fashion Store Pipra Nepal'], openGraph:{title:'Anuradha Kapda Pasal',description:'Fashion for the Whole Family — Pipra-5, Hardiya, Nepal',locale:'en_NP',type:'website'}, icons:{icon:'/anuradha-logo-gold.png'} };
export default function Layout({children}) { const schema={'@context':'https://schema.org','@type':'ClothingStore',name:business.storeName,telephone:business.phone,address:{'@type':'PostalAddress',streetAddress:'Pipra-5, Hardiya',addressCountry:'NP'},...(business.siteUrl?{url:business.siteUrl}:{})}; return <html lang="en" className={`${nepaliBody.variable} ${nepaliHeadings.variable}`}><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/></body></html>; }


