/**
 * session1.js - Interaktive Logik für Methodenprojekt C
 * Expedition: Forschung zu Generativer KI
 */

document.addEventListener('DOMContentLoaded', function () {
    const stages = document.querySelectorAll('.expedition-stage');
    const detailsContainer = document.querySelector('.expedition-details-container');
    const detailsContent = document.querySelector('.expedition-details-content');
    const textContainer = detailsContainer.querySelector('.details-text');
    const animationContainer = detailsContainer.querySelector('.details-animation');
    let activeStage = null;

    // Zuordnung der Animationen zu den Phasen
    const animations = {
        'stage-1': buildBlueprintAnimation,  // Fokus: Themenfindung KI
        'stage-2': buildGearingUpAnimation,  // Fokus: Instrumente (IA/Befragung/Exp)
        'stage-3': buildDataCollectionAnimation, // Fokus: Feldphase & Rekrutierung
        'stage-4': buildAnalysisAnimation,   // Fokus: Datenauswertung
        'stage-5': buildPresentationAnimation  // Fokus: Abschlusspräsentation
    };

    stages.forEach(stage => {
        stage.addEventListener('click', () => {
            const stageId = stage.id;

            if (activeStage && activeStage.id === stageId) {
                activeStage.classList.remove('active');
                detailsContainer.style.maxHeight = null;
                detailsContainer.classList.remove('show');
                activeStage = null;
                return;
            }

            if (activeStage) {
                activeStage.classList.remove('active');
            }

            stage.classList.add('active');
            activeStage = stage;

            const title = stage.dataset.title;
            const text = stage.dataset.text;
            textContainer.innerHTML = `<h4>${title}</h4><p>${text}</p><p style="font-size: 0.85em; color: #666; font-style: italic;">Klicken Sie in der Animation auf ein Thema, um es zu fokussieren!</p>`;

            animationContainer.innerHTML = '';
            if (animations[stageId]) {
                animations[stageId](animationContainer);
            }

            detailsContainer.classList.add('show');
            setTimeout(() => {
                if (detailsContainer.classList.contains('show')) {
                    detailsContainer.style.maxHeight = detailsContent.scrollHeight + 'px';
                }
            }, 50);
        });
    });

    // --- Animation Stage 1: Themenfokus KI ---
// --- Animation Stage 1: Themenfokus KI (Optimiert gegen Überlappung & Clipping) ---
function buildBlueprintAnimation(container) {
    container.id = "blueprint-animation";
    const topics = ["Deepfakes", "KI-Glaubwürdigkeit", "ChatGPT Nutzung", "Arbeitsplatzangst", "Prompt-Engineering", "Algorithm Bias", "KI-Journalismus", "Mensch-KI-Interaktion"];
    let isFocused = false;
    const allWordElements = [];
    const placedRects = []; // Speicher für bereits belegte Bereiche

    // Hilfsfunktion: Prüft Überlappung zwischen zwei Rechtecken
    function overlaps(newRect, existingRects) {
        const padding = 10; // Mindestabstand zwischen den Wörtern
        return existingRects.some(r => {
            return !(newRect.x + newRect.w + padding < r.x ||
                     newRect.x > r.x + r.w + padding ||
                     newRect.y + newRect.h + padding < r.y ||
                     newRect.y > r.y + r.h + padding);
        });
    }

    setTimeout(() => {
        const containerRect = container.getBoundingClientRect();
        if (containerRect.width === 0) return;

        topics.forEach(topic => {
            const word = document.createElement('div');
            word.className = 'blueprint-word';
            word.textContent = topic;
            word.style.visibility = 'hidden'; // Erst messen, dann zeigen
            container.appendChild(word);

            const wordWidth = word.offsetWidth;
            const wordHeight = word.offsetHeight;

            let x, y;
            let attempts = 0;
            const maxAttempts = 200; // Verhindert Endlosschleife bei Platzmangel
            let foundSpot = false;

            while (attempts < maxAttempts && !foundSpot) {
                // Berechne Zufallsposition innerhalb der Grenzen (Clipping-Schutz)
                x = Math.random() * (containerRect.width - wordWidth);
                y = Math.random() * (containerRect.height - wordHeight);

                const currentRect = { x, y, w: wordWidth, h: wordHeight };

                if (!overlaps(currentRect, placedRects)) {
                    foundSpot = true;
                    placedRects.push(currentRect);
                }
                attempts++;
            }

            // Position setzen und sichtbar machen
            word.style.left = `${x}px`;
            word.style.top = `${y}px`;
            word.style.visibility = 'visible';
            allWordElements.push(word);
        });

        // Klick-Logik bleibt gleich
        allWordElements.forEach(word => {
            word.addEventListener('click', (event) => {
                if (isFocused) return;
                isFocused = true;
                container.classList.add('focused');
                const clicked = event.currentTarget;
                clicked.classList.add('final-question');

                const centerX = containerRect.width / 2;
                const centerY = containerRect.height / 2;
                clicked.style.left = `${centerX - clicked.offsetWidth / 2}px`;
                clicked.style.top = `${centerY - clicked.offsetHeight / 2}px`;
            });
        });

        container.classList.add('run-animation');
    }, 100); // Etwas mehr Zeit für das Rendering der Breite
}

    // --- Animation Stage 2: Instrumentenwahl ---
    function buildGearingUpAnimation(container) {
        container.id = "gearing-up-animation";
        const designChoices = [
            { id: 'survey', goal: 'Nutzung & Einstellung', toolIcon: '📋', toolName: 'Befragung', description: 'Sie messen Meinungen und Verhaltensweisen mittels standardisierter Fragebögen (SoSci Survey).' },
            { id: 'content', goal: 'Darstellung & Frames', toolIcon: '🔎', toolName: 'Inhaltsanalyse', description: 'Sie untersuchen systematisch KI-Inhalte (z.B. YouTube-Videos) anhand eines Codebuchs.' },
            { id: 'exp', goal: 'Wirkung & Kausalität', toolIcon: '🧪', toolName: 'Experiment', description: 'Sie testen Ursache-Wirkungs-Zusammenhänge durch gezielte Manipulation von KI-Inhalten.' }
        ];

        container.innerHTML = `<div class="toolkit-workbench"></div><div class="toolkit-controls"></div><div class="toolkit-description">Wählen Sie ein Forschungsziel.</div>`;
        const workbench = container.querySelector('.toolkit-workbench');
        const controls = container.querySelector('.toolkit-controls');
        const description = container.querySelector('.toolkit-description');

        designChoices.forEach(choice => {
            const btn = document.createElement('button');
            btn.className = 'toolkit-button';
            btn.textContent = choice.goal;
            controls.appendChild(btn);

            btn.addEventListener('click', () => {
                workbench.innerHTML = `<div class="toolkit-item visible"><div class="item-icon">${choice.toolIcon}</div><div class="item-name">${choice.toolName}</div></div>`;
                description.textContent = choice.description;
            });
        });
    }

    // --- Animation Stage 3: Feldphase (Daten sammeln) ---
    function buildDataCollectionAnimation(container) {
        container.id = "data-collection-animation";
        container.innerHTML = `
            <div class="collection-source" style="height: 60px; background: #e3f2fd; border-radius: 5px; position: relative; overflow: hidden;"></div>
            <div class="collection-path" style="display: flex; justify-content: space-around; align-items: center; margin-top: 20px;">
                <div class="research-tool" style="font-size: 2.5rem;">📡</div>
                <div class="storage-bin" style="width: 80px; height: 60px; border: 3px solid #003560; border-top: none; display: flex; flex-wrap: wrap; padding: 5px; gap: 2px;"></div>
            </div>
            <div style="text-align: center; margin-top: 10px; font-size: 0.8em; font-weight: bold;">Daten-Stream aktiv...</div>
        `;

        const source = container.querySelector('.collection-source');
        const storage = container.querySelector('.storage-bin');
        const icons = ['📄', '📊', '💬', '🎬', '🤖'];

        const flowInterval = setInterval(() => {
            if (!document.getElementById('data-collection-animation')) {
                clearInterval(flowInterval);
                return;
            }
            const item = document.createElement('div');
            item.textContent = icons[Math.floor(Math.random() * icons.length)];
            item.style.position = 'absolute';
            item.style.left = Math.random() * 90 + '%';
            item.style.top = '-20px';
            item.style.transition = 'top 2s linear';
            source.appendChild(item);

            setTimeout(() => {
                item.style.top = '70px';
                setTimeout(() => {
                    item.remove();
                    const dot = document.createElement('div');
                    dot.style.width = '8px';
                    dot.style.height = '8px';
                    dot.style.background = '#e85f3e';
                    dot.style.borderRadius = '50%';
                    if (storage.children.length < 40) storage.appendChild(dot);
                }, 1900);
            }, 50);
        }, 600);
    }

    // --- Animation Stage 4: Analyse (Schatzsuche) ---
    function buildAnalysisAnimation(container) {
        container.id = "analysis-animation";
        container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; height: 100%;">
                <div class="raw-data" style="font-size: 2rem;">🧩</div>
                <div class="processor" style="font-size: 3rem; animation: spin 4s linear infinite;">⚙️</div>
                <div class="results" style="display: flex; align-items: flex-end; gap: 5px; height: 80px; width: 100px; border-bottom: 2px solid #333;">
                    <div class="bar" style="width: 20px; background: #003560; transition: height 1s; height: 0;"></div>
                    <div class="bar" style="width: 20px; background: #0073a0; transition: height 1s; height: 0;"></div>
                    <div class="bar" style="width: 20px; background: #e85f3e; transition: height 1s; height: 0;"></div>
                </div>
            </div>
            <p style="font-size: 0.8em; margin-top: 10px;">Muster werden erkannt...</p>
        `;

        const bars = container.querySelectorAll('.bar');
        setTimeout(() => {
            bars[0].style.height = '60%';
            bars[1].style.height = '90%';
            bars[2].style.height = '40%';
        }, 500);
    }

    // --- Animation Stage 5: Summit (Ergebnisse teilen) ---
    function buildPresentationAnimation(container) {
        container.id = "presentation-animation";
        container.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 3rem;">📢</div>
                <div style="display: flex; justify-content: center; gap: 10px; margin-top: 15px;">
                    <div class="audience" style="opacity: 0; transition: opacity 1.5s;">🎓</div>
                    <div class="audience" style="opacity: 0; transition: opacity 0.5s 3.5s;">🏢</div>
                    <div class="audience" style="opacity: 0; transition: opacity 0.5s 3.5s;">🌍</div>
                </div>
                <p style="font-weight: bold; color: #e85f3e; margin-top: 20px; opacity: 0; transition: opacity 0s 6s;">Impact erzeugt!</p>
            </div>
        `;
        setTimeout(() => {
            container.querySelectorAll('.audience').forEach(a => a.style.opacity = '1');
            container.querySelector('p').style.opacity = '1';
        }, 100);
    }
    // === Tribe Finder Game Logik ===
    const gameContainer = document.getElementById('group-former-container');
    if (gameContainer) {
        const questions = [
            {
                question: "Welcher Aspekt von KI fasziniert dich am meisten?",
                options: {
                    A: { emoji: '🎨', text: 'Kreativität: Generierung von Bildern & Videos' },
                    B: { emoji: '🧠', text: 'Wirkung: Wie KI unser Denken beeinflusst' },
                    C: { emoji: '⚖️', text: 'Ethik: Diskriminierung durch Algorithmen' },
                    D: { emoji: '🛠️', text: 'Technik: Wie die LLMs dahinter funktionieren' }
                }
            },
            {
                question: "In einer Forschungsgruppe bist du eher der/die...",
                options: {
                    A: { emoji: '📊', text: 'Zahlen-Jongleur: Statistik & Auswertung' },
                    B: { emoji: '✍️', text: 'Storyteller: Ergebnisse präzise verschriftlichen' },
                    C: { emoji: '🔎', text: 'Detail-Detektiv: Codebücher & Präzision' },
                    D: { emoji: '📅', text: 'Struktur-Profi: Projektmanagement & Termine' }
                }
            },
            {
                question: "Wie stehst du persönlich zu Generativer KI?",
                options: {
                    A: { emoji: '🚀', text: 'Early Adopter: Ich nutze sie täglich' },
                    B: { emoji: '🤨', text: 'Kritischer Geist: Wir brauchen mehr Regulierung' },
                    C: { emoji: '🤔', text: 'Beobachter: Faszinierend, aber auch gruselig' },
                    D: { emoji: '🤷', text: 'Pragmatiker: Hilfreiches Tool, mehr nicht' }
                }
            },
            {
                question: "Dein bevorzugtes Material für die Forschung wäre:",
                options: {
                    A: { emoji: '🎞️', text: 'Social Media Posts & Videos' },
                    B: { emoji: '📝', text: 'Antworten aus einer Umfrage' },
                    C: { emoji: '📰', text: 'Zeitungsartikel & Nachrichtentexte' },
                    D: { emoji: '💡', text: 'Selbst erstellte experimentelle Stimuli' }
                }
            },
            {
                question: "Wie gehst du an komplexe Probleme heran?",
                options: {
                    A: { emoji: '📑', text: 'Struktur: Erstmal einen detaillierten Plan machen' },
                    B: { emoji: '🚀', text: 'Einfach mal machen: Learning by Doing' },
                    C: { emoji: '🔍', text: 'Analyse: Erstmal alle Hintergrundinfos checken' },
                    D: { emoji: '🗣️', text: 'Austausch: Erstmal mit anderen drüber reden' }
                }
            },
            {
                question: "Was motiviert dich bei diesem Projekt am meisten?",
                options: {
                    A: { emoji: '🎓', text: 'Die Note: Ich will eine exzellente Leistung bringen' },
                    B: { emoji: '💡', text: 'Die Erkenntnis: Ich will wirklich verstehen, wie KI wirkt' },
                    C: { emoji: '🛠️', text: 'Der Skill: Ich will lernen, wie man Studien professionell macht' },
                    D: { emoji: '🍕', text: 'Das Team: Eine gute Zeit mit coolen Leuten haben' }
                }
            },
            {
                question: "Dein Umgang mit Software und Tools?",
                options: {
                    A: { emoji: '🤓', text: 'Power-User: Ich fuchse mich in jedes Tool (SPSS, R, etc.)' },
                    B: { emoji: '🖌️', text: 'Ästhet: Ich sorge dafür, dass alles (Layout, Grafiken) top aussieht' },
                    C: { emoji: '✍️', text: 'Schreiberling: Ich liebe es, komplexe Dinge in klare Worte zu fassen' },
                    D: { emoji: '🤷', text: 'Nutzer: Ich brauche klare Anleitungen, dann klappt das' }
                }
            },
            {
                question: "Was ist dir bei der Teamarbeit am wichtigsten?",
                options: {
                    A: { emoji: '⏱️', text: 'Pünktlichkeit: Deadlines sind heilig' },
                    B: { emoji: '🌟', text: 'Kreativität: Wir brauchen innovative Ideen' },
                    C: { emoji: '🤝', text: 'Harmonie: Ein netter Umgang ohne Stress' },
                    D: { emoji: '🔥', text: 'Effizienz: Schnell zum Ziel kommen' }
                }
            }
        ];

        const overlay = document.getElementById('game-overlay');
        const overlayTitle = document.getElementById('overlay-title');
        const startGameBtn = document.getElementById('start-game-btn');
        const nextQuestionBtn = document.getElementById('next-question-btn');
        const cards = document.querySelectorAll('.tribe-card');
        const questionText = document.getElementById('question-text');
        const questionCounter = document.getElementById('question-counter');
        const timerText = document.getElementById('timer-text');
        const timerBar = document.getElementById('timer-bar');

        let currentQuestionIndex = -1;
        let timerInterval;

        startGameBtn.addEventListener('click', () => {
            overlay.classList.remove('visible');
            currentQuestionIndex = 0;
            startRound(currentQuestionIndex);
        });

        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) startRound(currentQuestionIndex);
            else showEndScreen();
        });

        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (card.classList.contains('disabled')) return;
                cards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                card.querySelector('.peer-count').textContent = '1';
            });
        });

        function startRound(index) {
            const data = questions[index];
            nextQuestionBtn.disabled = true;
            questionCounter.textContent = `Runde ${index + 1} / ${questions.length}`;
            questionText.textContent = data.question;
            cards.forEach(card => {
                const opt = card.dataset.option;
                card.querySelector('.card-emoji').textContent = data.options[opt].emoji;
                card.querySelector('.card-text').textContent = data.options[opt].text;
                card.classList.remove('selected', 'disabled');
                card.querySelector('.peer-count').textContent = '0';
            });
            startTimer();
        }

        function startTimer() {
            let left = 10;
            timerBar.style.transition = 'none';
            timerBar.style.width = '100%';
            void timerBar.offsetWidth;
            timerBar.style.transition = 'width 10s linear';
            timerBar.style.width = '0%';

            timerInterval = setInterval(() => {
                left--;
                timerText.textContent = `0:${left < 10 ? '0' : ''}${left}`;
                if (left <= 0) {
                    clearInterval(timerInterval);
                    cards.forEach(c => c.classList.add('disabled'));
                    nextQuestionBtn.disabled = false;
                }
            }, 1000);
        }

        function showEndScreen() {
            overlayTitle.innerHTML = 'Toll! Schau dich im Raum um...<br><small>Finde Leute, die in den gleichen Ecken standen wie du. Das ist dein Tribe!</small>';
            startGameBtn.textContent = 'Nochmal spielen';
            overlay.classList.add('visible');
        }
    }

    // Ersten Stage automatisch öffnen
    document.querySelector('#stage-1').click();
});