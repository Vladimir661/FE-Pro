const svgContainer=  document.querySelector(".svgContainer")

export function createSVGLineFN (x1, y1, x2, y2, color = 'black', thickness = 2) {

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", thickness);

    svg.appendChild(line);
    svgContainer.appendChild(svg);
}
// createSVGLineFN(10, 20, 200, 150, 'blue', 4);
// createSVGLineFN(20, 30, 210, 180, 'yellow', 6);