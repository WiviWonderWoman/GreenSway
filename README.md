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

### [axios](https://www.npmjs.com/package/axios)
Används för att smidigare kunna göra avgränsade HTTP-anrop utan att behöva tänka på JSON format.

### [react-minimal-pie-chart](https://www.npmjs.com/package/react-minimal-pie-chart)
Används för att visuallisera användarens "förbrukning" som ett cirkeldiagram.

### [react-router-dom](https://www.npmjs.com/package/react-router-dom)
Används för att navigara mellan "sidor", genom fejk URL möjliggörs att gå fram och bak i webbläsarhistoriken.

### [prop-types](https://www.npmjs.com/package/proptypes)
Används för att validera (dokumentera) mina komponenters props.

### [react-redux](https://www.npmjs.com/package/react-redux)
Används för tillståndshantering.

### [redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
Används för att underlätt tillståndshanteringen.

### [react-calendar](https://www.npmjs.com/package/react-calendar)
Används för att integrera en kalendervy med "inbyggd" formatering och språkinställningar.
________________________________________________________________________________________________________________________________________________________________________________
## Tjänster

### [retool](https://retool.com/api-generator/)
Jag har skapat ett mock-API: 
#### [https://retoolapi.dev/BOnmI8/greenswayusers](https://retoolapi.dev/BOnmI8/greenswayusers)
Med användare (hushåll) främst för att få slumpade värden för "förbrukning" av respektive sop-fraktion. Email för att knyta en ny användare. 
Anropas från 
#### app.jsx 
* för att hämta användaren, ```GET(/id)``` 
* eller ny användare (första med tom email, jag ser till att det finns ett antal att testa på), ```GET(?email)```

* sparar även förbruknings-data och skicka neråt till PieChart (för att möjliggöra animering)
#### user-form.jsx
* för att uppdatera email på den nya användaren, ```PATCH(/id, {email: email})``` 
#### Exempel:
```
{
  "id": 1,
  "glas": 19,
  "email": "demo@greensway.com",
  "metal": 28,
  "water": 29,
  "organic": 50,
  "plastic": 34,
  "residual": 19,
  "cardboard": 24,
  "newspaper": 30,
  "electricity": 17,
  "garbagehouse": "1-003"
}
```
(garbagehouse är tänkt att användas för admins att kunna se statistik för ett helt sophus.)

  PS: Ni får gärna "städa upp" ✔️ era registrerade emails efterhand, tex via Postman (```PATCH(/id, {email: ""})```), tack! 🤗 D.S 


________________________________________________________________________________________________________________________________________________________________________________
