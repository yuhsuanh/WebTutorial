//Finding HTML Elements
demo = document.getElementById("demo");
head1 = document.getElementByTagName("h1");
paraClass = document.getElementByClassName("para");
findByCSSSelectors = document.querySelectorAll("p #demo");


//Changing HTML Elements
demo.innerHTML = "new html content";
demo.attribute = "new value";
demo.style.property = "new style";
demo.setAttribute(attribute, value);


//Adding and Deleting Elements
document.createElement(element);
document.removeChild(element);
document.appendChild(element);
document.replaceChild(new, old);
document.write(txt);


//Adding Events Handlers
demo.onclick = function() {  };
