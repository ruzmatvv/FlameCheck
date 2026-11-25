# FlameCheck: AI yordamchilar uchun qoidalar

Bu faylni Codex va Google Antigravity o'zi o'qiydi, Claude Code esa `CLAUDE.md` orqali. Qoida o'zgarsa faqat shu faylni tahrirlang.

## Loyiha
- Jonli sayt: https://flamecheck.bid (Cloudflare Worker `flamecheck`, faqat statik fayllar: server kodi va baza yo'q).
- Fayllar: `public/` (sahifa, `app.js`, `logic.js`, `i18n.js`, `style.css`, `_headers`), `public/cs2/` (skinlar va xaritalar), `test/`.
- Hamroh sayt https://framecheck.uk alohida repozitoriyda: `ruzmatvv/FrameCheck`.
- Node versiyasi `.node-version` da. Tashqi paketlar yo'q.

## Buyruqlar
`npm test` · `npm start` · `npm run sync` · `npm run deploy` (qo'lda joylash, faqat egasining ruxsati bilan).

## Majburiy qoidalar
1. Egasiga **o'zbek (lotin)** tilida javob bering. Kod va fayl nomlari inglizcha.
2. Parol, token, API kalit, `.env` **hech qachon** Git'ga yoki chatga yozilmaydi.
3. `main` tarmog'i jonli saytga tegishli: unga to'g'ridan-to'g'ri push qilmang. `ai/<vosita>/<mavzu>` tarmog'ida ishlang va pull request oching.
   `main` ga qo'shish faqat egasi aniq "joyla" deganda.
4. Dizayn va mavjud funksiyalarni so'ralmasa o'zgartirmang. Katta ishdan oldin tushuntirib, ruxsat oling.
5. Faqat haqiqiy, manbasi bor ma'lumot. Narx yoki raqam o'ylab topmang.
6. Cloudflare sozlamalari va domenlarni ruxsatsiz o'zgartirmang. Pullik xizmat yoqmang.
7. Ma'lumot yoki faylni o'chirishdan oldin ruxsat so'rang. `git push --force` qilmang.

## Texnik shartlar
- Qat'iy CSP (`public/_headers`): inline skript, `style="..."` va `onclick=` yozmang.
- Har bir matn uch tilda (uz, ru, en): `public/i18n.js`, `public/cs2/strings.js`.
- Narxlar brauzerdan CheapShark API orqali (kalitsiz, USD). Do'konga havola faqat `cheapshark.com/redirect?dealID=`. Ommaviy nusxalash yo'q; 429 va Retry-After hurmat qilinadi.
- Fayllar baytma-bayt saqlanadi (`.gitattributes`). Fayl boshiga BOM qo'ymang.

## Umumiy CS2 fayllari
`public/cs2/logic.js`, `names.js`, `data/`, `maps/`, `licenses.txt` FrameCheck'dan keladi: ularni bu yerda qo'lda tahrirlamang.
FrameCheck'da o'zgartiring, keyin shu yerda `npm run sync`, `npm test`, commit.
(`page.js`, `strings.js`, `cs2.css` esa shu repozitoriyga tegishli.)
