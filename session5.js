/**
 * session5.js - Diagnostic & Lab Logic
 * Update: Präzises Feedback basierend auf Dossiers & Moderations-Feedback
 */

const labDatabase = {
g1: {
        title: "G1: Podcast Credibility (MAIN/PodCred)",
        stats: [
            { l: "Theoretische Integration", v: 95 }, 
            { l: "Stimulus-Readiness", v: 10, d: true },    // Kritischer Pfad: Audio fehlt
            { l: "Mess-Ökonomie", v: 45, d: true },         // Warnung: Skalen-Overkill
            { l: "Formale Präzision (APA)", v: 60, d: true } // Sundar-Fehler
        ],
        report: "<strong>Status:</strong> Sauberer 'Roter Faden' von der Theorie (MAIN) über die Dimensionen (PodCred) bis zur Messung (Appelman). Der auditive Disclaimer ist eine exzellente Entscheidung für einen validen Manipulation Check. <br><br><strong>Kritischer Pfad:</strong> Ihr arbeitet aktuell im 'Vakuum'. Ohne den finalen Audio-Clip sind eure Indikatoren zur 'Sprechangemessenheit' rein spekulativ. <br><br><strong>Mess-Ökonomie:</strong> Die Kombination aus PodCred + Appelman + Z-Variablen ist massiv. Prüft bei jedem Item: 'Brauche ich das für meine Hypothese?' Wenn kein Hypothesen-Interesse besteht: Streichen! <br><br><strong>Form-Check:</strong> Euer Quellenverzeichnis hat Schluckauf (Sundar 2008/2016 im Text vs. 'o.J.' im Verzeichnis). Korrigieren!",
        requirements: [
            "Audio-Stimulus finalisiert (neutraler Hörbuch-Stil, kein politischer Bias).",
            "Item-Reduktion: Skalen auf Kern-Hypothesen (MAIN-Cues) eingedampft.",
            "Referenz-Audit: Sundar-Zitation im Verzeichnis gemäß APA 7 vereinheitlicht.",
            "Manipulation Check: Frage zur wahrgenommenen Urheberschaft (Disclaimer-Check) eingebaut.",
            "Wording-Check: Item-Übersetzungen (Denglish) auf Natürlichkeit geprüft."
        ]
    },
g2: {
        title: "G2: Google AI Search & Habit",
        stats: [
            { l: "Theoretische Schärfe", v: 90 }, // Lob für Habit/Allcott Integration
            { l: "Stimulus-Potenzial", v: 85 },   // Upgrade von Chile zu Kopfschmerz
            { l: "Mess-Präzision", v: 30, d: true }, // Abzug wegen Double-Barreled Items
            { l: "Methodische Geduld", v: 20, d: true } // Vorpreschen zu Items statt Dimensionen
        ],
        report: "<strong>Status:</strong> Der Wechsel von Chile zu 'Wetter vs. Kopfschmerz' ist ein massives Upgrade – das erzeugt die nötige kognitive Unsicherheit. Die Habit-Integration (Allcott) ist ein starker Anker. <br><br><strong>Kritischer Pfad:</strong> Ihr leidet unter 'methodischer Ungeduld'. Ihr habt im Dossier fertige Fragen geliefert, statt im Abgrund der Abstraktion (Dimensionen) zu bleiben. <br><br><strong>Systemfehler 'Double-Barreled Items':</strong> Fragen wie 'Ist das System zuverlässig und sicher?' sind wissenschaftlicher Datenmüll. Ein Item darf nur EINEN Aspekt messen. Jemand kann das System für zuverlässig, aber unsicher halten – wie soll er dann antworten? <br><br><strong>Zielgruppen-Check:</strong> Versteht eine 70-jährige Probandin 'Vorhersagbarkeit' genauso wie ein Informatikstudent? Euer Wording braucht einen Barrierefreiheits-Check.",
        requirements: [
            "Item-Scalpel: Alle 'Double-Barreled' Fragen (Konstrukt-Vermischungen) sind eliminiert.",
            "Dimensionen-Reinheit: Jedes Item bildet exakt eine Sub-Dimension ab.",
            "Involvement-Check: Kontrollfrage für die individuelle Betroffenheit beim Gesundheitsthema integriert.",
            "Wording-Audit: Fachbegriffe (z.B. Vorhersagbarkeit) in alltagstaugliche Items übersetzt.",
            "ATAI-Skala: Validierte Messung der KI-Einstellung als Kontrollvariable (Z) fixiert."
        ]
    },
    g3: {
        title: "G3: Visual Authenticity (SAM/Ästhetik)",
        stats: [
            { l: "Theoretischer Pivot", v: 90 },
            { l: "Konstrukt-Sprache", v: 35, d: true }, // Kritisch: SAM-Begriffe/Denglish
            { l: "Exp. Ablauflogik", v: 50, d: true }, // Kritisch: Treatment-Design
            { l: "Skalen-Harmonie", v: 40, d: true }   // Kritisch: 5/6/7-Mix
        ],
        report: "<strong>Status:</strong> Der Pivot von Empathie zu Ästhetik (IaePP) und SAM ist methodisch goldrichtig. Der Pre-Pretest (N=8) war ein wertvoller Validierungs-Schritt. <br><br><strong>Nächster Schritt:</strong> Schärft eure Sprache: 'Lust' ist im SAM-Kontext unpassend (nutzt 'Wohlbefinden'). Vermeidet 'Denglish' bei den Item-Übersetzungen, um Messfehler zu minimieren. Bei den Skalen gilt: <strong>UX schlägt Originaltreue</strong>. Harmonisiert die 5, 6 und 7 Stufen auf ein einheitliches Maß. Klärt zudem: Ist das Label ein Banner oder eine Caption? Davon hängt euer gesamter Effekt ab.",
        requirements: [
            "SAM-Terminologie korrigiert ('Wohlbefinden/Angenehmheit' statt 'Lust').",
            "Wording-Audit: Alle Items klingen für deutsche Muttersprachler natürlich (kein Denglish).",
            "Skalen-Harmonisierung: Alle abhängigen Variablen einheitlich skaliert (Empfehlung: 7 Stufen).",
            "Treatment-Design: Optische Gestaltung und Timing des Urheber-Labels fixiert.",
            "Hypothesen-Visualisierung: Hypothesen im Dossier deutlich (fett/eingerückt) markiert.",
            "Plan B für Bildrechte (Geraghty) oder KI-Ersatz-Stimulus dokumentiert."
        ]
    },
g4: {
        title: "G4: WildChat Politeness (Brown/Levinson)",
        stats: [
            { l: "Daten-Infrastruktur", v: 100 }, 
            { l: "Methodische Schärfe", v: 80 }, 
            { l: "Validität (Interpretation)", v: 40, d: true }, // Warnung: Gedankenlesen
            { l: "Operationalisierung", v: 60 } 
        ],
        report: "<strong>Status:</strong> Der Vollzugriff auf 4.8M Daten und der Python-Workflow sind ein massiver strategischer Vorteil. Die theoretische Reflexion über 'AI Face' ist exzellent. <br><br><strong>Kritischer Pfad:</strong> Ihr tappt aktuell in die 'Interpretation-Falle'. Ihr wollt 'kognitive Anforderungen' und 'Intent' messen. In der Inhaltsanalyse dürft ihr nicht 'Gedankenlesen' (Was wollte der User?), sondern müsst manifeste, linguistische Marker finden (Was steht da?). Nur was man schwarz auf weiß sieht, überlebt den ICR-Test zwischen zwei Codierern.",
        requirements: [
            "Manifeste Operationalisierung: Kategoriensystem basiert rein auf sichtbaren Textmerkmalen (Partikel, Satzbau).",
            "ICR-Sicherung: Protokoll für den Reliabilitätstest zwischen zwei unabhängigen Codierern definiert.",
            "Referenz-Audit: Zhao (2024) und alle weiteren Quellen im Verzeichnis vervollständigt.",
            "Kontext-Einheit: Festlegung, wie viele 'Turns' (Gesprächsschritte) pro Prompt-Einheit analysiert werden.",
            "Stil-Korrektur: Dossier von Listen-Logik in wissenschaftlichen Fließtext überführt."
        ]
    }
};

/**
 * Initialisiert die Diagnose für eine Gruppe
 */
function initLabDiagnostic(id) {
    const data = labDatabase[id];
    const frame = document.getElementById('lab-main-frame');

    // UI-State Tabs
    document.querySelectorAll('.lab-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.getElementById('tab-' + id);
    if (activeTab) activeTab.classList.add('active');

    // Frame einblenden mit Animation
    frame.classList.remove('hidden');
    frame.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Metriken rendern (Balken)
    const metricsContainer = document.getElementById('metrics-container');
    metricsContainer.innerHTML = data.stats.map(s => `
        <div class="metric-row">
            <div class="metric-label">
                <span>${s.l}</span>
                <span class="${s.d ? 'danger-text' : ''}">${s.v}%</span>
            </div>
            <div class="metric-bar-bg">
                <div class="metric-bar-fill ${s.d ? 'danger' : ''}" style="width: ${s.v}%"></div>
            </div>
        </div>
    `).join('');

    // Bericht rendern
    document.getElementById('report-text').innerHTML = `<p>${data.report}</p>`;

    // Einzigartige Checkboxen rendern
    const gateList = document.getElementById('unique-requirements-list');
    gateList.innerHTML = data.requirements.map((req, index) => `
        <div class="req-item">
            <input type="checkbox" id="check-${id}-${index}" class="lab-checkbox" onchange="checkLabGate()">
            <label for="check-${id}-${index}">${req}</label>
        </div>
    `).join('');

    // Button-State zurücksetzen
    checkLabGate();
}

/**
 * Validiert das Safety-Gate
 */
function checkLabGate() {
    const checkboxes = document.querySelectorAll('#unique-requirements-list input[type="checkbox"]');
    const btn = document.getElementById('final-launch-btn');
    const allChecked = checkboxes.length > 0 && Array.from(checkboxes).every(c => c.checked);

    if (allChecked) {
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn.innerHTML = "System Kalibriert: Zum Instrumenten-Bau →";
    } else {
        btn.classList.add('disabled');
        btn.disabled = true;
        btn.innerHTML = "Warte auf Kalibrierung...";
    }
}

/**
 * Navigation
 */
function scrollToNextSection() {
    const target = document.getElementById('s5-translation-engine');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
}

// Initialer Log
document.addEventListener('DOMContentLoaded', () => {
    console.log("Lab-Engine Session 5/6: Präzisions-Modus aktiviert.");
});

/**
 * SECTION 2: BLUEPRINT LOGIC
 */

// 1. Distillation Particle
function runDistillation() {
    const particle = document.getElementById('concept-particle');
    if(!particle) return;
    particle.animate([
        { cx: "10", opacity: 1 },
        { cx: "90", opacity: 1 }
    ], {
        duration: 3000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

// 2. Zoom Slider
const zoomSlider = document.getElementById('dimension-zoom');
if (zoomSlider) {
    zoomSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        document.getElementById('explosion-stage').className = `zoom-state-${val}`;
    });
}

// 3. Sniper Scope Update
const scopeData = {
    invalid: {
        title: "Status: Geringe Validität",
        text: "Die Messwerte sind zwar nah beieinander (Reliabel), liegen aber systematisch neben dem Ziel. <em>Beispiel: Ihr wollt Intelligenz messen, wiegt aber das Gehirn.</em>",
        hits: [[40,40], [45,35], [38,42], [42,48], [47,44]]
    },
    reliable: {
        title: "Status: Präzise, aber falsch",
        text: "Hohe Reliabilität (alle Codierer sind sich einig), aber das Ziel (Validität) wird verfehlt. <em>Beispiel: Eine Waage, die immer exakt 2kg zu viel anzeigt.</em>",
        hits: [[140,50], [145,55], [138,48], [142,60], [150,52]]
    },
    perfect: {
        title: "Status: Wissenschaftliches Ideal",
        text: "Hohe Reliabilität UND hohe Validität. Die Messung trifft genau das, was sie theoretisch erfassen soll.",
        hits: [[90,90], [92,95], [88,92], [95,88], [91,91]]
    }
};

function updateScope(mode) {
    const data = scopeData[mode];
    const container = document.getElementById('hit-container');
    const title = document.getElementById('scope-status');
    const text = document.getElementById('scope-explainer');
    
    // Update Buttons
    document.querySelectorAll('.scope-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');

    // UI Update
    title.textContent = data.title;
    text.innerHTML = data.text;
    container.innerHTML = '';

    data.hits.forEach((hit, i) => {
        setTimeout(() => {
            const dot = document.createElement('div');
            dot.className = 'hit-dot';
            dot.style.left = hit[0] + 'px';
            dot.style.top = hit[1] + 'px';
            container.appendChild(dot);
        }, i * 100);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    runDistillation();
    // Start with perfect scope for positive vibe
    setTimeout(() => {
        const perfBtn = document.querySelector('[onclick="updateScope(\'perfect\')"]');
        if(perfBtn) perfBtn.click();
    }, 500);
});

/**
 * SECTION 3: SCALE LEVEL POWER-GRID LOGIC
 */

const scaleLogic = {
    nominal: {
        tag: "Nominal",
        text: "Nutzen Sie ChatGPT? <br><strong>[ ] Ja / [ ] Nein</strong>",
        permissions: { mode: 'active', median: 'locked', mean: 'locked', sd: 'locked' }
    },
    ordinal: {
        tag: "Ordinal",
        text: "Wie sicher fühlen Sie sich im Umgang mit KI? <br><strong>[ ] Anfänger [ ] Fortgeschritten [ ] Profi</strong>",
        permissions: { mode: 'active', median: 'active', mean: 'locked', sd: 'locked' }
    },
    metric: {
        tag: "Metrisch",
        text: "Wie viele Stunden pro Woche nutzen Sie ChatGPT? <br><strong>[____] Stunden</strong>",
        permissions: { mode: 'active', median: 'active', mean: 'active', sd: 'active' }
    }
};

function activateLevel(id) {
    const data = scaleLogic[id];
    
    // Update Buttons
    document.querySelectorAll('.level-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById('btn-' + id).classList.add('active');

    // Update Matrix Cells
    updateCell('perm-mode', data.permissions.mode);
    updateCell('perm-median', data.permissions.median);
    updateCell('perm-mean', data.permissions.mean);
    updateCell('perm-sd', data.permissions.sd);

    // Update Transformer Body
    document.getElementById('trans-tag').textContent = data.tag;
    document.getElementById('trans-text').innerHTML = data.text;

    // Reset Quasi if switched
    document.getElementById('quasi-trigger').checked = false;
}

function updateCell(cellId, state) {
    const cell = document.getElementById(cellId);
    const status = cell.querySelector('.perm-status');
    cell.className = `perm-cell ${state}`;
    status.textContent = state === 'active' ? 'ERLAUBT' : 'LOGIC ERROR';
}

function toggleQuasi() {
    const isQuasi = document.getElementById('quasi-trigger').checked;
    const meanCell = document.getElementById('perm-mean');
    const sdCell = document.getElementById('perm-sd');
    
    if (isQuasi) {
        // Unlock Mean/SD manually for "Pragmatic Mode"
        meanCell.className = "perm-cell active";
        meanCell.querySelector('.perm-status').textContent = "QUASI-ERLAUBT";
        sdCell.className = "perm-cell active";
        sdCell.querySelector('.perm-status').textContent = "QUASI-ERLAUBT";
        
        document.getElementById('trans-tag').textContent = "Quasi-Metrisch";
        document.getElementById('trans-text').innerHTML = "Zustimmung: 'KI ist hilfreich.' <br><strong>(1) gar nicht ... (5) voll zu</strong>";
    } else {
        // Revert to current selected level
        const activeLevelId = document.querySelector('.level-btn.active').id.replace('btn-', '');
        activateLevel(activeLevelId);
    }
}

// Initialer Startzustand
document.addEventListener('DOMContentLoaded', () => {
    activateLevel('metric'); // Metrisch als Start, um die "volle Power" zu zeigen
});

/**
 * SECTION 4: INDEX SYNTHESIS LOGIC
 */

let isI3Inverted = false;

function calcMeanIndex() {
    const sliders = document.querySelectorAll('.mean-machine .index-slider');
    const displays = document.querySelectorAll('.mean-machine .val-display');
    let sum = 0;

    sliders.forEach((slider, index) => {
        let val = parseInt(slider.value);
        displays[index].textContent = val;

        // Inversion Logic for Item 3 (Index 2)
        if (index === 2 && isI3Inverted) {
            val = 6 - val; // Inversion for 1-5 scale: (max+1) - x
            displays[index].innerHTML = `${slider.value} <small>(→ ${val})</small>`;
        }
        sum += val;
    });

    const result = (sum / sliders.length).toFixed(2);
    document.getElementById('mean-result').textContent = result;
}

function toggleInversion(btn) {
    isI3Inverted = !isI3Inverted;
    btn.classList.toggle('active');
    btn.textContent = isI3Inverted ? "Invertieren: AN" : "Invertieren: AUS";
    document.getElementById('formula-i3').textContent = isI3Inverted ? "(6-I3)" : "I3";
    document.getElementById('formula-i3').style.color = isI3Inverted ? "var(--lab-red)" : "inherit";
    calcMeanIndex();
}

function calcSumIndex() {
    const checks = document.querySelectorAll('.accumulator-checks input[type="checkbox"]');
    const fill = document.getElementById('liquid-fill');
    const resultDisplay = document.getElementById('sum-result');
    
    let count = 0;
    checks.forEach(c => { if(c.checked) count++; });

    // Update Beaker Visual
    const fillHeight = (count / checks.length) * 100;
    fill.setAttribute('height', fillHeight);
    fill.setAttribute('y', 108 - fillHeight);
    
    resultDisplay.textContent = count;
}

// Init states
document.addEventListener('DOMContentLoaded', () => {
    calcMeanIndex();
    calcSumIndex();
});

/**
 * SECTION 5: SURGERY & STIMULUS LOGIC
 */

/**
 * SECTION 5: ENHANCED SURGERY LOGIC
 */

const patients = [
    {
        text: 'Ich finde die KI-Antwort <span class="tumor" onclick="operate()">sicher und zuverlässig</span>.',
        diagnosis: 'Double-Barreled Item',
        expl: 'Zwei Konzepte (Sicherheit vs. Zuverlässigkeit) in einer Frage. Ein Befragter könnte die KI für sicher, aber unzuverlässig halten.',
        fix: ['"Die KI-Antwort ist sicher."', '"Die KI-Antwort ist zuverlässig."']
    },
    {
        text: 'Finden Sie nicht auch, dass <span class="tumor" onclick="operate()">KI-Inhalte manipulativ</span> sind?',
        diagnosis: 'Suggestivfrage',
        expl: 'Die Formulierung "Finden Sie nicht auch" drängt den Probanden in eine Richtung. Das zerstört die Objektivität.',
        fix: ['"Bewerten Sie die Manipulationsgefahr."', '"KI-Inhalte stufe ich als manipulativ ein."']
    },
    {
        text: 'Ich halte es für <span class="tumor" onclick="operate()">nicht unwahrscheinlich, dass KI-Stimmen nicht falsch</span> klingen.',
        diagnosis: 'Kognitiver Overload',
        expl: 'Doppelte Verneinungen führen zu extremen Messfehlern, da Probanden die Logik beim schnellen Lesen nicht erfassen.',
        fix: ['"KI-Stimmen klingen für mich korrekt."', '"KI-Stimmen wirken auf mich fehlerhaft."']
    },
    {
        text: 'Wie <span class="tumor" onclick="operate()">oft nutzen Sie KI</span> im Alltag?',
        diagnosis: 'Fehlender Zeitbezug',
        expl: 'Was bedeutet "oft"? Für den einen ist es 1x pro Woche, für den anderen 10x am Tag. Ohne Anker ist der Wert wertlos.',
        fix: ['"Wie viele Stunden pro Tag nutzen Sie KI?"', '"An wie vielen Tagen der letzten Woche haben Sie KI genutzt?"']
    },
    {
        text: 'Geben Sie an, wie sehr die <span class="tumor" onclick="operate()">syntaktische Kohärenz</span> Sie überzeugt.',
        diagnosis: 'Fachjargon-Falle',
        expl: 'Laien verstehen keine linguistischen Fachbegriffe. Die Frage misst hier nur die Überforderung, nicht die Kohärenz.',
        fix: ['"Der Text wirkt flüssig geschrieben."', '"Die Sätze ergeben einen logischen Sinn."']
    },
    {
        text: 'KI ist <span class="tumor" onclick="operate()">immer objektiv</span>.',
        diagnosis: 'Absolutheits-Bias',
        expl: 'Items mit "immer" oder "nie" provozieren Ablehnung, da Extremwerte selten zutreffen. Das nimmt euch die Varianz.',
        fix: ['"Ich halte KI-Inhalte für überwiegend objektiv."', '"KI-Inhalte neigen zur Objektivität."']
    },
    {
        text: 'KI-Bilder sind <span class="tumor" onclick="operate()">schön</span>.',
        diagnosis: 'Mehrdimensionale Vageheit',
        expl: '"Schön" kann Ästhetik, technisches Handwerk oder Bildinhalt meinen. G3 muss hier präziser bohren.',
        fix: ['"Das Bild ist ästhetisch ansprechend."', '"Das Bild ist technisch fehlerfrei umgesetzt."']
    },
    {
        text: 'War die KI-Stimme <span class="tumor" onclick="operate()">menschlich genug</span>?',
        diagnosis: 'Anthropomorphisierungs-Fehler',
        expl: 'Was ist "genug"? Die Frage setzt eine Erwartungshaltung voraus. Besser ist eine neutrale Skala.',
        fix: ['"Bewerten Sie die Natürlichkeit der Stimme (1-7)."', '"Die Stimme klang für mich wie ein echter Mensch."']
    }
];

let currentPatientIdx = 0;

/**
 * Startet die OP am aktuellen Item
 */
function operate() {
    const data = patients[currentPatientIdx];
    const feedback = document.getElementById('surgery-feedback');
    const nextBtn = document.getElementById('next-patient-btn');

    // 1. Diagnose & Heilung befüllen
    document.getElementById('diag-title').textContent = data.diagnosis;
    document.getElementById('diag-expl').textContent = data.expl;
    document.getElementById('healed-items-list').innerHTML = data.fix
        .map(f => `<div class="clean-item">✅ ${f}</div>`).join('');

    // 2. Feedback-Panel einblenden
    feedback.classList.remove('hidden');

    // 3. "Nächster Patient" Button aktivieren
    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
    nextBtn.classList.add('pulse-animation'); // Optischer Hinweis
}

/**
 * Lädt den nächsten Fall und setzt den Status zurück
 */
function nextPatient() {
    const feedback = document.getElementById('surgery-feedback');
    const nextBtn = document.getElementById('next-patient-btn');
    const itemDisplay = document.getElementById('patient-item');

    // Index erhöhen
    currentPatientIdx = (currentPatientIdx + 1) % patients.length;

    // UI Reset
    feedback.classList.add('hidden');
    nextBtn.classList.add('disabled');
    nextBtn.disabled = true;
    nextBtn.classList.remove('pulse-animation');

    // Neues Item laden
    itemDisplay.innerHTML = patients[currentPatientIdx].text;
}

function updateG1Timeline(val) {
    const marker = document.getElementById('disclaimer-marker');
    const feedback = document.getElementById('g1-logic-feedback');
    marker.style.left = val + '%';
    
    if(val < 20) {
        feedback.innerHTML = "<strong>Primacy-Effekt:</strong> Maximaler Einfluss auf die folgende Wahrnehmung.";
    } else if(val > 70) {
        feedback.innerHTML = "<strong>Recency-Effekt:</strong> Der Clip wurde unvoreingenommen gehört, das Label wirkt erst retrospektiv.";
    } else {
        feedback.innerHTML = "<strong>Interferenz-Modus:</strong> Das Label stört den Rezeptionsfluss.";
    }
}

function setG3Style(mode) {
    const label = document.getElementById('g3-label');
    const desc = document.getElementById('g3-desc');
    const overlay = document.getElementById('g3-warning-overlay');
    const consent = document.getElementById('g3-consent-area');
    
    // Reset all
    label.className = 'hidden';
    overlay.classList.add('hidden');
    consent.classList.add('hidden');

    switch(mode) {
        case 'banner':
            label.className = 'label-banner';
            label.textContent = 'KI-GENERIERT';
            desc.textContent = "Banner (Loud): Maximale Kontrolle, sichert den Manipulation Check ab.";
            break;
        case 'caption':
            label.className = 'label-caption';
            label.textContent = 'Urheber: Generative KI';
            desc.textContent = "Caption (Subtle): Hohe ökologische Validität (Social Media Look), wird aber oft übersehen.";
            break;
        case 'text':
            desc.textContent = "Text-Briefing: Information erfolgt nur im Intro-Text. Hohes Risiko, dass Probanden das Treatment 'vergessen'.";
            break;
        case 'image':
            overlay.classList.remove('hidden');
            desc.textContent = "Voll-Warnung: Ein Interstitial (Vorschaltbild) erzwingt Aufmerksamkeit, unterbricht aber den Rezeptionsfluss.";
            break;
        case 'consent':
            consent.classList.remove('hidden');
            desc.textContent = "Consent-Check: Proband muss aktiv bestätigen. Sicherster Weg für den Manipulation Check, aber sehr aufdringlich.";
            break;
    }
}

/**
 * SECTION 6: CONTENT ANALYSIS LAB LOGIC
 */

function applyLens(mode) {
    const display = document.getElementById('text-specimen');
    const result = document.getElementById('lens-result');
    const text = "Hey, kannst du mir das mal kurz erklären? Wäre echt nett von dir!";

    result.classList.remove('hidden');

    if (mode === 'interpretation') {
        display.innerHTML = text; // Reset highlight
        result.className = 'lens-feedback error';
        result.innerHTML = `<strong>⚠️ SYSTEMFEHLER: Gedankenlesen</strong>
            <p>Ihr codiert, dass der User "schätzt" oder "höflich gestimmt" ist. Das ist eine Interpretation. Codierer werden hier raten, was eure Reliabilität (ICR) zerstört.</p>`;
    } else {
        // Highlight manifest markers
        display.innerHTML = `<span style="background:rgba(0,184,212,0.3)">Hey</span>, kannst du mir das mal kurz erklären? <span style="background:rgba(0,184,212,0.3)">Wäre</span> echt <span style="background:rgba(0,184,212,0.3)">nett</span> von dir!`;
        result.className = 'lens-feedback success';
        result.innerHTML = `<strong>✅ SCAN ERFOLGREICH: Manifeste Merkmale</strong>
            <p>Marker erkannt: Grußformel (Hey), Konjunktiv (Wäre), Höflichkeitspartikel (nett). Das ist schwarz auf weiß messbar und intersubjektiv prüfbar.</p>`;
    }
}

function updateContext(val) {
    const u1 = document.getElementById('unit-1');
    const u2 = document.getElementById('unit-2');
    const u3 = document.getElementById('unit-3');
    const warning = document.getElementById('context-warning');

    // Reset
    [u1, u2, u3].forEach(u => u.classList.remove('active'));

    if (val == 1) {
        u1.classList.add('active');
        warning.innerHTML = "<strong>Gefahr:</strong> Einzelsätze verlieren oft den Bezug (z.B. Pronomen ohne Anker).";
    } else if (val == 2) {
        u1.classList.add('active'); u2.classList.add('active');
        warning.innerHTML = "<strong>Empfehlung:</strong> Der gesamte Prompt ist die stabilste Einheit für Höflichkeits-Analysen.";
    } else {
        u1.classList.add('active'); u2.classList.add('active'); u3.classList.add('active');
        warning.innerHTML = "<strong>Turn-Modus:</strong> Zwingend nötig, wenn ihr die Reaktion der KI (Zufriedenheit) einbezieht.";
    }
}

// Initialer Start für Sektion 6
document.addEventListener('DOMContentLoaded', () => {
    updateContext(2); // Start mit Prompt-Ebene
});

/**
 * SECTION 7: GHOST TABLE SIMULATOR LOGIC
 */

const ghostTemplates = {
    g1: {
        uv: "Manipulation (Quelle)",
        av: "Glaubwürdigkeit (M)",
        rows: [["Gruppe A: Mensch", "4.12876"], ["Gruppe B: KI-Label", "3.4512"]],
        interpret: ["KI-Label", "3.45", "tiefer", "Mensch", "4.13"]
    },
    g2: {
        uv: "Altersgruppe",
        av: "Vertrauen (M)",
        rows: [["18-24 Jahre", "3.882"], ["25-49 Jahre", "3.511"], ["50+ Jahre", "2.903"]],
        interpret: ["50+", "2.90", "tiefer", "18-24", "3.88"]
    },
    g4: {
        uv: "Aufgabentyp",
        av: "Höflichkeit (%)",
        rows: [["Information", "24.55%"], ["Kreativ", "67.12%"], ["Sozial", "88.01%"]],
        interpret: ["Sozial", "88%", "höher", "Information", "25%"]
    }
};

let currentTableId = null;
let isClean = false;

function buildGhostTable(id) {
    currentTableId = id;
    const data = ghostTemplates[id];
    const canvas = document.getElementById('table-canvas');
    
    // UI Update
    document.querySelectorAll('.select-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('interpretation-box').classList.remove('hidden');

    renderTable();
    updateInterpretation();
}

function renderTable() {
    if(!currentTableId) return;
    const data = ghostTemplates[currentTableId];
    const styleClass = isClean ? 'clean' : 'ugly';
    
    let html = `<table class="ghost-table ${styleClass}">
        <thead>
            <tr>
                <th>${data.uv}</th>
                <th class="num-val">${data.av}</th>
            </tr>
        </thead>
        <tbody>
            ${data.rows.map(r => `
                <tr>
                    <td>${r[0]}</td>
                    <td class="num-val">${formatVal(r[1])}</td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
    
    document.getElementById('table-canvas').innerHTML = html;
}

function formatVal(val) {
    if(!isClean) return val; // Raw data in ugly mode
    
    // Extract number and format to 2 decimals with dot
    let num = parseFloat(val);
    let suffix = val.includes('%') ? '%' : '';
    return num.toFixed(2) + suffix;
}

function toggleFormatting() {
    isClean = !isClean;
    const btn = document.getElementById('btn-format');
    btn.textContent = isClean ? "Layout-Skalpell: AN" : "Layout-Skalpell: AUS";
    btn.classList.toggle('active');

    // Checklist Update
    document.getElementById('check-vert').classList.toggle('active', isClean);
    document.getElementById('check-round').classList.toggle('active', isClean);
    document.getElementById('check-unit').classList.toggle('active', isClean);

    renderTable();
    updateInterpretation();
}

function updateInterpretation() {
    const data = ghostTemplates[currentTableId];
    if(!data) return;
    
    document.getElementById('gap-uv').textContent = data.interpret[0];
    document.getElementById('gap-val1').textContent = isClean ? data.interpret[1] : "??";
    document.getElementById('gap-uv2').textContent = data.interpret[3];
    document.getElementById('gap-val2').textContent = isClean ? data.interpret[4] : "??";
}

/**
 * SECTION 8: DATA CLEANING LOGIC
 */

const dataSpecimens = [
    { id: "#4122", time: 420, pattern: [3,4,3,4,3], invert: 2, status: 'valid', desc: 'Realistischer Fall' },
    { id: "#8912", time: 45, pattern: [5,5,5,5,5], invert: 5, status: 'junk', desc: 'Speeder & Straight-liner' },
    { id: "#3301", time: 380, pattern: [1,2,1,2,5], invert: 2, status: 'valid', desc: 'Konsistenter Fall' },
    { id: "#3321", time: 389, pattern: [5,2,4,2,5], invert: 2, status: 'valid', desc: 'Glaubwürdiger Fall' },
    { id: "#1190", time: 510, pattern: [3,3,3,3,3], invert: 3, status: 'junk', desc: 'Inkonsistenter Straight-liner' },
    { id: "#4156", time: 386, pattern: [3,4,3,4,3], invert: -99, status: 'junk', desc: 'Kein Invertiertes Item' },
];

let specimenIdx = 0;
let excludedCount = 0;
let keptCount = 0;

function loadNextSpecimen() {
    if (specimenIdx >= dataSpecimens.length) {
        document.getElementById('scan-status').textContent = "REINIGUNG ABGESCHLOSSEN";
        document.getElementById('specimen-data-display').innerHTML = "<p style='text-align:center'>Alle Fälle verarbeitet.</p>";
        return;
    }
    
    const s = dataSpecimens[specimenIdx];
    document.getElementById('current-pid').textContent = s.id;
    document.getElementById('spec-time').textContent = s.time + " Sek.";
    document.getElementById('spec-invert').textContent = s.invert;
    
    const patternBox = document.getElementById('spec-pattern');
    patternBox.innerHTML = s.pattern.map(p => `<div class="dot-val active" style="opacity:${p/5}"></div>`).join('');
    
    document.getElementById('scan-status').textContent = "SCAN LÄUFT...";
    document.getElementById('scan-status').style.color = "var(--lab-cyan)";
}

function evaluateData(choice) {
    const s = dataSpecimens[specimenIdx];
    const log = document.getElementById('log-history-list');
    if (specimenIdx === 0) log.innerHTML = ''; // Clear placeholder

    const isCorrect = (choice === 'keep' && s.status === 'valid') || (choice === 'discard' && s.status === 'junk');
    
    // Update Stats
    if (choice === 'keep') keptCount++;
    else excludedCount++;

    document.getElementById('count-excluded').textContent = excludedCount;
    document.getElementById('count-net').textContent = keptCount;

    // Add to History
    const item = document.createElement('div');
    item.className = `history-item ${choice === 'keep' ? 'kept' : 'discarded'}`;
    item.innerHTML = `<span>ID ${s.id} (${s.desc})</span> <strong>${choice.toUpperCase()}</strong>`;
    log.prepend(item);

    // Feedback visual
    const status = document.getElementById('scan-status');
    if (isCorrect) {
        status.textContent = "KORREKT KLASSIFIZIERT";
        status.style.color = "#22c55e";
    } else {
        status.textContent = "FEHL-KLASSIFIKATION!";
        status.style.color = "var(--lab-red)";
    }

    specimenIdx++;
    setTimeout(loadNextSpecimen, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    loadNextSpecimen();
});

/**
 * SECTION 9: BIOMETRIC MANIPULATION CHECK LOGIC
 */

function runPerceptionScan() {
    const recall = document.getElementById('v-proband-recall').value;
    const scanner = document.querySelector('.eye-scanner');
    const icon = document.getElementById('scanner-icon');
    const status = document.getElementById('biometric-status');
    const resultBox = document.getElementById('v-result');
    const decision = document.getElementById('v-decision-text');
    const expl = document.getElementById('v-expl-text');

    if (recall === 'none') {
        resultBox.classList.add('hidden');
        return;
    }

    // Animation Start
    scanner.style.boxShadow = "0 0 30px var(--lab-cyan)";
    status.textContent = "ABGLEICH LÄUFT...";
    resultBox.classList.add('hidden');

    setTimeout(() => {
        resultBox.classList.remove('hidden');
        
        if (recall === 'correct') {
            scanner.style.borderColor = "#22c55e";
            scanner.style.boxShadow = "0 0 30px #22c55e";
            icon.textContent = "✅";
            status.textContent = "VERIFIZIERT";
            resultBox.className = "v-result-box pass";
            decision.textContent = "DATENSATZ ZULASSEN";
            expl.textContent = "Der Proband hat das Treatment korrekt erinnert. Sein Antwortverhalten ist auf den Reiz (KI-Label) zurückführbar.";
        } else {
            scanner.style.borderColor = "var(--lab-red)";
            scanner.style.boxShadow = "0 0 30px var(--lab-red)";
            icon.textContent = "❌";
            status.textContent = "VALIDITÄTS-FEHLER";
            resultBox.className = "v-result-box fail";
            decision.textContent = "FALL EXKLUDIEREN";
            expl.textContent = "Fehlender Recall: Der Proband hat die Manipulation nicht realisiert. Daten in diesem Fall sind ungültig für den Gruppenvergleich.";
        }
    }, 1200);
}

function updateDilemma(val) {
    const failRate = document.getElementById('fail-rate');
    const reactance = document.getElementById('reactance-risk');
    
    // Logic: As slider goes right (Control up), fail rate goes down, but reactance goes up
    const fRate = Math.max(0, 45 - (val * 0.45)).toFixed(0);
    failRate.textContent = fRate + "%";
    
    if (val < 30) {
        reactance.textContent = "Minimal";
        reactance.style.color = "#22c55e";
    } else if (val > 75) {
        reactance.textContent = "Kritisch";
        reactance.style.color = "var(--lab-red)";
    } else {
        reactance.textContent = "Mittel";
        reactance.style.color = "var(--lab-cyan)";
    }
}

// Init states for Section 9
document.addEventListener('DOMContentLoaded', () => {
    updateDilemma(50);
});

/**
 * SECTION 10: ICR-PROTOCOL LOGIC
 */

function runSync(mode) {
    const alpha = document.getElementById('wave-alpha');
    const beta = document.getElementById('wave-beta');
    const decBeta = document.getElementById('dec-beta');
    const status = document.getElementById('sync-status-indicator');
    const msg = document.getElementById('sync-msg');
    const kappa = status.querySelector('.kappa-val');

    if (mode === 'vage') {
        alpha.style.filter = 'hue-rotate(0deg)';
        beta.style.filter = 'hue-rotate(270deg)'; // Magenta
        decBeta.textContent = "NEUTRAL";
        status.className = "sync-status";
        msg.textContent = "OUT OF SYNC";
        kappa.textContent = "κ = 0.42 (Kritisch)";
        beta.style.animationDuration = '1.5s'; // Divergent speed
    } else {
        alpha.style.filter = 'hue-rotate(0deg)';
        beta.style.filter = 'hue-rotate(0deg)'; // Cyan
        decBeta.textContent = "HÖFLICH";
        status.className = "sync-status in-sync";
        msg.textContent = "SYSTEM SYNC";
        kappa.textContent = "κ = 0.94 (Exzellent)";
        beta.style.animationDuration = '2s'; // Synced speed
    }
}

function updateReliKiller(val) {
    const percDisplay = document.getElementById('reli-perc');
    const warning = document.getElementById('reli-warning-msg');
    
    // Reverse logic: High interpretation = Low reliability
    const reli = 100 - (val * 0.6);
    percDisplay.textContent = Math.round(reli) + "%";

    if (val > 60) {
        warning.textContent = "KRITISCH: Codierer müssen raten.";
        warning.style.color = "var(--lab-red)";
    } else if (val < 30) {
        warning.textContent = "STABIL: Objektiv messbar.";
        warning.style.color = "#166534";
    } else {
        warning.textContent = "GRENZWERTIG: Codebuch schärfen.";
        warning.style.color = "#856404";
    }
}

function calculateReliSize() {
    const n = document.getElementById('calc-n').value;
    const res = document.getElementById('reli-sample-res');
    
    const sample = Math.ceil(n * 0.10);
    res.textContent = sample + " Einheiten";
}

// Init states for Section 10
document.addEventListener('DOMContentLoaded', () => {
    updateReliKiller(80);
    calculateReliSize();
});

/**
 * SECTION 11: PRETEST WIND TUNNEL LOGIC
 */

const stressScenarios = {
    jargon: {
        status: "TURBULENZ: VERSTÄNDLICHKEIT",
        icon: "😵‍💫",
        report: "<h4>Befund: Fachchinesisch</h4><p>Proband (72 J.) bricht ab: 'Was ist eine algorithmische Autorität?'. Euer Instrument ist zu elitär formuliert.</p><div class='fix-badge'>FIX: Übersetzung in Alltagssprache</div>",
        wave: "M0 50 Q 10 10, 20 90 T 40 10 T 60 90 T 80 10 T 100 90 T 120 10"
    },
    tech: {
        status: "SYSTEM-CRASH: KOMPATIBILITÄT",
        icon: "📱",
        report: "<h4>Befund: Mobile-Fail</h4><p>Der Audio-Player (G1) wird in Safari/iOS nicht geladen. 40% eurer Zielgruppe sähen ein leeres Feld.</p><div class='fix-badge'>FIX: Fallback-Player integrieren</div>",
        wave: "M0 50 L 50 50 L 55 10 L 60 90 L 65 50 L 200 50"
    },
    gap: {
        status: "VAKUUM: CODEBUCH-LÜCKE",
        icon: "📂",
        report: "<h4>Befund: Kategorienfehler</h4><p>Codierer findet Prompt, der weder 'höflich' noch 'unhöflich' ist. Die Skala ist nicht erschöpfend.</p><div class='fix-badge'>FIX: 'Neutral' oder 'Restkategorie' ergänzen</div>",
        wave: "M0 50 Q 50 0, 100 50 T 200 50"
    }
};

function simulateStress(type) {
    const data = stressScenarios[type];
    const reportBox = document.getElementById('stress-report');
    const statusText = document.getElementById('tunnel-status');
    const icon = document.getElementById('test-probe-icon');
    const wave = document.getElementById('wave-path');

    // UI Updates
    icon.textContent = data.icon;
    icon.style.left = "40%";
    statusText.textContent = data.status;
    statusText.style.color = "#f1c40f";
    wave.setAttribute('d', data.wave);
    wave.setAttribute('stroke', "#f1c40f");

    reportBox.innerHTML = `<div class="error-alert-box">${data.report}</div>`;
}

// Reset-Funktion beim Laden
document.addEventListener('DOMContentLoaded', () => {
    console.log("Wind-Tunnel ready for Pretest simulations.");
});

/**
 * SECTION 12: MISSION DOSSIER LOGIC
 */

const timelinePhases = [
    {
        title: "Phase 1: Konstruktion (Woche 1)",
        desc: "Fokus auf Operationalisierung: Items formulieren, Codebuch schärfen, Stimuli finalisieren. Ziel nächste Woche: Informelle Präsentation eures Instruments für finales Feedback."
    },
    {
        title: "Phase 2: Kalibrierung & Abgabe (Woche 2)",
        desc: "Fokus auf Auswertungsstrategie: Indexbildung definieren, Ghost-Tables bauen, Pretest vorbereiten. Ziel: Abgabe des Dossiers (PDF) und Präsentation."
    }
];

function setTimelinePhase(num) {
    const data = timelinePhases[num - 1];
    document.getElementById('phase-title').textContent = data.title;
    document.getElementById('phase-desc').textContent = data.desc;
    
    document.querySelectorAll('.timeline-point').forEach((p, i) => {
        p.classList.toggle('active', i === num - 1);
    });
}

const dossierData = {
    instrument: `
        <ul class="task-list-styled">
            <li><strong>Ausgearbeites Instrument:</strong> Fragebogen oder fertiges Codebuch.</li>
            <li><strong>Stimulus-Material:</strong> Audio (G1), Screenshots (G2), Bilder (G3) oder Sampling-Script (G4).</li>
            <li><strong>Technik-Check:</strong> Fangt in der zweiten Woche schon mit euren SoSci Survey/Unipark Fragebögen an.</li>
        </ul>`,
    begruendung: `
        <ul class="task-list-styled">
            <li><strong>Theoretische Ableitung:</strong> Warum misst Item X die Dimension Y?</li>
            <li><strong>Skalenniveau-Wahl:</strong> Begründung der Messniveaus.</li>
            <li><strong>Korrekturen:</strong> Dokumentation der Änderungen wie immer.</li>
        </ul>`,
    analyse: `
        <ul class="task-list-styled">
            <li><strong>Index-Bauplan:</strong> Formeln für eure Mittelwert- oder Summenindizes.</li>
            <li><strong>Geister-Tabellen:</strong> Korrekt formatierte Tabellen-Entwürfe -> Wo wollt ihr hin?</li>
            <li><strong>Cleaning-Regeln:</strong> Definition eurer Ausschlusskriterien (Speeder/Straight-Liner).</li>
        </ul>`
};

function openDossier(part) {
    document.getElementById('dossier-content').innerHTML = dossierData[part];
    document.querySelectorAll('.d-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('onclick').includes(part));
    });
}

function sealMission() {
    const stamp = document.getElementById('mission-status-stamp');
    const btn = document.getElementById('btn-seal-mission');
    
    stamp.textContent = "STATUS: APPROVED";
    stamp.classList.add('approved');
    btn.textContent = "PARAMETER GESPEICHERT";
    btn.style.background = "#166534";
    
    // Kleiner Erfolgseffekt
    confettiEffect(); 
}

function confettiEffect() {
    console.log("Mission accepted. Deployment authorized.");
    // Hier könnte man noch ein kurzes Partikel-Effekt einbauen
}