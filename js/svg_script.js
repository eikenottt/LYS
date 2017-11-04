var svgNS = "http://www.w3.org/2000/svg";
function init(evt)
{
    if ( window.svgDocument == null )
    {
        svgDoc = evt.target.ownerDocument;
    }

    /*
        #kitchen_link
        #laundry_link
        #bedroom_link
        #bathroom_link
        #studio_link
        #boiler_room_link
        #garage_link
        #children_room_link
        #living_room_link
    */

    //addRotateTransform('#windmill', 3, 1);

    addLink("#kitchen_link", "../resources/kitchen.html");
    addLink("#laundry_link", "../resources/laundry.html");
    addLink("#bedroom_link", "../resources/bedroom.html");
    addLink("#bathroom_link", "../resources/bathroom.html");
    addLink("#studio_link", "../resources/homeoffice.html");
    addLink("#boiler_room_link", "../resources/basement.html");
    addLink("#garage_link", "../resources/garage.html");
    addLink("#children_room_link", "../resources/bedroom.html");
    addLink("#living_room_link", "../resources/livingroom.html");
    addLink("#outdoor_link", "../resources/outdoor.html");
    addLink("#entrence_link", "../resources/entrence.html");

    hover("[id*='lightsOff']");
    hoverOutside("[id*='outside']");
}

function hover(target) {
    console.log("Mobile");
    var my_elements = svgDoc.querySelectorAll(target);
    my_elements.forEach(e => {
        e.style.transition = "0.5s";
        e.addEventListener("mouseover", function() {
            e.style.opacity = 0;
            e.style.cursor = "pointer";
        });
        e.addEventListener("mouseleave", function() {
            e.style.opacity = 0.7;
        });
    });
}

function hoverOutside(target){
    var my_elements = svgDoc.querySelectorAll(target);
    var o_lights = svgDoc.querySelector("#out_lights");
    var e_lights = svgDoc.querySelector("#en_lights");
    var day = svgDoc.querySelector("#day");
    var night = svgDoc.querySelector("#night");
    my_elements.forEach(e => {
        e_lights.style.opacity = 0;
        o_lights.style.opacity = 0;
        e.addEventListener("mouseover", function() {
            e.style.cursor = "pointer";
            console.log(e);
            o_lights.style.opacity = 1;
            e_lights.style.opacity = 1;
        });
        e.addEventListener("mouseleave", function() {
            o_lights.style.opacity = 0;
            e_lights.style.opacity = 0;
        });
    });
}

function addLink(target_id, link_address) {
    var target_element = svgDoc.querySelector(target_id);
    target_element.setAttribute("href", link_address);
}
