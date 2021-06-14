# GreenSway
🟢 My SPA product idea from business plan to MVP.🟢
________________________________________________________________________________________________________________________________________________________________________________
## Syfte 
Webbutvecklare inom .NET, YH-utbildning – Vt. 2021. Inlämningsuppgifter i kursen Dynamiska Webbsystem 2 som bygger vidare på affärsidé framtagen i inlämningsuppgifter i kursen Affärsmannaskap för IT 
## Tekniker
* SPA
* React
* Recat-Redux
* HTML5
* JavaScript
* CSS3
## Läranderesultaten
I denna uppgift berörs framför allt läranderesultaten:
### Kunskaper:
* förklara användning av något eller några moderna klientramverk för webbapplikationer
* redogöra för tekniker för att utveckla en ”Single Page Application” samt beskriva fördelar och utmaningar med angreppssättet
* redogöra för olika former av lagring av data på klientsidan och beskriva deras användningsområden för webbutveckling
### Färdigheter:
* utveckla klientprogram med hjälp av modernt ramverk som nyttjar serverkommunikation med REST
* skapa och manipulera dynamiska användargränssnitt i en webbapplikation
* planera och genomföra en produktpresentation av ett programmeringsprojekt
### Kompetenser:
* självständigt tillämpa lämpliga metoder för källkodshantering av mjukvaruprojekt
#### Poäng (Betyg)
* Dynamiska Webbsystem 2
1. [Planering och förutsättningar](https://github.com/WiviWonderWoman/GreenSway/releases/tag/v1.0) 100/100 (G)
2. [The proof of concept](https://github.com/WiviWonderWoman/GreenSway/releases/tag/v2.0) 100/100)(G) 
3. [Från koncept till prototyp](https://github.com/WiviWonderWoman/GreenSway/releases/tag/v3.0) 92/100 (VG)
4. [A Minimum Viable Product](https://github.com/WiviWonderWoman/GreenSway/releases/tag/v4.0) 100/100 (VG)
* Affärsmannaskap för IT 
1.  100/100 (VG)
2. 100/100 (VG)
3. 100/100 (VG)
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
## Dependencies

### [react](https://www.npmjs.com/package/react)
Används för att bygga de komponenter som applikationens UI består av

### [react-dom](https://www.npmjs.com/package/react-dom)
Används för att kunna rendera react komponenterna

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

### [redux-thunk](https://www.npmjs.com/package/redux-thunk)
Används för att kunna dispatcha funktioner

### [react-calendar](https://www.npmjs.com/package/react-calendar)
Används för att integrera en kalendervy med "inbyggd" formatering och språkinställningar.

### Dependencies som inte används ännu:
  #### [redux-toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)
  Kan används för att underlätt tillståndshanteringen.
________________________________________________________________________________________________________________________________________________________________________________
## Tjänster
Jag har skapat tre mock-API: med hjälp av [retool](https://retool.com/api-generator/) men för tillfället används bara två.
### 1. [https://retoolapi.dev/BOnmI8/greenswayusers](https://retoolapi.dev/BOnmI8/greenswayusers)
Med användare (hushåll) främst för att få slumpade värden för "förbrukning" av respektive sop-fraktion. Email för att knyta en ny användare. 
Anropas från 
#### app.jsx 
* för att hämta användaren, ```GET(/id)``` 
* eller ny användare (första med tom email, jag ser till att det finns ett antal att testa på), ```GET(?email)```
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
#### 2. [https://retoolapi.dev/NId9jR/greenswayfractions](https://retoolapi.dev/NId9jR/greenswayfractions)
För att hämta alla fraktioner i samma "garbagehouse" (typ kvarter/fastighet) som användaren.
Anropas från
#### drop-down.jsx
* för att hämta fraktioner, ```GET(/garbagehouse)``` 
#### Exempel:
```
[
   {
        "id": 1,
        "allFractions": [
            {
                "max": 90,
                "name": "Organisktavfall",
                "unit": "kg",
                "price": 0.5,
                "isFull": false,
                "source": "organic",
                "hatchOpen": false,
                "fractionId": "ow",
                "garbagehouse": "1-001"
            },
            ... + 7 objekt ...
            {
                "max": 50,
                "name": "El",
                "unit": "kWh",
                "price": 3,
                "isFull": false,
                "source": "electricity",
                "hatchOpen": false,
                "fractionId": "el",
                "garbagehouse": "1-001"
            }
        ]
    }
]
```
________________________________________________________________________________________________________________________________________________________________________________
### Tjänster som inte används ännu:
#### 3. [https://retoolapi.dev/CzwwKd/greenswaylandlord](https://retoolapi.dev/CzwwKd/greenswaylandlord)
Anger hur fyllda sopkärlen är i procent.
##### Exempel:
```
[
    {
        "id": 1,
        "glas": "87%",
        "metal": "12%",
        "organic": "73%",
        "plastic": "54%",
        "residual": "60%",
        "cardboard": "56%",
        "newspaper": "63%",
        "garbagehouse": "1-001"
    },
    {
        "id": 2,
        "glas": "47%",
        "metal": "30%",
        "organic": "54%",
        "plastic": "65%",
        "residual": "82%",
        "cardboard": "32%",
        "newspaper": "82%",
        "garbagehouse": "1-002"
    },
    {
        "id": 3,
        "glas": "41%",
        "metal": "17%",
        "organic": "52%",
        "plastic": "89%",
        "residual": "63%",
        "cardboard": "99%",
        "newspaper": "80%",
        "garbagehouse": "1-003"
    }
]
```

