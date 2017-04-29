// http://stackoverflow.com/questions/442404/dynamically-retrieve-the-position-x-y-of-an-html-element
module.exports = el => {
  if (el.getBoundingClientRect) {
      return el.getBoundingClientRect();
  }
  else {
    var x = 0;
    var y = 0;
    do {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
    } 
    while (el = el.offsetParent);

    return { "left": x, "top": y }
  }
}