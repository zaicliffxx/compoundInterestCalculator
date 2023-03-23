function Conversion(tagId) {
    var sv = document.getElementById("startvalue").value;
    var ev = document.getElementById("endvalue").value;
    var unit = document.getElementById("unit").value;
    var conv = document.getElementById(tagId);
    var pre = document.createElement("pre");
    var kg2lbs, lbs2kg;
    conv.innerHTML = "";
    conv.appendChild(pre);

    // check for negative values
    if (sv < 0 || ev < 0)
    {
        alert("Please enter positive values only!");
        return;
    }

    // check for numeric values
    if (!/^\d+$/.test(sv) || !/^\d+$/.test(ev)) 
    {
        conv.innerHTML = "<span style='color: red;'>Please enter numbers only!</span>";
        return;
    }

    // Check that start value is smaller than end value
    if (sv >= ev) 
    {
        conv.innerHTML = "<span style='color: red;'>Start value must be smaller than End value!</span>";
        return;
    }

    
    // check that both fields have input    
    if (!sv || !ev)
    {
        alert("Both Start value and End value must be entered.");
        return;
    }


    var tab = pre.appendChild(document.createElement("table"));
    var head = tab.appendChild(document.createElement("thead"));
    var row = head.appendChild(document.createElement("tr"));

    var h = row.appendChild(document.createElement("th"));
    if (unit === "kg") {
        h.appendChild(document.createTextNode("Kilograms(Kg)"));
        h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Pounds(Lbs)"));
    } else if (unit === "lbs") {
        h.appendChild(document.createTextNode("Pounds(Lbs)"));
        h = row.appendChild(document.createElement("th"));
        h.appendChild(document.createTextNode("Kilograms(Kg)"));
    }

    var body = tab.appendChild(document.createElement("tbody"));

    for (let i = sv; i <= ev; i++) {
        if (unit === "kg") {
            kg2lbs = i * 2.20462;

            row = body.appendChild(document.createElement("tr"));
            row.style.color = i % 2 === 0 ? "darkgreen" : "maroon"; // alternate rows produce different text color
            var d = row.appendChild(document.createElement("td"));
            d.appendChild(document.createTextNode(i));

            d = row.appendChild(document.createElement("td"));
            d.appendChild(document.createTextNode(kg2lbs.toFixed(1)));
        } else if (unit === "lbs") {
            lbs2kg = i / 2.20462;

            row = body.appendChild(document.createElement("tr"));
            row.style.color = i % 2 === 0 ? "darkgreen" : "maroon"; // alternate rows produce different text color
            var d = row.appendChild(document.createElement("td"));
            d.appendChild(document.createTextNode(i));

            d = row.appendChild(document.createElement("td"));
            d.appendChild(document.createTextNode(lbs2kg.toFixed(1)));
        }
    }
}
