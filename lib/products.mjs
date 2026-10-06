const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
export const categories = [
 {id:'Women',en:"Women's Fashion",ne:'महिलाका कपडा',desc:{en:'Effortless elegance, every day.',ne:'हरेक दिन आकर्षक पहिरन।'},image:photo('photo-1539109136881-3be0616acf4b')},
 {id:'Men',en:"Men's Fashion",ne:'पुरुषका कपडा',desc:{en:'Classic style. Modern confidence.',ne:'आधुनिक र आत्मविश्वासी शैली।'},image:photo('photo-1617137968427-85924c800a22')},
 {id:'Boys',en:"Boys’ Fashion",ne:'केटाहरूका कपडा',desc:{en:'Ready for everyday adventures.',ne:'हरेक दिनका लागि सहज कपडा।'},image:photo('photo-1519457431-44ccd64a579b')},
 {id:'Girls',en:"Girls’ Fashion",ne:'केटीहरूका कपडा',desc:{en:'Little looks, big personality.',ne:'साना नानीका आकर्षक पहिरन।'},image:photo('photo-1471286174890-9c112ffca5b4')},
 {id:'Kids',en:'Kids’ Collection',ne:'बालबालिकाका कपडा',desc:{en:'Comfort for their colourful world.',ne:'बालबालिकाका लागि आरामदायी कपडा।'},image:photo('photo-1503919005314-30d93d07d823')}
];
const rows = [
 ['kurta','Embroidered Kurta Set','कढाइ भएको कुर्ता सेट','Women',2450,2900,'photo-1585487000160-6ebcfceb0d03',['S','M','L','XL'],['Ivory','Rose'],true],
 ['shirt','Everyday Cotton Shirt','सुती सर्ट','Men',1450,0,'photo-1596755094514-f87e34085b2c',['M','L','XL'],['White','Blue'],true],
 ['dress','Weekend Floral Dress','फूलबुट्टे ड्रेस','Women',2200,2600,'photo-1515372039744-b8f02a3ae446',['S','M','L'],['Rose','Black'],false],
 ['jacket','Classic Layer Jacket','क्लासिक ज्याकेट','Men',3200,0,'photo-1544022613-e87ca75a784a',['M','L','XL','XXL'],['Black','Brown'],false],
 ['boys','Adventure Cotton Set','केटाको सुती सेट','Boys',1250,1500,'photo-1519457431-44ccd64a579b',['2–4Y','5–7Y','8–10Y'],['Blue','Green'],true],
 ['girls','Little Sunshine Dress','नानीको सुन्दर ड्रेस','Girls',1600,0,'photo-1471286174890-9c112ffca5b4',['2–4Y','5–7Y','8–10Y'],['Rose','Ivory'],true],
 ['kids','Playday Comfort Set','बालबालिकाको आरामदायी सेट','Kids',950,1200,'photo-1503919005314-30d93d07d823',['2–4Y','5–7Y'],['Green','Blue'],false],
 ['knit','Soft Everyday Knit','नरम निट स्वेटर','Women',1850,0,'photo-1434389677669-e08b4cac3105',['S','M','L','XL'],['Ivory','Brown'],true]
];
export const products = rows.map(([id,en,ne,category,price,originalPrice,img,sizes,colors,isNew],i)=>({id,name:{en,ne},description:{en:'A thoughtfully selected style for comfortable everyday dressing. This is a demonstration product; contact the store to confirm actual photos, fabric, stock and price.',ne:'दैनिक लगाउन सहज र आकर्षक शैली। यो नमुना उत्पादन हो; वास्तविक तस्वीर, कपडा, स्टक र मूल्य पसलसँग पुष्टि गर्नुहोस्।'},category,price,originalPrice,discount:originalPrice?Math.round((1-price/originalPrice)*100):0,images:[photo(img),photo(img)+'&crop=edges'],sizes,colors,stockStatus:'confirm',isNew,featured:i<4,demo:true,seasonal:i===3||i===7}));
export function filterProducts(list, { category='All', search='', maxPrice=10000, size='' } = {}) { return list.filter(p => (category==='All'||(category==='New'?p.isNew:category==='Trending'?p.featured:category==='Seasonal'?p.seasonal:p.category===category)) && (p.name.en+' '+p.name.ne+' '+p.category).toLowerCase().includes(search.toLowerCase()) && p.price <= Number(maxPrice) && (!size||p.sizes.includes(size))); }
