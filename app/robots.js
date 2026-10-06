import {business} from '../lib/business.mjs';
export const dynamic='force-static';
export default function robots(){return {rules:{userAgent:'*',allow:'/'},...(business.siteUrl?{sitemap:`${business.siteUrl.replace(/\/$/,'')}/sitemap.xml`}:{})};}
