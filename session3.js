/**
 * session3.js - Gen 1 Shell
 * Iterative Development for Research Methods C
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("Expedition Session 3: System Initialized.");

    // TODO Gen 2: Initialize Status Board Cards

    // TODO Gen 3: Initialize Hypothesis Auditor Logic

    // TODO Gen 4: Initialize SVG Funnel Animation

    // TODO Gen 5: Initialize Workbench Tab Logic

    // TODO Gen 6: Initialize Legal Game Engine
});

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Observer for Gen 2 sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animated-on-scroll').forEach(section => {
        observer.observe(section);
    });

    console.log("Hero & Status Board ready.");
});


document.addEventListener('DOMContentLoaded', () => {
    const hypoInput = document.getElementById('hypo-input');
    const statusLight = document.getElementById('auditor-status-light');
    const tagsContainer = document.getElementById('keyword-tags');
    const theoryItems = document.querySelectorAll('.theory-item');
    const resultsContainer = document.getElementById('auditor-results');

    const dictionary = {
        zusammenhang: [/je/i, /desto/i, /korreliert/i, /zusammenhang/i],
        unterschied: [/unterschied/i, /vergleich/i, /als/i, /gegenüber/i],
        gerichtet: [/mehr/i, /weniger/i, /höher/i, /tiefer/i, /steigt/i, /sinkt/i, /positiv/i, /negativ/i],
        spezifisch: [/%/i, /doppelt/i, /faktor/i, /signifikant/i]
    };

    hypoInput.addEventListener('input', (e) => {
        const text = e.target.value;
        tagsContainer.innerHTML = '';
        let foundTypes = new Set();

        if (text.length < 5) {
            statusLight.className = 'auditor-status';
            theoryItems.forEach(i => i.classList.remove('active'));
            resultsContainer.innerHTML = '<div class="result-placeholder">Warten auf Eingabe...</div>';
            return;
        }

        // Logic Scan
        for (const [type, patterns] of Object.entries(dictionary)) {
            patterns.forEach(pattern => {
                if (pattern.test(text)) {
                    foundTypes.add(type);
                    const tag = document.createElement('span');
                    tag.className = 'tag';
                    tag.textContent = text.match(pattern)[0];
                    tagsContainer.appendChild(tag);
                }
            });
        }

        // UI Update
        theoryItems.forEach(item => {
            const type = item.dataset.type;
            if (foundTypes.has(type)) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Status Update
        if (foundTypes.has('gerichtet') && (foundTypes.has('zusammenhang') || foundTypes.has('unterschied'))) {
            statusLight.className = 'auditor-status active';
            resultsContainer.innerHTML = '<div class="res-ok">✅ Hypothese ist prüfbar und gerichtet. Bereit für Stichprobenplanung!</div>';
        } else {
            statusLight.className = 'auditor-status warning';
            resultsContainer.innerHTML = '<div class="res-warn">⚠️ Achtung: Achte auf eine klare Richtung (mehr/weniger).</div>';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particle-container');
    const restartBtn = document.getElementById('restart-funnel');
    const stepCards = document.querySelectorAll('.step-card');

    function createParticle() {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const startX = 60 + Math.random() * 280;

        dot.setAttribute("cx", startX);
        dot.setAttribute("cy", 60);
        dot.setAttribute("r", 3 + Math.random() * 2);
        dot.setAttribute("class", "sampling-dot");
        container.appendChild(dot);

        // Animation Timeline
        let timeline = dot.animate([
            { cy: 60, opacity: 0.8 },
            { cy: 180, opacity: 0.6, offset: 0.4 }, // selection layer
            { cy: 340, opacity: 0.4, offset: 0.8 }, // sample layer
            { cy: 440, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: 'cubic-bezier(0.45, 0.05, 0.55, 0.95)'
        });

        // Chance to disappear at filters
        timeline.onfinish = () => dot.remove();

        // Visual Logic: If particle survives past Y=180, highlight step 2, etc.
        // (Simplified for performance)
    }

    let particleInterval;
    function startFlow() {
        clearInterval(particleInterval);
        container.innerHTML = '';
        particleInterval = setInterval(() => {
            for (let i = 0; i < 3; i++) createParticle();
        }, 100);

        // Highlight logic
        setTimeout(() => stepCards[0].classList.add('highlight'), 0);
        setTimeout(() => stepCards[1].classList.add('highlight'), 1000);
        setTimeout(() => stepCards[2].classList.add('highlight'), 2000);
    }

    restartBtn.addEventListener('click', () => {
        stepCards.forEach(c => c.classList.remove('highlight'));
        startFlow();
    });

    // Auto-start on visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) startFlow();
    });
    observer.observe(document.getElementById('s3-sampling-funnel'));
});

document.addEventListener('DOMContentLoaded', () => {
    // Tab Logic
    const tabs = document.querySelectorAll('.wb-tab');
    const panels = document.querySelectorAll('.wb-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;

            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Randomizer Sim Logic (Workbench G1/G3)
    const simPerson = document.querySelector('.sim-person');
    const simBoxes = document.querySelectorAll('.sim-box');
    const btnSim = document.getElementById('btn-simulate-rand');

    if (btnSim) {
        btnSim.addEventListener('click', () => {
            simPerson.style.opacity = '0';
            simBoxes.forEach(b => b.classList.remove('highlight'));

            setTimeout(() => {
                const group = Math.random() > 0.5 ? 'group-a' : 'group-b';
                simPerson.style.opacity = '1';
                document.getElementById(group).classList.add('highlight');
            }, 500);
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const scenarios = [
        // --- CATEGORY: AGE & CONSENT ---
        {
            text: "Ich befrage 12-jährige Schüler zur Nutzung von ChatGPT im Unterricht.",
            correct: "red",
            feedback: "STOPP! Laut ADM-Richtlinien sind Befragungen unter 14 Jahren ohne explizite schriftliche Einwilligung der Eltern verboten."
        },
        {
            text: "Ich befrage 16-jährige Jugendliche in einer Online-Umfrage zu ihren KI-Erfahrungen.",
            correct: "yellow",
            feedback: "GELB! Ab 14 Jahren gilt man als einsichtsfähig. Aber: Bei sensiblen Themen oder langen Befragungen ist die zusätzliche Zustimmung der Eltern ethischer Standard."
        },
        {
            text: "Ich rekrutiere 19-jährige Studierende über einen Instagram-Aufruf.",
            correct: "green",
            feedback: "GRÜN! Volljährige Personen können eigenständig einwilligen. Achte nur auf die Freiwilligkeit und die Anonymität."
        },

        // --- CATEGORY: DATA PRIVACY (DSGVO) ---
        {
            text: "Ich speichere die E-Mail-Adressen für ein Gewinnspiel in der gleichen Excel-Tabelle wie die Umfrage-Ergebnisse.",
            correct: "red",
            feedback: "STOPP! Das ist ein massiver Verstoß gegen die Anonymität. Personenbezogene Daten (E-Mail) müssen strikt getrennt von den Forschungsdaten gespeichert werden."
        },
        {
            text: "Ich analysiere 500 WildChat-Prompts, die Klarnamen und Telefonnummern enthalten.",
            correct: "red",
            feedback: "STOPP! Auch wenn Daten 'öffentlich' sind, müssen PII (Personally Identifiable Information) vor der wissenschaftlichen Analyse manuell oder automatisiert geschrubbt werden."
        },
        {
            text: "Ich nutze IDs (z.B. 'Teilnehmer_01') statt Namen, um meine Interviewpartner zu verwalten.",
            correct: "green",
            feedback: "GRÜN! Pseudonymisierung ist ein Standardverfahren, um den Datenschutz zu gewährleisten."
        },

        // --- CATEGORY: POWER DYNAMICS ---
        {
            text: "Ein Chef bittet seine Mitarbeiter, an meiner Studie zum Thema 'KI und Jobangst' teilzunehmen.",
            correct: "red",
            feedback: "STOPP! In Abhängigkeitsverhältnissen ist Freiwilligkeit kaum prüfbar. Die Mitarbeiter könnten sich zur Teilnahme gezwungen fühlen (Reaktivität)."
        },
        {
            text: "Ich befrage meine Kommilitonen in der Mensa zu ihrer KI-Nutzung.",
            correct: "green",
            feedback: "GRÜN! Unter 'Peers' ist die Freiwilligkeit meist gegeben. Aber Vorsicht vor dem 'Social Desirability Bias' (man antwortet so, wie man glaubt, dass es schlau klingt)."
        },

        // --- CATEGORY: AI SPECIFICS & STIMULI ---
        {
            text: "Ich erstelle für mein Experiment Deepfake-Audios von Politikern, ohne dies in der Einleitung zu erwähnen.",
            correct: "red",
            feedback: "STOPP! Täuschung (Deception) in Experimenten ist nur erlaubt, wenn sie absolut notwendig ist UND am Ende eine sofortige Aufklärung (Debriefing) erfolgt."
        },
        {
            text: "Ich nutze ChatGPT, um 'fiktive' Interviewantworten zu generieren, weil ich keine echten Teilnehmer finde.",
            correct: "red",
            feedback: "STOPP! Das ist Datenfälschung. Synthetische Daten dürfen niemals echte empirische Erhebungen ersetzen, wenn diese als solche deklariert sind."
        },
        {
            text: "Ich markiere einen echten Text als 'KI-generiert', um die Reaktion der Probanden zu testen.",
            correct: "yellow",
            feedback: "GELB! Das ist eine zulässige experimentelle Manipulation (Cover Story), erfordert aber eine vollständige Aufklärung der Teilnehmer nach dem Test."
        },

        // --- CATEGORY: SAMPLING BIAS ---
        {
            text: "Ich poste meinen Link zur KI-Umfrage ausschließlich in einer 'AI Enthusiasts' Facebook-Gruppe.",
            correct: "yellow",
            feedback: "GELB! Rechtlich okay, aber methodisch riskant. Du bekommst ggf. einen extremen 'Interest Bias'. Eure Ergebnisse sind nicht auf die Allgemeinheit übertragbar."
        },
        {
            text: "Ich zahle jedem Teilnehmer 50 Euro, damit er den Fragebogen so ausfüllt, dass meine Hypothese bestätigt wird.",
            correct: "red",
            feedback: "STOPP! Bestechung zur Bestätigung von Hypothesen ist wissenschaftliches Fehlverhalten. Incentives müssen unabhängig vom Antwortverhalten gewährt werden."
        },
        {
            text: "Ich nutze eine Schneeball-Stichprobe (Teilnehmer leiten den Link weiter), um meine Stichprobe zu vergrößern.",
            correct: "green",
            feedback: "GRÜN! Eine legitime Methode für schwer erreichbare Gruppen, solange du die Verzerrungen (Homophilie) in deiner Arbeit kritisch diskutierst."
        },
        {
            text: "Ich sammle Daten von Twitter (X) über eine API für meine Inhaltsanalyse.",
            correct: "yellow",
            feedback: "GELB! Prüfe die aktuellen AGB der Plattform. Was technisch möglich ist, ist rechtlich (Urheberrecht/Nutzungsbedingungen) oft eine Grauzone."
        }
    ];

    let currentIdx = 0;
    const scenarioText = document.getElementById('scenario-text');
    const feedbackBox = document.getElementById('legal-feedback');
    const lights = {
        red: document.getElementById('light-red'),
        yellow: document.getElementById('light-yellow'),
        green: document.getElementById('light-green')
    };

    function loadScenario() {
        scenarioText.textContent = scenarios[currentIdx].text;
        feedbackBox.style.display = 'none';
        Object.values(lights).forEach(l => l.classList.remove('active'));
    }

    document.querySelectorAll('.legal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            const scenario = scenarios[currentIdx];

            // Activate Light
            Object.values(lights).forEach(l => l.classList.remove('active'));
            lights[scenario.correct].classList.add('active');

            // Show Feedback
            feedbackBox.textContent = scenario.feedback;
            feedbackBox.style.display = 'block';
            feedbackBox.className = `legal-feedback-box ${choice === scenario.correct ? 'feedback-correct' : 'feedback-wrong'}`;

            // Next scenario after delay
            setTimeout(() => {
                currentIdx = (currentIdx + 1) % scenarios.length;
                loadScenario();
            }, 3500);
        });
    });

    loadScenario();
});

document.addEventListener('DOMContentLoaded', () => {
    // Self-Check Feedback Logic
    const checkboxes = document.querySelectorAll('.self-check-card input[type="checkbox"]');
    const feedback = document.getElementById('check-feedback');

    checkboxes.forEach(check => {
        check.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('.self-check-card input[type="checkbox"]:checked').length;

            if (checkedCount === 0) {
                feedback.textContent = "Habt ihr alles bedacht?";
                feedback.style.color = "var(--s3-primary)";
            } else if (checkedCount < checkboxes.length) {
                feedback.textContent = "Guter Fortschritt! Bleib dran.";
                feedback.style.color = "orange";
            } else {
                feedback.textContent = "🚀 Bereit zum Start! Reiche deinen Plan ein.";
                feedback.style.color = "var(--s3-accent)";
            }
        });
    });

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Expedition Session 3: Generation 7 Complete. Mission Ready.");
});

/* session3.js - Sektion 1 additions */

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer für sanftes Einblenden der Karten
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Verzögertes Einblenden für Stagger-Effekt
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feedback-card').forEach(card => {
        observer.observe(card);
    });
});

/* session3.js - Sektion 2 Logic additions */

document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    const bridgeLine = document.querySelector('.bridge-main-line');
    const planks = document.querySelectorAll('.bridge-plank');
    const cards = document.querySelectorAll('.explainer-card');
    const btn = document.getElementById('btn-build-bridge');

    if (btn) {
        btn.addEventListener('click', () => {
            currentStep++;

            if (currentStep === 1) {
                bridgeLine.style.strokeDashoffset = "0";
                bridgeLine.style.opacity = "1";
                planks[0].classList.add('active');
                updateCards(0);
            } else if (currentStep <= planks.length) {
                planks[currentStep - 1].classList.add('active');
                updateCards(currentStep - 1);
            }

            if (currentStep === planks.length) {
                btn.textContent = "Brücke stabil!";
                btn.style.background = "#2ecc71";
                triggerGlowEffect();
            }
        });
    }

    function updateCards(index) {
        cards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    function triggerGlowEffect() {
        document.getElementById('warning-icon').style.display = "none";
        // Kleiner Konfetti-Effekt oder Glow hier möglich
    }
});

/* session3.js - Compass Selection Logic */

function selectMethod(methodId) {
    const stage = document.getElementById('method-details-stage');
    const cards = document.querySelectorAll('.compass-card');
    const modules = document.querySelectorAll('.method-module');

    // 1. Karten-Status aktualisieren
    cards.forEach(card => {
        card.classList.remove('active');
        if (card.id === `card-${methodId}`) {
            // Die gewählte Karte markieren (optional, hier als "active" für Styling)
        }
    });

    // 2. Bühne anzeigen
    stage.classList.add('method-stage-visible');

    // 3. Alle Module verstecken, das gewählte zeigen
    modules.forEach(mod => {
        mod.classList.remove('active');
        if (mod.id === `module-${methodId}`) {
            mod.classList.add('active');
        }
    });

    // 4. Smooth Scroll zur Bühne
    stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeMethodStage() {
    const stage = document.getElementById('method-details-stage');
    stage.classList.remove('method-stage-visible');

    // Smooth Scroll zurück zum Wähler
    document.getElementById('s3-method-compass').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* session3.js - IA Module Interactions */

function updateIAViz(type) {
    const container = document.getElementById('ia-particles');
    const title = document.getElementById('ia-viz-title');
    const desc = document.getElementById('ia-viz-desc');

    container.innerHTML = '';
    let totalDots = 60;

    // Texte anpassen
    if (type === 'random') {
        title.textContent = "Echte Zufallsauswahl";
        desc.textContent = "Jeder Fall hat die gleiche Chance. Benötigt einen vollständigen Auswahlrahmen (Liste).";
    } else if (type === 'system') {
        title.textContent = "Systematische Auswahl";
        desc.textContent = "Jeder k-te Fall wird gezogen (z.B. jeder 100. Prompt). Ideal für große Datenbanken.";
    } else {
        title.textContent = "Bewusste Auswahl";
        desc.textContent = "Gezielte Suche nach Extremfällen oder typischen Beispielen. Keine statistische Verallgemeinerung.";
    }

    // Punkte generieren
    for (let i = 0; i < totalDots; i++) {
        const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = 50 + Math.random() * 200;
        const y = 60 + Math.random() * 120;
        dot.setAttribute("cx", x);
        dot.setAttribute("cy", y);
        dot.setAttribute("r", 3);
        dot.setAttribute("class", "ia-dot");
        container.appendChild(dot);

        // Auswahl-Logik animieren
        let isSelected = false;
        if (type === 'random' && Math.random() > 0.7) isSelected = true;
        if (type === 'system' && i % 5 === 0) isSelected = true;
        if (type === 'purposive' && x > 180) isSelected = true;

        if (isSelected) {
            setTimeout(() => {
                dot.classList.add('selected');
                dot.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(180px)' }
                ], {
                    duration: 1000 + Math.random() * 500,
                    fill: 'forwards',
                    easing: 'ease-in'
                });
            }, i * 20);
        }
    }
}

/* session3.js - Experiment Module Interactions */

let countA = 0;
let countB = 0;
let isProcessing = false;

function runRandomizer() {
    if (isProcessing) return;

    const core = document.getElementById('machine-core');
    const status = document.getElementById('machine-status');
    const displayA = document.getElementById('count-a');
    const displayB = document.getElementById('count-b');
    const laneA = document.getElementById('lane-a');
    const laneB = document.getElementById('lane-b');

    isProcessing = true;
    core.classList.add('processing');
    status.textContent = "Zufalls-Algorithmus läuft...";

    // Simulation von 20 Zuteilungen in schneller Folge
    let iterations = 0;
    const interval = setInterval(() => {
        const choice = Math.random() > 0.5 ? 'A' : 'B';

        laneA.classList.remove('active-a');
        laneB.classList.remove('active-b');

        if (choice === 'A') {
            countA++;
            displayA.textContent = countA;
            laneA.classList.add('active-a');
        } else {
            countB++;
            displayB.textContent = countB;
            laneB.classList.add('active-b');
        }

        iterations++;
        if (iterations >= 20) {
            clearInterval(interval);
            core.classList.remove('processing');
            status.textContent = "Zuteilung abgeschlossen (N=20 simuliert)";
            isProcessing = false;
        }
    }, 100);
}

/* session3.js - Survey Module Interactions */

function surveyStep(step, choice) {
    const textContainer = document.getElementById('tree-step-1');
    const visualContainer = document.getElementById('survey-map-visual');

    if (step === 2) {
        if (choice === 'yes') {
            visualContainer.innerHTML = `
                <div class="node-box">Sampling Frame vorhanden</div>
                <div class="node-arrow">↓</div>
                <div class="node-box">Wahrscheinlichkeitsauswahl</div>
                <p class="small" style="color:#64748b; margin-top:1rem;">Super! Ihr könnt echten Zufall anwenden (z.B. geschichtete Stichprobe).</p>
            `;
            textContainer.innerHTML = `<h4>Status: Repräsentativ</h4><p>Ihr seid in der Königsklasse. Beachtet die Non-Response-Rate.</p><button class="btn-logic" onclick="location.reload()">Reset</button>`;
        } else {
            visualContainer.innerHTML = `
                <div class="node-box secondary">Kein Sampling Frame</div>
                <div class="node-arrow">↓</div>
                <div class="node-box secondary">Nicht-Wahrscheinlichkeit</div>
                <p class="small" style="color:#64748b; margin-top:1rem;">Realität für G2: Ihr müsst über Quoten oder Schneeball-Verfahren Varianz erzwingen.</p>
            `;
            textContainer.innerHTML = `
                <h4>Schritt 2: Varianz sichern</h4>
                <p>Wie erreicht ihr Personen über 40 Jahre (keine Studenten)?</p>
                <div class="logic-buttons">
                    <button class="btn-logic" onclick="surveyStep(3, 'snowball')">Schneeball</button>
                    <button class="btn-logic" onclick="surveyStep(3, 'quota')">Quote</button>
                </div>
            `;
        }
    }

    if (step === 3) {
        const method = choice === 'snowball' ? 'Schneeball-System' : 'Quoten-Stichprobe';
        textContainer.innerHTML = `
            <h4>Methode: ${method}</h4>
            <p>Diskutiert in eurem Plan ehrlich den Bias (z.B. Homophilie: 'Leute wie wir').</p>
            <button class="btn-logic" onclick="location.reload()">Andere Strategie prüfen</button>
        `;
        visualContainer.innerHTML += `
            <div class="node-arrow">↓</div>
            <div class="node-box secondary">${method}</div>
        `;
    }
}