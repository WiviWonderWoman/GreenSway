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
#### PS: Ni får gärna "städa upp" ✔️ era registrerade emails efterhand, tex via Postman (```PATCH(/id, {email: ""})```), tack! 🤗 D.S 
* sparar även förbruknings-data och skicka neråt till PieChart (för att möjliggöra animering)
#### user-form.jsx
* för att uppdatera email på den nya användaren, ```PATCH(/id, {email: email})``` 
#### table.jsx
* för att hämta användarens data för fraktioner, ```GET(/id)``` och visa aktuella kostnader
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
(garbagehouse är tänkt att användas för admins att kunna se statistik för ett helt sophus.)


________________________________________________________________________________________________________________________________________________________________________________
## Kravlista för källkodsprojektet

- [ ] Ditt inlämnade arbete ska fortsätta från samma källkodsprojekt (repo) som tidigare inlämningsuppgifter. app.html ska vara uppdaterad med din vidareutvecklade prototyp och readme.md ska uppdateras efter behov för att kunna starta och testa applikationen.
- [ ] Källkoden ska bestå av minst 15 React komponenter du skrivit själv med hjälp av JSX.
- [ ] En av dina React komponenter ska vara en "Error Boundry"-komponent, som används korrekt i komponent-trädet
- [ ] Paketet Prop-Types ska vara installerat och användas i applikationen på minst 4 st av dina egna komponenter - välj de mest relevanta.
- [ ] En av dina nya komponenter ska vara en generellt återanvändningsbar komponent som är enkel att återanvända i en annan applikation med viss avancerad funktionalitet. Komponentens kod ska vara dokumenterad.
- [ ] Antigen Redux eller Reacts Context-API ska användas för att skapa ett gemensamt tillstånd mellan flera olika komponenter oberoende deras placering i React-trädet
- [ ] Din applikation ska vid användning på minst fyra tillfällen använda sig av serverkommunikation med ett REST API
- [ ] Kommunikationen med REST-API:et ska implementerat väl avgränsad från UI-logiken (komponenter) och nyttja lämplig felhantering för om API:et inte är tillgänglig eller ger ett oväntat svar

## Kravlista för rapporten

- [ ] Rubrik: Min återanvändningsbara komponent
Vilken komponent har du fokuserat på att göra återanvändningsbar? Beskriv och motivera komponentens syfte, beroenden/förutsättningar och vilka på vilket sätt den är återanvändningsbar (minst 2 paragrafer)
- [ ] Rubrik: Kodstruktur och felhantering
Beskriv och motivera den kodstruktur du använt för att strukturera anrop från din klientapplikation till REST-API:et, har du gjort förbättringar från din förra inlämning beskriv gärna dem. Vilka fel kan tänkas uppstå och hur hanteras fel i förhållande till dina React-komponenter? (ung. 2 till 3 paragrafer)
- [ ] Rubrik: Min Error Boundry
Hur har du designat din Error-boundry komponent? Motivera hur den bidrar med en bättre upplevelse för användaren vid fel - vilka möjliga steg kan användaren ta om Error Boundry komponenten fångar ett fel? (minst 2 paragrafer)

