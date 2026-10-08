# THE ETHICAL RACE

A polished, single-player browser mini-game for a Business Ethics / Anti-Corruption classroom presentation.

## Concept

The board game mechanics are intentionally simple. The dice and 16-cell board are only the delivery format; the educational value comes from the ethical decisions, consequences and lessons.

**Core loop:**

`ROLL DICE → MOVE → FACE A SCENARIO → CHOOSE A/B/C → REVEAL CONSEQUENCE → LEARN → CONTINUE`

## Core Gameplay

- 16-cell serpentine board
- One player token
- Repeated dice rolls
- Ethical scenario cards on the board
- A/B/C decisions
- Correct choice: Trust Score increases and the player normally advances one step
- Risky choice: no movement, with an explanation of the risk
- Wrong choice: Trust Score drops and the player moves back two steps
- Siemens real-life case knowledge card
- Final ethical challenge can send the player directly to the finish
- End screen shows Ethical Accuracy, Trust Score and Scenarios Answered

## Board Direction Arrows

The small arrow in the top-right corner of each cell shows the exact direction of the next cell:

- 1 → right
- 2 → right
- 3 → right
- 4 → up
- 5 → left
- 6 → left
- 7 → left
- 8 → up
- 9 → right
- 10 → right
- 11 → right
- 12 → up
- 13 → left
- 14 → left
- 15 → left
- 16 → finish

## Source-Based Content

The scenarios are grounded in the uploaded presentation, including:

1. Bribery can involve improper benefits beyond cash, including gifts, privileges and lavish hospitality.
2. Common forms: procurement bribery, public-sector bribery and hidden bribery.
3. Three ethical principles: integrity, fairness and transparency.
4. Siemens global bribery scandal: approximately 20 years, more than 20 countries, and about US$1.6 billion in global fines / settlement amount in 2008 as stated in the presentation; secret bank accounts and external intermediaries; multiple parties involved.
5. Four root causes: aggressive targets, weak controls, cultural tolerance and external pressure.
6. Impact: individual, organisational, social / public trust and governance.
7. Responsibility: senior management, finance, audit and the board as multiple lines of defence.
8. Warning signs: unusually generous hospitality, unclear or off-book payments, one-person control and pressure to hit targets.
9. Siemens remediation: top-level governance, financial reform, trust rebuilding, business-partner controls and audit reform.
10. Prevention for listed companies: ethical leadership, three independent control lines, reporting channels and external oversight.

## Local Run

1. Extract the folder.
2. Double-click `index.html` to try it directly in a browser.
3. If the browser restricts local assets, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## AI-Generated Visuals

The current `assets/` folder contains lightweight SVG fallback art so the game works offline immediately.

For a more polished classroom version, use the prompts in `image_prompts.md` to generate PNG artwork with Tongyi Wanxiang and replace the corresponding SVG paths in `game.js` and `index.html`.

## Recommended Final Visual Assets

- `hero_office.png`
- `player_character.png`
- `gift_hospitality.png`
- `procurement_bribe.png`
- `government_bribe.png`
- `hidden_payment.png`
- `three_pillars.png`
- `siemens_case.png`
- `root_causes.png`
- `impact_people.png`
- `public_trust.png`
- `responsibility.png`
- `warning_signs.png`
- `remediation.png`
- `prevention.png`
- `final_choice.png`
- `trust_victory.png`

## Classroom Delivery

Recommended setup:

- 1 student operates the game
- 1 student hosts or reads the scenario aloud
- the whole class votes A/B/C before the player clicks
- the game reveals the consequence and key lesson

This keeps the mini-game as a teaching vehicle rather than turning the presentation into a complicated game session.

## Title

**THE ETHICAL RACE**

Subtitle: **Every Choice Has a Consequence.**


### Speed Bonus

The player earns a higher Speed Bonus by reaching the finish in fewer dice rolls. Three rolls is the theoretical minimum; each additional roll reduces the bonus. Final Trust is the Base Trust Score plus the Speed Bonus, capped at 100.
