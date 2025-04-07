// Typing effect for homepage intro text
const typingElement = document.querySelector('.typing');
const text = typingElement?.textContent;
typingElement.textContent = '';

let index = 0;
function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

if (typingElement) {
  type();
}
