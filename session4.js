// Add to your sessionMaster.js or a separate script tag
(function initHeroLab() {
    document.addEventListener('mousemove', (e) => {
        const hero = document.querySelector('#s4-hero-lab');
        if (!hero) return;

        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

        const grid = hero.querySelector('.lab-grid-overlay');
        const wrapper = hero.querySelector('.hero-wrapper');

        grid.style.transform = `translate(${moveX}px, ${moveY}px)`;
        wrapper.style.transform = `translate(${-moveX * 2}px, ${-moveY * 2}px)`;
    });

    // Auto-sharpen the lead text after 2 seconds to show "Precision"
    setTimeout(() => {
        const blurText = document.querySelector('.highlight-blur');
        if (blurText) blurText.style.filter = "blur(0)";
    }, 2000);
})();

const specData = {
    g1: {
        title: "G1: Podcast Labelling System",
        uv: [
            { name: "Kennzeichnung (Agency)", dims: ["Label-Typ (Mensch vs. KI)", "Platzierung", "Visuelle Prominenz", "Heuristik-Trigger"] },
            { name: "Audio-Qualität (Modality)", dims: ["Stimmfarbe (Natürlichkeit)", "Prosodie (Rhythmus)", "Künstlichkeits-Artefakte", "MAIN-Modell Cues"] }
        ],
        av: [
            { name: "Credibility (Latent)", dims: ["Accuracy (Inhaltl. Richtigkeit)", "Authenticity (Echtheit)", "Believability (Glaubwürdigkeit)"] },
            { name: "Rezeption", dims: ["Informations-Recall", "Parasoziale Tendenz", "Wahrgenommene Kompetenz"] }
        ],
        z: [
            { name: "Vorerfahrung", dims: ["KI-Literacy", "Podcast-Nutzungshäufigkeit"] },
            { name: "Inhalt", dims: ["Themen-Involvement", "Religiosität/Werte (als Störfaktor)"] }
        ],
        alert: "FOKUS: Nutzt das MAIN-Modell, um zu erklären, WARUM das Label eine 'Abkürzung' im Urteil auslöst."
    },
    g2: {
        title: "G2: Google AI Search Verification",
        uv: [
            { name: "Darstellungsform", dims: ["AI-Overview vs. Klassisch", "Snippet-Länge", "Platzierung 'Above the Fold'"] },
            { name: "Aufgabentyp (Komplexität)", dims: ["Trivial-Fakt (Santiago)", "Komplex (Messy Search)", "Hohes Risiko (Finanzen/Gesundheit)"] }
        ],
        av: [
            { name: "Verifikationsverhalten", dims: ["Link-Klicks (CTR)", "Dauer der Quellensuche", "Cross-Checking (Tab-Anzahl)"] },
            { name: "Kognitiver Aufwand", dims: ["Systematic vs. Heuristic Processing (HSM)", "Principle of Least Effort"] }
        ],
        z: [
            { name: "Habit", dims: ["Default-Vertrauen in Google", "Nutzungsgewohnheit (Smartphone vs PC)"] },
            { name: "Demografie", dims: ["Alters-Kohorten (18-24 / 67+)", "Bildungsstand"] }
        ],
        alert: "GEFAHR: Das Chile-Beispiel provoziert 'Heuristic Processing' bei ALLEN. Nutzt schwierigere Fragen!"
    },
    g3: {
        title: "G3: Visual Authenticity Perception",
        uv: [
            { name: "Urheberschafts-Label", dims: ["Kennzeichnung: 'KI-generiert'", "Kennzeichnung: 'Foto'", "Kontrollgruppe"] },
            { name: "Bildinhalt (Trigger)", dims: ["Emotional (Verwundeter)", "Neutraler Content", "Vampir-Potenzial"] }
        ],
        av: [
            { name: "Authentizitäts-Intuition", dims: ["Effort-Heuristic (Wahrg. Mühe)", "Sincerity (Ehrlichkeit)", "Deepfake-Zweifel"] },
            { name: "Aisthesis (Wahrnehmung)", dims: ["Wahrg. Ästhetik", "Emotionale Valenz", "Arousal"] }
        ],
        z: [
            { name: "Vampir-Effekt", dims: ["Empathie-Trait", "Involvement mit Bildthema"] },
            { name: "Allg. KI-Skeptizismus", dims: ["Technik-Angst", "Medienerfahrung"] }
        ],
        alert: "ACHTUNG: Wenn das Bild zu grausam ist, wird das Label 'KI' irrelevant. Checkt den 'Ceiling-Effect'!"
    },
    g4: {
        title: "G4: WildChat Linguistic Norms",
        uv: [
            { name: "Prompter-Eigenschaften", dims: ["Nutzer-Intention", "Sprach-Niveau", "Kultureller Background"] },
            { name: "LLM-Response", dims: ["Antwort-Qualität", "Wahrgenommene Hilfsbereitschaft"] }
        ],
        av: [
            { name: "Höflichkeit (Norm-Transfer)", dims: ["Lexikalische Höflichkeit", "Syntaktische Direktheit", "Pragmatische Partnerschaft"] },
            { name: "Reaktivität", dims: ["Frustrations-Folge", "Feedback-Schleifen-Tonalität"] }
        ],
        z: [
            { name: "Task-Ambiente", dims: ["Informations-Task", "Kreativ-Task", "Coding-Task"] },
            { name: "LLM-Modell", dims: ["GPT-3.5 (Weniger höflich?)", "GPT-4 (Instruiert?)"] }
        ],
        alert: "SÄTTIGUNG: Definiert genau, was 'Unhöflichkeit' bei einer Maschine bedeutet (Brown & Levinson Adaption)."
    }
};

function loadSpec(groupId) {
    const target = document.getElementById('spec-target');
    const data = specData[groupId];

    // Update active button
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick').includes(groupId));
    });

    target.innerHTML = `
        <div class="blueprint-header">
            <h3>${data.title}</h3>
        </div>
        
        <div class="spec-block">
            <h4>[UV] Unabhängige Variablen (Der Reiz)</h4>
            <div class="spec-var-list">
                ${data.uv.map(v => `
                    <div class="spec-var-card">
                        <span class="var-title">${v.name}</span>
                        <div class="dim-badge-list">
                            ${v.dims.map(d => `<span class="dim-badge">${d}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="spec-block">
            <h4>[AV] Abhängige Variablen (Die Messung)</h4>
            <div class="spec-var-list">
                ${data.av.map(v => `
                    <div class="spec-var-card">
                        <span class="var-title">${v.name}</span>
                        <div class="dim-badge-list">
                            ${v.dims.map(d => `<span class="dim-badge">${d}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="spec-block">
            <h4>[Z] Dritt- & Kontrollvariablen (Das Rauschen)</h4>
            <div class="spec-var-list">
                ${data.z.map(v => `
                    <div class="spec-var-card">
                        <span class="var-title">${v.name}</span>
                        <div class="dim-badge-list">
                            ${v.dims.map(d => `<span class="dim-badge">${d}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="system-alert-block">
            <span style="font-size: 1.5rem;">⚠️</span>
            <div><strong>SYSTEM-KRITIK:</strong> ${data.alert}</div>
        </div>
    `;
}

// Initial load
document.addEventListener('DOMContentLoaded', () => loadSpec('g1'));


(function initDefinitionForge() {
    const textDisplay = document.getElementById('forge-text-display');
    const slider = document.getElementById('focus-slider');

    const versions = {
        vague: "Authentizität ist, wenn man merkt, dass das Bild echt ist und nicht gefaked wurde.",
        mid: "Authentizität beschreibt die Wahrnehmung von Echtheit in einem Bildinhalt.",
        sharp: "Authentizität eines visuellen Inhalts ist das Resultat einer Effort-Heuristik, bei der Rezipienten die Qualität basierend auf dem vermuteten menschlichen Herstellungsaufwand bewerten."
    };

    slider.addEventListener('input', (e) => {
        const val = e.target.value;

        // Blur reduction
        const blurAmount = Math.max(0, 4 - (val / 15));
        textDisplay.style.filter = `blur(${blurAmount}px)`;

        // Text switching logic
        if (val < 30) {
            textDisplay.textContent = versions.vague;
            textDisplay.style.color = "#94a3b8";
        } else if (val >= 30 && val < 75) {
            textDisplay.textContent = versions.mid;
            textDisplay.style.color = "#64748b";
        } else {
            textDisplay.textContent = versions.sharp;
            textDisplay.style.color = "#003560";
            textDisplay.style.fontWeight = "bold";
        }
    });
})();

function initLogicDebugger() {
    console.log("Debugger Terminal: Booting...");
    
    const probes = {
        g1: {
            text: "Glaubwürdigkeit definieren wir als das Ausmaß, in dem die Computer-Stimme im Audio-Clip natürlich und nicht abgehackt klingt.",
            correctDiag: "level",
            expl: "Level-Jumping! Du definierst die Dimension (Credibility) durch einen Indikator (Stimmklang).",
            fix: "Definiert Glaubwürdigkeit als 'Wahrgenommene Richtigkeit' (Appelman & Sundar). Die Stimme ist nur der Reiz (Cue) im MAIN-Modell."
        },
        g2: {
            text: "Das Verifikationsverhalten messen wir, indem wir Probanden nach der Hauptstadt von Chile fragen und schauen, ob sie googeln.",
            correctDiag: "trivial",
            expl: "Trivialitäts-Falle! Bei Fakten-Wissen gibt es keine Varianz beim Prüfen. Alle trauen der Info blind.",
            fix: "Nutzt komplexe, 'messy' Themen (Gesundheit, Technik), die echtes Zweifeln und damit Verifikation provozieren."
        },
        g3: {
            text: "Authentizität ist die emotionale Betroffenheit und das Mitleid, das der Rezipient beim Anblick des Fotos empfindet.",
            correctDiag: "mix",
            expl: "Konstrukt-Vermischung! Mitleid ist eine emotionale Wirkung (Y), nicht die Authentizität (X) des Bildes.",
            fix: "Trennt 'Affective Arousal' sauber von der 'Effort-Heuristik' (Mühe des Fotografen) ab."
        },
        g4: {
            text: "Höflichkeit ist die soziale Rücksichtnahme des Menschen gegenüber der KI, da er sie als gleichberechtigten Partner sieht.",
            correctDiag: "anthro",
            expl: "Anthro-Bias! Deine Definition setzt voraus, dass der User die KI als Partner sieht. Das ist Teil der Forschungsfrage.",
            fix: "Definiert Höflichkeit neutral als 'Transfer menschlicher Sprachnormen' auf ein technisches Artefakt."
        }
    };

    let currentProbe = null;
    const display = document.getElementById('debug-text-display');
    const feedback = document.getElementById('debugger-feedback');
    const probeBtns = document.querySelectorAll('.probe-btn');
    const diagBtns = document.querySelectorAll('.diag-btn');

    if (!display || probeBtns.length === 0) return; // CHIRURGISCHER FIX

    probeBtns.forEach(btn => {
        btn.onclick = () => { // onclick statt addEventListener für absolute Kontrolle
            probeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentProbe = probes[btn.dataset.probe];
            display.textContent = currentProbe.text;
            display.style.color = "#00d2ff";
            if(feedback) feedback.classList.remove('visible');
            diagBtns.forEach(b => b.className = 'diag-btn');
        };
    });

    diagBtns.forEach(btn => {
        btn.onclick = () => {
            if (!currentProbe) return;
            const type = btn.dataset.diag;
            if (type === currentProbe.correctDiag) {
                btn.classList.add('correct');
                document.getElementById('feedback-explanation').textContent = currentProbe.expl;
                document.getElementById('feedback-correction').textContent = currentProbe.fix;
                if(feedback) {
                    feedback.style.display = "block";
                    feedback.classList.add('visible');
                }
            } else {
                btn.classList.add('wrong');
                setTimeout(() => btn.classList.remove('wrong'), 500);
            }
        };
    });
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogicDebugger);
} else {
    initLogicDebugger();
}

// --- COMPLEXITY SIZER ENGINE ---
const sizerData = [
    { 
        name: "Alter der Befragten", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Alter ist manifest und eindimensional. Ein einzelnes Eingabefeld (Zahl) genügt. Hier nach Dimensionen zu suchen, wäre 'Over-Engineering'." 
    },
    { 
        name: "KI-Kompetenz (Literacy)", 
        type: "molecule", 
        title: "Richtig: Ein Molekül!", 
        desc: "Das ist hochkomplex! Man kann es nicht mit einer Frage messen. Du brauchst Dimensionen wie 'Technisches Wissen', 'Anwendungserfahrung' und 'Kritische Reflexion'." 
    },
    { 
        name: "Klick auf einen Link", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Ein binärer Fakt aus den Logdaten oder der Beobachtung. Ja oder Nein. Das ist ein direkter Indikator für Verhalten ohne weitere theoretische Unterebenen." 
    },
    { 
        name: "Glaubwürdigkeit (Credibility)", 
        type: "molecule", 
        title: "Absolut: Ein Molekül!", 
        desc: "Besonders für G1 wichtig: Glaubwürdigkeit ist ein latentes Konstrukt. Laut Appelman & Sundar zerfällt es mindestens in 'Richtigkeit', 'Echtheit' und 'Vertrauenswürdigkeit'." 
    },
    { 
        name: "Prompt-Länge (in Zeichen)", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Für G4: Die Länge ist ein rein quantitatives Maß, das du direkt aus dem WildChat-Datensatz abliest. Es ist ein Indikator für Komplexität, aber selbst kein komplexes Konstrukt." 
    },
    { 
        name: "Wahrgenommene Authentizität", 
        type: "molecule", 
        title: "Richtig: Ein Molekül!", 
        desc: "Für G3: Authentizität ist 'multidimensional'. Sie besteht aus der 'Mühe' (Effort-Heuristic), der 'Aufrichtigkeit' und der visuellen 'Fehlerfreiheit'." 
    },
    { 
        name: "Höflichkeit (Politeness)", 
        type: "molecule", 
        title: "Richtig: Ein Molekül!", 
        desc: "G4 aufgepasst: Höflichkeit ist kein einzelnes Wort. Sie zeigt sich auf der lexikalischen Ebene (Worte), der syntaktischen Ebene (Satzbau) und der pragmatischen Ebene (Intention)." 
    },
    { 
        name: "Verweildauer auf einem Bild", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Ein technischer Messwert in Millisekunden. Er ist ein Indikator für Aufmerksamkeit, aber der Wert selbst ist eindimensional und direkt messbar." 
    },
    { 
        name: "Parasoziale Interaktion (PSI)", 
        type: "molecule", 
        title: "Absolut: Ein Molekül!", 
        desc: "G1 weiß es jetzt: PSI umfasst kognitive, affektive und konative Aspekte. Das ist ein klassisches psychologisches Molekül mit vielen Facetten." 
    },
    { 
        name: "Nutzungshäufigkeit (Skala)", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Auch wenn man eine Skala nutzt (nie bis täglich), bleibt das Konzept eindimensional: Es misst nur die Frequenz. Es ist ein einfacher Verhaltensindikator." 
    },
    { 
        name: "Einstellung gegenüber KI", 
        type: "molecule", 
        title: "Richtig: Ein Molekül!", 
        desc: "Einstellungen haben in der Psychologie immer drei Dimensionen: Kognition (was ich denke), Affekt (was ich fühle) und Konation (wie ich handeln will)." 
    },
    { 
        name: "Bild-Auflösung (Pixel)", 
        type: "atom", 
        title: "Korrekt: Ein Atom!", 
        desc: "Ein technischer Parameter des Stimulus. Er kann zwar die Wahrnehmung beeinflussen, ist aber selbst ein eindeutiger, messbarer Fakt." 
    },
    { 
        name: "User-Zufriedenheit", 
        type: "molecule", 
        title: "Richtig: Ein Molekül!", 
        desc: "Zufriedenheit entsteht aus dem Vergleich von Erwartung und tatsächlicher Leistung. Man muss also beide Seiten (Dimensionen) kennen, um sie zu verstehen." 
    },
    { 
        name: "Wahrgenommene Menschlichkeit", 
        type: "molecule", 
        title: "Absolut: Ein Molekül!", 
        desc: "Besonders beim Uncanny Valley (G3): Menschlichkeit ist eine Mischung aus optischer Ähnlichkeit, emotionaler Wärme und logischer Konsistenz." 
    }
];

let sizerIndex = 0;

function initSizer() {
    updateProbe();
}

function updateProbe() {
    const probe = sizerData[sizerIndex];
    document.getElementById('current-probe-name').textContent = probe.name;
    const feedback = document.getElementById('sizer-feedback');
    feedback.className = 'sizer-feedback-hidden';
    document.getElementById('next-sizer-btn').style.display = 'none';
    document.getElementById('probe-card').style.transform = 'scale(1)';
}

function checkSize(choice) {
    const probe = sizerData[sizerIndex];
    const feedback = document.getElementById('sizer-feedback');
    const title = document.getElementById('sizer-result-title');
    const desc = document.getElementById('sizer-result-desc');
    const icon = feedback.querySelector('.feedback-icon');

    if (choice === probe.type) {
        feedback.className = 'visible correct';
        icon.textContent = "✅";
        title.textContent = probe.title;
        desc.textContent = probe.desc;
    } else {
        feedback.className = 'visible wrong';
        icon.textContent = "❌";
        title.textContent = "Halt! Systemfehler.";
        desc.textContent = choice === 'atom' ? "Das ist zu komplex für ein einzelnes Item. Du riskierst Messfehler." : "Das ist ein einfacher Fakt. Verkompliziere dein Design nicht unnötig!";
    }
    
    document.getElementById('next-sizer-btn').style.display = 'inline-block';
    document.getElementById('probe-card').style.transform = 'scale(1.05)';
}

function nextProbe() {
    sizerIndex = (sizerIndex + 1) % sizerData.length;
    updateProbe();
}

// In den DOMContentLoaded-Block von session4.js einfügen:
document.addEventListener('DOMContentLoaded', initSizer);