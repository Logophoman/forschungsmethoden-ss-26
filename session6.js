/**
 * Phase 1: Evolution Teaser Logic
 */
function initEvolutionTeaser() {
    const builder = document.getElementById('pane-builder');
    const pilot = document.getElementById('pane-pilot');
    const container = document.querySelector('.teaser-container');

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        // Wenn Maus eher links: Builder wird etwas klarer
        if (mouseX < rect.width / 2) {
            builder.style.opacity = "1";
            builder.style.filter = "grayscale(0) blur(0)";
            pilot.style.filter = "brightness(0.7)";
        } else {
            // Wenn Maus rechts: Pilot glüht auf
            builder.style.opacity = "0.6";
            builder.style.filter = "grayscale(0.5) blur(1px)";
            pilot.style.filter = "brightness(1.2)";
            pilot.style.boxShadow = "0 0 50px rgba(0, 210, 255, 0.2)";
        }
    });

    container.addEventListener('mouseleave', () => {
        builder.style.opacity = "0.6";
        builder.style.filter = "grayscale(0.5) blur(1px)";
        pilot.style.filter = "brightness(1)";
        pilot.style.boxShadow = "0 0 30px rgba(0, 210, 255, 0.1)";
    });
}

/**
 * Phase 2: Protocol Banner Logic
 */
function initProtocolBanner() {
    const banner = document.getElementById('mission-update-protocol');
    const btn = document.getElementById('btn-acknowledge');

    // Button-Klick: Protokoll annehmen
    if (btn) {
        btn.onclick = () => {
            banner.classList.add('acknowledged');
            btn.innerHTML = "PROTOKOLL BESTÄTIGT ✓";
            btn.style.background = "#22c55e";
            btn.disabled = true;

            // Kleiner Vibrationseffekt beim Bestätigen
            if (window.navigator.vibrate) window.navigator.vibrate(50);

            console.log("Mission parameters updated. Report decommissioned.");
        };
    }

    // Zufälliger Glitch-Effekt auf dem Titel
    const title = banner.querySelector('h2');
    setInterval(() => {
        if (Math.random() > 0.95) {
            title.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
            setTimeout(() => title.style.transform = 'translateX(0)', 50);
        }
    }, 200);
}

// Start
document.addEventListener('DOMContentLoaded', initEvolutionTeaser);

document.addEventListener('DOMContentLoaded', () => {
    initProtocolBanner();
});

/**
 * Phase 3: Signal-to-Noise Radar Logic
 */
function initRadar() {
    const noiseSlider = document.getElementById('radar-noise-slider');
    const signalSlider = document.getElementById('radar-signal-slider');
    const signalPath = document.getElementById('signal-wave');
    const noisePath = document.getElementById('noise-wave');
    const verdict = document.getElementById('radar-verdict');
    const statusText = document.getElementById('detection-status');

    function updateRadar() {
        const noise = parseInt(noiseSlider.value);
        const signal = parseInt(signalSlider.value);

        document.getElementById('noise-val').textContent = noise + "%";
        document.getElementById('signal-val').textContent = signal + "%";

        let signalD = "";
        let noiseD = "";
        const points = 100;
        const width = 800;
        const height = 300;
        const mid = height / 2;

        for (let i = 0; i <= points; i++) {
            const x = (width / points) * i;

            // 1. Das Signal: Zwei Glockenkurven (Mensch vs KI Effekt)
            // Gauß-Kurven: y = a * exp(-(x-b)^2 / (2*c^2))
            const peakA = signal * 1.5 * Math.exp(-Math.pow(x - 250, 2) / 3000);
            const peakB = signal * 1.5 * Math.exp(-Math.pow(x - 550, 2) / 3000);

            // 2. Das Rauschen: Zufälliger Offset
            const noiseFactor = noise * 0.8;
            const randomNoise = (Math.random() - 0.5) * noiseFactor;

            const ySignal = mid - (peakA - peakB) + randomNoise;
            const yNoiseOnly = mid + randomNoise * 1.2;

            signalD += (i === 0 ? "M" : "L") + ` ${x} ${ySignal}`;
            noiseD += (i === 0 ? "M" : "L") + ` ${x} ${yNoiseOnly}`;
        }

        signalPath.setAttribute('d', signalD);
        noisePath.setAttribute('d', noiseD);

        // Analyse der Sichtbarkeit
        if (signal > noise + 10) {
            verdict.className = "radar-verdict success";
            verdict.textContent = "SIGNAL KONTRASTREICH: Effekt messbar ✓";
            statusText.textContent = "STATUS: EFFECT_DETECTED";
            statusText.style.color = "#22c55e";
        } else {
            verdict.className = "radar-verdict warning";
            verdict.textContent = "FEHLER: Rauschen überdeckt Effekt. Präsision erhöhen!";
            statusText.textContent = "STATUS: SEARCHING_FOR_SIGNAL...";
            statusText.style.color = "#e85f3e";
        }
    }

    noiseSlider.oninput = updateRadar;
    signalSlider.oninput = updateRadar;

    // Scanline Animation
    const scanLine = document.getElementById('scan-line');
    let scanPos = 0;
    function animateScan() {
        scanPos = (scanPos + 4) % 800;
        scanLine.setAttribute('x1', scanPos);
        scanLine.setAttribute('x2', scanPos);
        requestAnimationFrame(animateScan);
    }

    // Initiale Wellenform & Start Animation
    updateRadar();
    animateScan();
}

document.addEventListener('DOMContentLoaded', () => {
    initRadar();
});

/**
 * Phase 4: Chamber A (Experiment) Logic
 */
function initChambers() {
    const tabs = document.querySelectorAll('.chamber-tab');
    const panes = document.querySelectorAll('.chamber-pane');

    tabs.forEach(tab => {
        tab.onclick = () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        };
    });
}

// Logic Scalpel
let errorsFound = 0;
function operateLogic(type) {
    const log = document.getElementById('logic-log');
    const kit = document.getElementById('logic-repair-kit');

    if (type === 'je' || type === 'desto') {
        log.innerHTML += `> EINGRIFF_LOG: '${type}' als Korrelations-Fehler erkannt.<br>`;
        errorsFound++;
    }

    if (errorsFound >= 2) {
        kit.classList.remove('hidden');
        log.innerHTML += `> STATUS: Logik-Fehler isoliert. Reparatur bereit.<br>`;
    }
}

function applyFix(mode) {
    const display = document.getElementById('logic-display');
    const log = document.getElementById('logic-log');

    if (mode === 'difference') {
        display.innerHTML = '" In der Bedingung <span style="color:#22c55e">MENSCH</span> ist die Authentizität <span style="color:#22c55e">HÖHER</span> als in der Bedingung KI. "';
        display.style.borderColor = "#22c55e";
        log.innerHTML += `> SUCCESS: Unterschieds-Hypothese implementiert. Logik gehärtet.<br>`;
        document.getElementById('logic-repair-kit').classList.add('hidden');
    }
}

// Mobile Check
function setLabelStyle(style) {
    const label = document.getElementById('stimulus-label');
    const warning = document.getElementById('visibility-warning');

    label.className = 'stim-label ' + style;

    if (style === 'subtle') {
        warning.className = 'visibility-alert warning';
        warning.innerHTML = '⚠️ GEFAHR: 40% Überseh-Quote im Pretest erwartet.';
    } else {
        warning.className = 'visibility-alert success';
        warning.innerHTML = '✅ SICHER: Treatment-Sichtbarkeit für Manipulation Check optimiert.';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initChambers();
});

/**
 * Phase 5: Chamber B (Survey) Logic
 */

// 1. N-Mortality Logic
function updateMortality() {
    const sevEl = document.getElementById('severity-slider');
    if (!sevEl) return; // Abbruch wenn Element fehlt

    const sev = sevEl.value;
    const nBrutto = 200;
    const nDrop = Math.floor(nBrutto * (sev / 100));
    const nNetto = nBrutto - nDrop;

    const elBrutto = document.getElementById('n-brutto');
    const elDrop = document.getElementById('n-drop');
    const elNetto = document.getElementById('n-netto');
    const advice = document.getElementById('recruitment-advice');

    if (elBrutto) elBrutto.textContent = nBrutto;
    if (elDrop) elDrop.textContent = nDrop;
    if (elNetto) elNetto.textContent = nNetto;

    if (advice) {
        const recruitGoal = Math.ceil(200 / ((100 - sev) / 100));
        if (sev > 40) {
            advice.className = "visibility-alert warning";
            advice.innerHTML = `⚠️ KRITISCH: Ihr braucht ca. <strong>${recruitGoal}</strong> Kontakte.`;
        } else {
            advice.className = "visibility-alert success";
            advice.innerHTML = `✅ STABIL: Brutto-Bedarf ca. <strong>${recruitGoal}</strong> Personen.`;
        }
    }
}

// Particle Emitter für den Trichter
function emitProband() {
    const chamber = document.getElementById('chamber-survey');
    if (!chamber || !chamber.classList.contains('active')) return;

    const emitter = document.getElementById('emitter');
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = '👤';

    const startX = 20 + Math.random() * 160; // Innerhalb des Trichters oben
    const sev = document.getElementById('severity-slider').value;

    p.style.left = startX + 'px';
    const duration = 2 + Math.random() * 2;
    p.style.animationDuration = duration + 's';

    // Logik: Wenn startX zu weit außen und sev hoch, fällt er in den Trash
    const isExcluded = (startX < 20 + (sev * 0.8)) || (startX > 180 - (sev * 0.8));

    if (isExcluded) {
        p.style.transition = `transform ${duration}s linear`;
        setTimeout(() => {
            p.style.transform = `translate(150px, 180px) scale(0.5)`; // Richtung Trash-Bin
        }, 10);
    }

    emitter.appendChild(p);
    setTimeout(() => p.remove(), duration * 1000);
}

// 2. Double-Barreled Detection
function scanItem() {
    const input = document.getElementById('item-scanner').value;
    const feedback = document.getElementById('scan-feedback');

    const fallstricke = [
        { word: ' und ', label: 'Logisches UND' },
        { word: ' sowie ', label: 'Aufzählung' },
        { word: ' oder ', label: 'Alternative' },
        { word: ' / ', label: 'Schrägstrich' }
    ];

    let found = [];
    fallstricke.forEach(f => {
        if (input.toLowerCase().includes(f.word)) found.push(f.label);
    });

    if (input.length < 5) {
        feedback.className = "scan-feedback";
        feedback.innerHTML = '<div class="scan-idle">Warte auf Input...</div>';
        return;
    }

    if (found.length > 0) {
        feedback.className = "scan-feedback error";
        feedback.innerHTML = `<strong>⚠️ REDUNDANZ GEFUNDEN:</strong><br>
            Dein Item enthält: <span class="error-highlight">${found.join(', ')}</span>.<br>
            <em>Gefahr:</em> Misst du zwei Dinge gleichzeitig? Splitte das Item auf.`;
    } else {
        feedback.className = "scan-feedback success";
        feedback.innerHTML = `<strong>✅ SCAN OK:</strong><br>Keine offensichtlichen "Double-Barreled" Marker gefunden. Prüfe im Pretest trotzdem auf Jargon!`;
    }
}

// Intervall für Emitter starten
setInterval(emitProband, 600);

document.addEventListener('DOMContentLoaded', () => {
    updateMortality();
});

/**
 * Phase 6: Chamber C (Content Analysis) Logic
 */

function checkCoderSync() {
    const selA = document.getElementById('coder-a-select');
    const msg = document.getElementById('sync-result-msg');
    const tag = document.getElementById('sync-status-tag');

    if (!selA || !msg) return; // Abbruch wenn IDs fehlen

    const valA = selA.value;
    if (valA === 'none') return;

    if (valA === 'neutral') {
        msg.className = "sync-feedback-box green";
        msg.innerHTML = `<p><strong>SYSTEM_SYNC_OK:</strong> Alpha steigt.</p>`;
        if (tag) { tag.className = "status-tag success"; tag.textContent = "In Sync"; }
    } else {
        msg.className = "sync-feedback-box amber";
        msg.innerHTML = `<p><strong>KONFLIKT:</strong> Coder_Alpha weicht ab.</p>`;
        if (tag) { tag.className = "status-tag warning"; tag.textContent = "Out of Sync"; }
    }
}

let codebookProgress = 20;
function injectRule() {
    const input = document.getElementById('rule-input');
    const archive = document.getElementById('rules-archive');
    const bar = document.getElementById('harden-progress');
    const label = document.getElementById('progress-percent');

    if (input.value.length < 5) return;

    // Fortschritt erhöhen
    codebookProgress = Math.min(100, codebookProgress + 20);
    bar.style.width = codebookProgress + "%";
    label.textContent = codebookProgress + "% Operational";

    // Regel archivieren
    const item = document.createElement('div');
    item.className = 'rule-item';
    item.textContent = `Regel #${Math.floor(codebookProgress / 20)}: ${input.value}`;
    archive.prepend(item);

    // Input reset
    input.value = "";

    // Feedback
    if (codebookProgress >= 80) {
        label.style.color = "#22c55e";
        bar.style.background = "#22c55e";
    }
}

// Phase 7: Logbook & Lever
function addRow() {
    const body = document.getElementById('fix-log-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" placeholder="..."></td>
        <td><input type="text" placeholder="..."></td>
        <td><input type="text" placeholder="..."></td>
    `;
    body.appendChild(row);
}

function breakGlass() {
    document.getElementById('lever-cover').classList.add('broken');
    initLever();
}

function initLever() {
    const lever = document.getElementById('main-lever');
    lever.onclick = () => {
        lever.classList.add('pulled');
        document.getElementById('launch-status').innerHTML = "SYSTEM_DEPLOYED: GO TO SESSION 07";
        document.getElementById('launch-status').style.color = "#22c55e";

        // Finaler Effekt
        document.body.style.boxShadow = "inset 0 0 100px #22c55e";
        setTimeout(() => document.body.style.boxShadow = "none", 1000);
    };
}

/**
 * Phase 7: Red-Team Log Logic (Storage & Export)
 */

// Initialisierung beim Laden
document.addEventListener('DOMContentLoaded', () => {
    loadLogFromStorage();
});

function addRow(val1 = "", val2 = "", val3 = "") {
    const body = document.getElementById('fix-log-body');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><input type="text" class="log-input" value="${val1}" placeholder="z.B. Logik-Fehler H1" oninput="saveLogToStorage()"></td>
        <td><input type="text" class="log-input" value="${val2}" placeholder="Feedback AR / Tester" oninput="saveLogToStorage()"></td>
        <td><input type="text" class="log-input" value="${val3}" placeholder="Fix anwenden..." oninput="saveLogToStorage()"></td>
        <td><button class="remove-row" onclick="removeRow(this)">×</button></td>
    `;

    body.appendChild(row);
    saveLogToStorage();
}

function removeRow(btn) {
    btn.closest('tr').remove();
    saveLogToStorage();
}

function saveLogToStorage() {
    const rows = document.querySelectorAll('#fix-log-body tr');
    const data = [];

    rows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        data.push({
            error: inputs[0].value,
            evidence: inputs[1].value,
            fix: inputs[2].value
        });
    });

    localStorage.setItem('redTeamLog', JSON.stringify(data));
}

function loadLogFromStorage() {
    const saved = localStorage.getItem('redTeamLog');
    const body = document.getElementById('fix-log-body');
    body.innerHTML = ""; // Leer machen

    if (saved) {
        const data = JSON.parse(saved);
        if (data.length > 0) {
            data.forEach(item => addRow(item.error, item.evidence, item.fix));
        } else {
            addRow(); // Mindestens eine leere Zeile
        }
    } else {
        addRow(); // Standardmäßig eine leere Zeile
    }
}

function clearLog() {
    if (confirm("Möchtet ihr wirklich alle Einträge löschen?")) {
        localStorage.removeItem('redTeamLog');
        loadLogFromStorage();
    }
}

function exportToCSV() {
    const rows = document.querySelectorAll('#fix-log-body tr');
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Detektierter Fehler;Evidenz (Pretest);Surgical Fix\n"; // Header

    rows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        const rowData = Array.from(inputs).map(i => i.value.replace(/;/g, ",")); // Semicolon-Schutz
        csvContent += rowData.join(";") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Pretest_Fixit_Log.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Phase 4: Maintenance Manual Logic
 */
const procedures = {
    aloud: {
        title: "Lautes Denken (Think Aloud)",
        check: "Kognitive Belastung und Item-Verständnis.",
        goal: "Identifikation von Fachjargon-Fallen und unlogischen Filterführungen.",
        action: "Setzt einen Probanden vor das Instrument. Er soll jede Frage laut vorlesen und dabei alle Gedanken, Zweifel oder Momente der Verwirrung verbalisieren. Nicht helfen! Nur protokollieren, wo er stockt."
    },
    device: {
        title: "Technik-Audit (Cross-Device)",
        check: "Darstellung und Funktionalität auf mobilen Endgeräten.",
        goal: "Sicherstellen, dass 70% der Smartphone-Nutzer den Stimulus korrekt wahrnehmen.",
        action: "Öffnet den Fragebogen auf mindestens drei Geräten: Einem alten iPhone (kleiner Screen), einem modernen Android und einem Tablet. Prüft: Lädt das Audio? Überdeckt die Tastatur das Absende-Feld? Ist das Label lesbar?"
    },
    timing: {
        title: "Timing & Fatigue Check",
        check: "Echte Bearbeitungszeit unter Realbedingungen.",
        goal: "Vermeidung von 'Speeding' und unzuverlässigen Daten durch zu lange Fragebögen.",
        action: "Stoppt die Zeit bei 5 Testpersonen. Liegt der Median über 12 Minuten? Wenn ja: Radikal kürzen. Jedes Item ohne direkte Hypothesenrelevanz muss raus, sonst sinkt die Validität am Ende des Fragebogens massiv."
    },
    data: {
        title: "Dummy-Export Test",
        check: "Datenstruktur und Variablenbenennung im Zielformat.",
        goal: "Verhinderung von 'Daten-Gulasch' beim späteren Import in SPSS/Excel.",
        action: "Generiert 5-10 Dummy-Antworten und nutzt den Export-Button eures Umfragetools (z.B. SoSci CSV-Export). Prüft: Sind die Variablen korrekt benannt (z.B. 'cred_01')? Werden numerische Werte oder Text-Strings exportiert? Passt das zu eurer Auswertungsstrategie?"
    }
};

function showProcedure(id) {
    const data = procedures[id];
    const box = document.getElementById('maintenance-details');

    document.getElementById('proc-title').textContent = data.title;
    document.getElementById('proc-check').textContent = data.check;
    document.getElementById('proc-goal').textContent = data.goal;
    document.getElementById('proc-action').textContent = data.action;

    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeProcedure() {
    document.getElementById('maintenance-details').classList.add('hidden');
}