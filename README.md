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
            {
                "max": 50,
                "name": "Tidningar",
                "unit": "kg",
                "price": 0.5,
                "isFull": true,
                "source": "newspaper",
                "hatchOpen": false,
                "fractionId": "np",
                "garbagehouse": "1-001"
            },
            {
                "max": 50,
                "name": "Pappförpackningar",
                "unit": "kg",
                "price": 0.5,
                "isFull": false,
                "source": "cardboard",
                "hatchOpen": true,
                "fractionId": "cp",
                "garbagehouse": "1-001"
            },
            {
                "max": 50,
                "name": "Glasförpackningar",
                "unit": "kg",
                "price": 0.5,
                "isFull": false,
                "source": "glas",
                "hatchOpen": false,
                "fractionId": "gp",
                "garbagehouse": "1-001"
            },
            {
                "max": 35,
                "name": "Plastförpackningar",
                "unit": "kg",
                "price": 1,
                "isFull": true,
                "source": "plastic",
                "hatchOpen": false,
                "fractionId": "pp",
                "garbagehouse": "1-001"
            },
            {
                "max": 50,
                "name": "Metallförpackningar",
                "unit": "kg",
                "price": 0.5,
                "isFull": false,
                "source": "metal",
                "hatchOpen": false,
                "fractionId": "mp",
                "garbagehouse": "1-001"
            },
            {
                "max": 35,
                "name": "Restavfall",
                "unit": "kg",
                "price": 5,
                "isFull": false,
                "source": "residual",
                "hatchOpen": false,
                "fractionId": "rw",
                "garbagehouse": "1-001"
            },
            {
                "max": 50,
                "name": "Vatten",
                "unit": "kbm",
                "price": 2,
                "isFull": false,
                "source": "water",
                "hatchOpen": false,
                "fractionId": "wat",
                "garbagehouse": "1-001"
            },
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

