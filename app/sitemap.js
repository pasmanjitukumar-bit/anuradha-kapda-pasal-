import {business} from '../lib/business.mjs';
import {products} from '../lib/products.mjs';
export const dynamic='force-static';
export default function sitemap(){if(!business.siteUrl)return [];const base=business.siteUrl.replace(/\/$/,'');return [{url:base,changeFrequency:'weekly',priority:1},...products.map(p=>({url:`${base}/products/${p.id}/`,changeFrequency:'weekly',priority:.7}))];}
