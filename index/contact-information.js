import { main } from "../index.js";

export function showContactInformation() {

    const file = './index/files/GreenSway-Affärsplan.pdf';

    main.innerHTML = `<div><h1>Intresserad av att veta mera?<br>Kul!<br>Klicka på ikonerna för att:</h1></div>
    <div class="flex-container"> 
        <ul class="nav-list">
            <li class="contact">Läsa hela affärsplanen (pdf):</li>
            <li><a href="${file}" target=":_blank"><i class="far fa-file-alt"></i></a></li>
        </ul>
        <ul class="nav-list">
            <li class="contact">Kontakta mig via mail:</li>
            <li><a href="mailto:w.grapenholt@gmail.com" target=":_blank"><i class="fas fa-at"></i></a></li></ul>
        <h2 class="contact">Titta in på någon av nedanstående länkar:</h2>
        <ul class="nav-list">
            <li><a href="https://github.com/WiviWonderWoman" target="_blank"><i class="fab fa-github-alt"></i></a></li>
            <li><a href="https://www.linkedin.com/in/wivianne-grapenholt-673b701b6/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/wivianne_grapenholt/" target="_blank"><i class="fab fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/wivi.grapenholt" target="_blank"><i class="fab fa-facebook"></i></a></li>
        </ul>
    </div>`;
}