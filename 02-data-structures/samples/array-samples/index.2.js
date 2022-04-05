let colors = "green,yellow,black,red";

const colorsArray = colors.split(",");

console.log(colorsArray);

colorsArray.push("blue");
colorsArray.push("white");

colors = colorsArray.join(" -- ");

console.log(colors);
