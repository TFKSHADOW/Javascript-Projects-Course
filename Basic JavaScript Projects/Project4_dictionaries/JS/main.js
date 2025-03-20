//dictionary challenge

function myDictionary() {
    var Vehicle = {
        make: "Nissan",
        model: "Qashqai",
        year: 2015,
        engine: "diesel",
        hp:75
    };
    document.getElementById("Dictionary").innerHTML = Vehicle.engine;
}
 
//delete challenge

function myDictionary2() {
    var Vehicle2 = {
        make: "Nissan",
        model: "Qashqai",
        year: 2015,
        engine: "diesel",
        hp:75
    };
    delete Vehicle2.engine;
    document.getElementById("Dictionary2").innerHTML = Vehicle2.engine;
}
 