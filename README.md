# Website-Project
A simple clothes website. Nikita Kirejev ja Nikita Popovych
# Gaya

Gaya on kaasaegne e-poe veebileht rõivaste jaoks, mis sisaldab kasutaja autentimist, registreerimist, profiililehte, ostukorvi ja tootekataloogi. Projekt on välja töötatud puhta HTML-i, CSS-i ja JavaScripti (kliendi poolel) ning Node.js, MySQL-i ja bcrypti (serveri poolel) abil.

## Põhifunktsioonid

* **Kataloog ja navigeerimine:** Mugav toodete otsing ja filtreerimine kategooriate kaupa (meeste/naiste riided, hooajalised garderoobid, stiilid, värvid)[cite: 3].
* **Autentimine ja turvalisus:** 
  * Uute kasutajate registreerimine e-posti ja paroolide vastavuse kontrolliga[cite: 10].
  * Paroolide räsimine `bcrypt` teegi abil[cite: 6].
  * Turvaline sisselogimine ja sessioonide haldus `localStorage` kaudu[cite: 10].
* **Profiilileht:** Kasutaja andmete ja tellimuste ajaloo vaatamine koos aktuaalsete staatustega (kohale toimetatud, teel, töös)[cite: 8].
* **Interaktiivne liides:** Avanev külgmenüü (`SlideBar`), kohanduv päis ja dünaamiline ümbersuunamine sõltuvalt sisselogimise olekust[cite: 1, 10].

## Tehnoloogiad

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)[cite: 1, 10]
* **Backend:** Node.js, Express[cite: 6, 10]
* **Andmebaas:** MySQL (`mysql2`)[cite: 6]
* **Turvalisus:** `bcrypt` (paroolide räsimiseks), `cors` (domeenideüleste päringute töötlemiseks)[cite: 6]

## Projekti struktuur

* `index.html` – Veebipoe pealeht (kataloog, brändid, toodete ruudustik)[cite: 3].
* `login.html` – Süsteemi sisselogimise leht[cite: 4].
* `login_menu.html` – Autentimise tervitusmenüü[cite: 5].
* `registration.html` – Uue konto loomise leht[cite: 9].
* `profile.html` – Kasutaja profiil ja tellimuste ajalugu[cite: 8].
* `cart.html` – Ostukorvi leht[cite: 1].
* `contact.html` – Arendajate ja klienditoe kontaktid[cite: 2].
* `style.css` – Kujunduse stiililehed.
* `script.js` – Kliendipoolne loogika (menüühalduse, sisselogimis-/registreerimisvormide töötlemine ja sessioonide kontroll)[cite: 10].

