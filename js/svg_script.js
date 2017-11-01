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

    addLink("#kitchen_link", "../kitchen.html");
    addLink("#laundry_link", "../laundry.html");
    addLink("#bedroom_link", "../bedroom.html");
    addLink("#bathroom_link", "../bathroom.html");
    addLink("#studio_link", "../studio.html");
    addLink("#boiler_room_link", "../boiler.html");
    addLink("#garage_link", "../garage.html");
    addLink("#children_room_link", "../children.html");
    addLink("#living_room_link", "../living.html");
    addLink("#outdoor_link", "../outdoor.html");
    addLink("#entrence_link", "../entrence.html");

    hover("[id*='lightsOff']");
    hoverOutside("[id*='outside']");
}
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

function hover(target) {
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
