export function renderWithMathJax(element) {  
    let content = element.innerHTML;
  
    if (content.trim()) {
      content = content.replace(/(\d+)\|(\d+)/g, '\\(\\frac{$1}{$2}\\)');
      content = content.replace(/\*/g, '\\cdot');
  
      element.innerHTML = content;
      if (typeof MathJax !== 'undefined') {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
      }
    } else {
      console.log("Content is empty, retrying...");
      setTimeout(() => renderWithMathJax(element), 100); 
    }
  }