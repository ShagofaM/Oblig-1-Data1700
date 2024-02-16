let billetter = [], ut = "<table><tr>" +

    "<th>Filmer</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" + "</tr>";

function kjopKnapp(){
    const billett={

        Filmer: document.getElementById("Filmer").value,
        Antall: document.getElementById("Antall").value,
        Fornavn: document.getElementById("Fornavn").value,
        Etternavn: document.getElementById("Etternavn").value,
        Telefonnr: document.getElementById("Telefonnr").value,
        Epost: document.getElementById("Epost").value
    };

    if (!billett.Antall || billett.Fornavn || !billett.Etternavn || !billett.Telefonnr || !billett.Epost) {
        document.getElementById("AntallError").innerHTML="Vennligst fyll inn antall billetter";
        document.getElementById("FornavnError").innerHTML="Vennligst fyll inn fornavn";
        document.getElementById("EtternavnError").innerHTML="Vennligst fyll inn etternavn";
        document.getElementById("TelefonnrError").innerHTML="Vennligst fyll inn telefonnummer";
        document.getElementById("EpostError").innerHTML="Vennligst fyll inn epost adresse";

    } else {
        billetter.push(billett);

        for(let liste of billetter){
            ut+="<tr>"
            ut+="<td>" + liste.Filmer + "</td><td>"+ liste.Antall +"</td><td>"+ liste.Fornavn+"</td>"+
                "<td>" + liste.Etternavn+ "</td><td>" + liste.Telefonnr+"</td><td>"+liste.Epost+"</td>";
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
    function slettKnapp() {
    document.getElementById("ut").innerHTML="";
    billetter=[];
    }