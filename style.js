// politic party variable
let anc = 0;
let da = 0;
let eff = 0;
let ifp = 0;


function vote() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const nationality = document.getElementById("nationality").value;
    const party = document.getElementById("party").value;



    const ancDisplay = document.getElementById("ancTotal");
    const daDisplay = document.getElementById("daTotal");
    const effDisplay = document.getElementById("effTotal");
    const ifpDisplay = document.getElementById("ifpTotal");


    
    
    if (name == "") {
        alert("Please provide your name");
        return;
    }

    if (age < 18) {
        alert("You are under, you cannot vote");
        return;
    }

    if (nationality == "Foreigner") {
        alert("only south africa can vote");
        return;
    }

    if (party == "party") {
        alert("which party won");
        return;
    }


    if (party == "ANC") {
        anc++;
        ancDisplay.innerHTML = anc;
        return;
    }

    if (party == "IFP") {
        ifp++;
        ifpDisplay.innerHTML = ifp;
        return; 
    }

    if (party == "DA") {
        da++;
        daDisplay.innerHTML = da;
        return;
    }

    if (party == "EFF") {
        eff++;
        effDisplay.innerHTML = eff;
        return;
    }

    
}