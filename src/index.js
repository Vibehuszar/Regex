"use strict";
let regexteljesnev = /[aA-zZ]{1,}/;
let regexorszag = /[aA-zZ]{1,}/;
let regexvaros = /[aA-zZ]{1,}/;
let regexutca = /[aA-zZ 0-9]{1,}/;
let regexirszam = /[A-Z 0-9]{1,}/;
let regexkartyaszam = /[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/;
let regexellkod = /[0-9]{3,3}/;
let regexkartyanev = /[aA-zZ ]{1,}/;
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let lista = document.getElementById('lista');
    (_a = document.getElementById('fizetes')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        lista.innerHTML = "";
        let joe = false;
        let teljesnev = document.getElementById('teljesnev').value;
        if (!regexteljesnev.test(teljesnev)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás név!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let orszag = document.getElementById('orszag').value;
        if (!regexorszag.test(orszag)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás ország!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let varos = document.getElementById('varos').value;
        if (!regexvaros.test(varos)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás város!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let utca = document.getElementById('utca').value;
        if (!regexutca.test(utca)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás utca!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let irszam = document.getElementById('irszam').value;
        if (!regexirszam.test(irszam)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás irányítószám!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let kartyaszam = document.getElementById('kartyaszam').value;
        if (!regexkartyaszam.test(kartyaszam)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás bankkártya szám!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let ellkod = document.getElementById('ellkod').value;
        if (!regexellkod.test(ellkod)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás ellenőrző kód!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        let knev = document.getElementById('knev').value;
        if (!regexkartyanev.test(knev)) {
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás kártya név!";
            li.style.color = "red";
            lista === null || lista === void 0 ? void 0 : lista.appendChild(li);
        }
        else {
            joe = true;
        }
        if (joe = true) {
            alert("Sikeres fizetés");
        }
    });
});
