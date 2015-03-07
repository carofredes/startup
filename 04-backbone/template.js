
var cinderella = { title: "Cinderella", time: "112 min", genre: "Adventure, Drama", description: "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her daughters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger in the woods.", director: "Kenneth Branagh", stars: "Lily James, Hayley Atwell, Cate Blanchett, Helena Bonham Carter" };
var movieTemplate =$("#movieTemplate").html();
var thetemplate = Handlebars.compile(movieTemplate);
$(document.body).append(thetemplate(cinderella));
var runallnight = {title: "Run all night", time: "114 min", genre: "Action, Crime", description:"Mobster and hit man Jimmy Conlon has one night to figure out where his loyalties lie: with his estranged son, Mike, whose life is in danger, or his longtime best friend, mob boss Shawn Maguire, who wants Mike to pay for the death of his own son.", director: "Jaume Collet-Serra", stars: "Liam Neeson, Ed Harris, Joel Kinnaman, Vincent D'Onofrio"};
$(document.body).append(thetemplate(runallnight));


