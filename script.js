//your JS code here. If required.
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// function to remove a, an, the
function removeArticle(text) {
  return text.replace(/^(a |an |the )/i, '').trim();
}

// sort bands alphabetically ignoring articles
bands.sort((a, b) => {
  return removeArticle(a).localeCompare(removeArticle(b));
});

// display list in UL
const ul = document.getElementById("band");

bands.forEach(band => {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});
