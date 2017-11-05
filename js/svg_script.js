//This website was created by candidate nr: 107, 106 and 114
// Gathers the SVG syntax from w3.org
var svgNS = "http://www.w3.org/2000/svg";

// Main function to control the SVG hovering and windmill rotation
function init(evt)
{
    if ( window.svgDocument == null )
    {
        svgDoc = evt.target.ownerDocument;
    }

    // Rotates the windmill
    addRotateTransform('#windmill', 3, 1);

    // Adds links to rooms
    addLink("#kitchen_link", "../resources/kitchen.html");
    addLink("#laundry_link", "../resources/laundry.html");
    addLink("#bedroom_link", "../resources/bedroom.html");
    addLink("#bathroom_link", "../resources/bathroom.html");
    addLink("#studio_link", "../resources/homeoffice.html");
    addLink("#boiler_room_link", "../resources/contact.html");
    addLink("#garage_link", "../resources/garage.html");
    addLink("#children_room_link", "../resources/bedroom.html");
    addLink("#living_room_link", "../resources/livingroom.html");
    addLink("#outdoor_link", "../resources/outdoor.html");
    addLink("#entrence_link", "../resources/outdoor.html");

    // Adds hover ability on rooms and outdoors
    hover("[id*='lightsOff']");
    hoverOutside("[id*='outside']");
}

// Defines the function for rotation
function addRotateTransform(target_id, dur, dir) {
    var my_element = svgDoc.querySelector(target_id);
    var a = svgDoc.createElementNS(svgNS, "animateTransform");
    var bb = my_element.getBBox();
    var cx = bb.x + bb.width/2;
    var cy = bb.y + bb.height/2;

    a.setAttributeNS(null, "attributeName", "transform");

    a.setAttributeNS(null, "attributeType", "XML");

    a.setAttributeNS(null, "type", "rotate");

    a.setAttributeNS(null, "dur", dur + "s");

    a.setAttributeNS(null, "repeatCount", "indefinite");

    a.setAttributeNS(null, "from", "0 "+cx+" "+cy);

    a.setAttributeNS(null, "to", 360*dir+" "+cx+" "+cy);

    my_element.appendChild(a);

    a.beginElement();

}

// Defines hover function for rooms inside
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

// Defines hover function for outside
function hoverOutside(target){
    var my_elements = svgDoc.querySelectorAll(target);
    var o_lights = svgDoc.querySelector("#out_lights");
    var e_lights = svgDoc.querySelector("#en_lights");
    my_elements.forEach(e => {
        console.log(e);
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

// Defines function to add links
function addLink(target_id, link_address) {
    var target_element = svgDoc.querySelector(target_id);
    target_element.setAttribute("href", link_address);
}
