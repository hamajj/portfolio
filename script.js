const input = document.getElementById('input');
const output = document.getElementById('output');

const commands = {
    help: "Available commands:<br>about <br>projects <br>contact",
    about: "Hi! I'm Mehmet Hamza Akca.<br>A secondary school student obsessed with coding <br>I love game dev & low-level software engineering <br>Big fan of Linux & open-source <br>Type <strong>`projects`</strong> to see what I've built!",
    projects: "Projects:<br>Portfolio: https://github.com/hamajj/portfolio <br>Sorting Visualizer: https://github.com/hamajj/sortingvisualizer <br>teditor: https://github.com/hamajj/teditor<br>procman: https://github.com/hamajj/procman<br><br>More projects coming soon!",
    contact: "You can reach me at: mehmethamzaakca@tutamail.com<br>Or find me on GitHub: https://github.com/hamajj",
    deno: "Professional Cheater"
};

function printLine(text, delay = 0) {
    const line = document.createElement('div');
    line.className = 'line';
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;

    const parts = text.split(/(<[^>]+>)/g);
    let partIndex = 0;
    let charIndex = 0;

    function typeChar() {
        if (partIndex < parts.length) {
            const part = parts[partIndex];

            if (part.startsWith('<') && part.endsWith('>')) {
                line.innerHTML += part;
                partIndex++;
                setTimeout(typeChar, 0);
            } else {
                if (charIndex < part.length) {
                    line.innerHTML += part[charIndex];
                    charIndex++;
                    setTimeout(typeChar, 20);
                } else {
                    charIndex = 0;
                    partIndex++;
                    setTimeout(typeChar, 0);
                }
            }
        } else {
            output.scrollTop = output.scrollHeight;
        }
    }

    if (delay > 0) {
        setTimeout(typeChar, delay);
    } else {
        typeChar();
    }
}

printLine('Welcome to my portfolio! Type <strong>`help`</strong> for commands.');

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (!command) return;

        printLine(`~$ ${command}`);
        if (commands[command]) {
            printLine(commands[command], 100);
        } else {
            printLine(`Command not found: ${command}`, 100);
        }
        input.value = '';
    }
});
