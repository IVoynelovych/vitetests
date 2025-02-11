export function renderWithMathJax(element) {
    let content = element.innerHTML;

    if (content.trim()) {
        content = content.replace(/\bbelongs\b/g, ' ∈ ');
        content = content.replace(/\(([^|]+)\|(-?\d+)\)/g, ' \\(\\frac{$1}{$2}\\) ');
        content = content.replace(/а\^2/g, 'a²').replace(/y\^3/g, 'y³').replace(/а\^3/g, 'a³').replace(/х\^2/g, 'x²');
        content = content.replace(/(\w+)\^(\d+)/g, ' \\($1^{$2}\\) '); 
        content = content.replace(/\*/g, ' \\(\\cdot\\) ');
        content = content.replace(/(\d+)\s?πсм\^2/g, '$1 см²');
        content = content.replace(/(\d+)\s?x\^2/g, '$1x²');
        content = content.replace(/\(([^)]+)\)\^2/g, '($1)²');       
        content = content.replace(/(\d+)\s?см\^(-?\d+)/g, ' \\($1cм^{ $2 }\\) ');
        content = content.replace(/(\d+)\s?смм\^2(-?\d+)/g, ' a³');
        content = content.replace(/(\d+)\s?pi/g, '$1π');
        content = content.replace(/pi\s?см/g, 'πсм'); 
        content = content.replace(/\btriangle\s*/gi, ' \\(\\triangle \\) ');
        content = content.replace(/\bangle\s*(\w+)/gi, ' \\(\\angle $1\\) ');
        content = content.replace(/(\d+)\|(\d+)/g, ' \\(\\frac{$1}{$2}\\) ');
        element.innerHTML = content;
        if (typeof MathJax !== 'undefined') {
            MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
        } else {
            setTimeout(() => renderWithMathJax(element), 100);
        }
    } else {
        setTimeout(() => renderWithMathJax(element), 100);
    }
}
