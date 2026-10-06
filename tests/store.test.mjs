import test from 'node:test';
import assert from 'node:assert/strict';
import {business, callUrl, whatsappUrl, orderMessage} from '../lib/business.mjs';
import {products,filterProducts} from '../lib/products.mjs';
test('contact links use supplied business numbers',()=>{assert.equal(callUrl,'tel:+9779807605076');assert.equal(whatsappUrl(),'https://wa.me/9779761658442');});
test('orders safely encode English and Nepali product selection',()=>{for(const lang of ['en','ne']){const message=orderMessage(products[0],lang,'M','Rose',2);assert.ok(message.includes(products[0].name[lang]));assert.ok(message.includes('M'));assert.ok(message.includes('2'));assert.equal(new URL(whatsappUrl(message)).searchParams.get('text'),message);}});
test('search and combined category, price, size filters',()=>{assert.equal(filterProducts(products,{search:'कुर्ता'}).length,1);assert.equal(filterProducts(products,{search:'COTTON'}).length,2);const found=filterProducts(products,{category:'Women',maxPrice:2000,size:'XL'});assert.deepEqual(found.map(p=>p.id),['knit']);assert.equal(filterProducts(products,{search:'no-such-product'}).length,0);assert.ok(filterProducts(products,{category:'New'}).every(p=>p.isNew));});
test('demo catalogue has unique complete product records',()=>{assert.equal(new Set(products.map(p=>p.id)).size,products.length);for(const p of products){assert.ok(p.name.en&&p.name.ne&&p.images.length>=2&&p.sizes.length&&p.colors.length&&p.demo);assert.ok(p.price>0);assert.equal(p.stockStatus,'confirm');}});
