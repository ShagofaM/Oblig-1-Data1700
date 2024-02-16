let billetter=[]
let ut="<table><tr>" +

    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+"</tr>;
    function kjopticket(){
    const billett={

        Filmer: document.getElementById("Filmer").value,
        Antall: document.getElementById("Antall").value,
        Fornavn: document.getElementById("Fornavn").value,
        Etternavn: document.getElementById("Etternavn").value,
        Telefonnr: document.getElementById("Telefonnr").value,
        Epost: document.getElementById("Epost").value
    };

    if (!billett.antall || !billett.antall || billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost) {
        document.getElementById("AntallError").innerHTML="Vennligst fyll inn antall billetter";
        document.getElementById("FornavnError").innerHTML="Vennligst fyll inn fornavn";
        document.getElementById("EtternavnError").innerHTML="Vennligst fyll inn etternavn";
        document.getElementById("TelefonnrError").innerHTML="Vennligst fyll inn telefonnummer";
        document.getElementById("EpostError").innerHTML="Vennligst fyll inn epost adresse";

    } else {
        billetter.push(billett);

        for(let liste of billetter){
            ut+="<tr>"
            ut+="<td>" + liste.film + "</td><td>+liste.antall+</td><td>+liste.epost+</td>";
            ut+="</tr>"

        }
        document.getElementById("ut").innerHTML=ut;

        billetter=[];

        document.getElementById("AntallError").innerHTML="";
        document.getElementById("FornavnError").innerHTML="";
        document.getElementById("EtternavnError").innerHTML="";
        document.getElementById("TelefonnrError").innerHTML="";
        document.getElementById("EpostError").innerHTML="";
    }
        document.getElementById("AntallError").valueL="";
        document.getElementById("FornavnError").valueL="";
        document.getElementById("EtternavnError").valueL="";
        document.getElementById("TelefonnrError").valueL="";
        document.getElementById("EpostError").valueL="";
    }
    function AltDelete() {
    document.getElementById("ut").innerHTML="";
    billetter=[];
    }