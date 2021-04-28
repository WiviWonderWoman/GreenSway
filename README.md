# GreenSway
🟢 My SPA product idea from business plan to MVP.🟢
________________________________________________________________________________________________________________________________________________________________________________
## Instruktioner

1. klona ner repot från GitHub :octocat:
2. öppna i din kodeditor :computer:
3. kör ```npm ci ``` i terminalen 
4. följt av ```npm start``` följande medelande visas: 
 > ```green-sway@1.0.0 start
 > parcel index.html --open
 > Server running at http://localhost:1234 
 > ✨  Built in ??ms.

5. 🚀 That´s it!  ✨

Troligtvis öppnas **[localhost: 1234](http://localhost:1234)**(/index.html) automatiskt i din förvalda webbläsare, du kommer vidare till app via länken i nav-baren eller lägg till: **/app.html** i webbläsarens adressfönster.
________________________________________________________________________________________________________________________________________________________________________________
## Externa bibliotek
- [x] I din källkod ska readme.md-filen under rubriken "externa bibliotek" innehålla en lista av dina installerade tredjepartsbibliotek. 
- [ ] Förklara kort varför de används

### [axios](https://www.npmjs.com/package/axios)
Används för att smidgt kunna göra HTTP-anrop utan att behöva tänka på JSON format.

### [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)
Används för att visuallisera användarens "förbrukning" som ett cirkeldiagram.

### [react-router-dom](https://www.npmjs.com/package/react-router-dom)
Används för att navigara på sidan och möjliggör att gå fram och bak i historiken samt uppdatera sidan utan att appen startar om.
________________________________________________________________________________________________________________________________________________________________________________
## Tjänster
- [x] Readme.md ska även innehålla rubriken Tjänster där du listar 
- [ ] och förklarar de Webb-API:er som anropas av din prototyp. - vart i koden & varför

### [retool](https://retool.com/api-generator/)
Jag har skapat ett mock-API: 
 #### [https://retoolapi.dev/BOnmI8/greenswayusers](https://retoolapi.dev/BOnmI8/greenswayusers)
 Med användare (hushåll) 
 #### Exempel:
```
{
        "id": 1,
        "glas": 19,
        "email": "",
        "metal": 28,
        "organic": 50,
        "plastic": 34,
        "residual": 19,
        "cardboard": 24,
        "newspaper": 30,
        "garbagehouse": "1-003"
}
```

________________________________________________________________________________________________________________________________________________________________________________
