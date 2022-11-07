let regexteljesnev: RegExp = /[aA-zZ]{1,}/;
let regexorszag: RegExp = /[aA-zZ]{1,}/;
let regexvaros: RegExp = /[aA-zZ]{1,}/;
let regexutca: RegExp = /[aA-zZ 0-9]{1,}/;
let regexirszam: RegExp = /[A-Z 0-9]{1,}/;
let regexkartyaszam: RegExp = /[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}-[0-9]{4,4}$/;
let regexellkod: RegExp = /[0-9]{3,3}/;
let regexkartyanev: RegExp = /[aA-zZ ]{1,}/;

document.addEventListener('DOMContentLoaded', () => {

    let lista = document.getElementById('lista');
    document.getElementById('fizetes')?.addEventListener('click', () => {

        lista!.innerHTML = "";
        let joe: boolean = false;
        let teljesnev = (document.getElementById('teljesnev') as HTMLInputElement).value;
        if(!regexteljesnev.test(teljesnev)){
            joe = false;
    
            let li = document.createElement('li');
            li.innerHTML = "Hibás név!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let orszag = (document.getElementById('orszag') as HTMLInputElement).value;
        if(!regexorszag.test(orszag)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás ország!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let varos = (document.getElementById('varos') as HTMLInputElement).value;
        if(!regexvaros.test(varos)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás város!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let utca = (document.getElementById('utca') as HTMLInputElement).value;
        if(!regexutca.test(utca)){
            joe = false;           
            let li = document.createElement('li');
            li.innerHTML = "Hibás utca!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let irszam = (document.getElementById('irszam') as HTMLInputElement).value;
        if(!regexirszam.test(irszam)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás irányítószám!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let kartyaszam = (document.getElementById('kartyaszam') as HTMLInputElement).value;
        if(!regexkartyaszam.test(kartyaszam)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás bankkártya szám!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let ellkod = (document.getElementById('ellkod') as HTMLInputElement).value;
        if(!regexellkod.test(ellkod)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás ellenőrző kód!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        let knev = (document.getElementById('knev') as HTMLInputElement).value;
        if(!regexkartyanev.test(knev)){
            joe = false;
            let li = document.createElement('li');
            li.innerHTML = "Hibás kártya név!"
            li.style.color = "red";
            lista?.appendChild(li);
        }else{
            joe = true;
        }

        if(joe = true){
            alert("Sikeres fizetés");
        }
    })

    
    
})