# Website-Project
A simple clothes website. Nikita Kirejev ja Nikita Popovych
# Gaya
Gaya onasaegne e-poe veebileht rõivaste jaoks, mis sisaldab kasutaja autentimist, registreerimist, profiililehte, ostukorvi ja tootekataloogi. Projekt on välja töötatud puhta HTML-i, CSS-i ja JavaScripti (kliendi poolel) ning Node.js, MySQL-i ja bcrypti (serveri poolel) abil.
# Põhifunktsioonid
Kataloog ja navigeerimine: Mugav toodete otsing ja filtreerimine kategooriate kaupa (meeste/naiste riided, hooajalised garderoobid, stiilid, värvid).
Autentimine ja turvalisus:
Uute kasutajate registreerimine e-posti ja paroolide vastavuse kontrolliga.  
Paroolide räsimine bcrypt teegi abil. 
Turvaline sisselogimine ja sessioonide haldus localStorage kaudu.
Profiilileht: Kasutaja andmete ja tellimuste ajaloo vaatamine koos aktuaalsete staatusega (kohale toimetatud, teel, töös).
Interaktiivne liides: Avanev külgmenüü (SlideBar), kohanduv päis ja dünaamiline ümbersuunamine sõltuvalt sisselogimise olekust. 
# TehnoloogiadFrontend
HTML5, CSS3, JavaScript (ES6+)   
Backend: Node.js, Express 
Andmebaas: MySQL (mysql2)  
Turvalisus: bcrypt (paroolide räsimiseks), cors (domeenideüleste päringute töötlemiseks)   

# Projekti struktuur
index.html – Veebipoe pealeht (kataloog, brändid, toodete ruudustik).   
login.html – Süsteemi sisselogimise leht. 
login_menu.html – Autentimise tervitusmenüü. 
registration.html – Uue konto loomise leht. 
profile.html – Kasutaja profiil ja tellimuste ajalugu. 
cart.html – Ostukorvi leht.
contact.html – Arendajate ja klienditoe kontaktid. 
style.css – Kujunduse stiililehed.
script.js – Kliendipoolne loogika (menüühalduse, sisselogimis-/registreerimisvormide töötlemine ja sessioonide kontroll).

# Paigaldamine ja käivitamine
Kloonige repositoorium: git clone <teie-repositooriumi-link>
Paigaldage backend'i sõltuvused:npm install
Seadistage MySQL andmebaasi ühendus vastavalt oma kohalikele parameetritele.
Käivitage rakenduse server.
