# THE ETHICAL RACE — Game Design & Classroom Plan

## 1. Positioning

THE ETHICAL RACE is a simple 16-cell Monopoly-style classroom mini-game. The board, dice and movement are only the format. The main purpose is to make the anti-corruption knowledge interactive.

**Core loop:**

**Roll → Move → Scenario → Decision → Consequence → Key Lesson**

The player is deliberately limited to one character so the audience can focus on the ethical issues rather than on competition or complex rules.

## 2. Learning Goal

The player should leave the game able to recognise:

- what bribery looks like beyond cash
- how procurement, public-sector and hidden bribery can occur
- why integrity, fairness and transparency matter
- why the Siemens scandal became systemic
- the four root causes identified in the report
- the individual, organisational, social and governance impacts
- who failed to perform key responsibilities
- the four warning signs
- what remediation and prevention can look like

## 3. 16-Cell Route

| Cell | Module | Knowledge focus | Interaction |
| --- | --- | --- | --- |
| 1   | START | Enter the workplace | Opening |
| 2   | Gifts & Hospitality | Improper benefits beyond cash | Scenario |
| 3   | Procurement Bribery | Common form of bribery | Scenario |
| 4   | Public-Sector Bribery | Approval / release decisions | Scenario |
| 5   | Hidden Bribery | Off-book or unclear payments | Scenario |
| 6   | Three Ethical Principles | Integrity, fairness, transparency | Scenario |
| 7   | The Siemens Case | Scale, secret accounts, intermediaries, parties involved | Knowledge card |
| 8   | Four Root Causes | Targets, controls, culture, external pressure | Scenario |
| 9   | Individual & Organisational Costs | People, investors, fines, reputation | Scenario |
| 10  | Society & Governance | Public money, competition, trust, enforcement | Scenario |
| 11  | When Controls Fail | Management, finance, audit, board | Scenario |
| 12  | Red Flags | Hospitality, off-book payments, one-person control, target pressure | Scenario |
| 13  | Siemens Remediation | Governance, finance, trust, partners, audit | Scenario |
| 14  | Prevention Strategy | Leadership, three control lines, reporting, external oversight | Scenario |
| 15  | Final Ethical Decision | Pressure + weak controls + competition | Final scenario |
| 16  | TRUSTED LEADER | Integrity, accountability, trust | Finish |

## 4. Direction Arrow System

The arrows are not decorative. They show the actual path:

`1 → 2 → 3 → 4 ↑ 5 → 6 → 7 → 8 ↑ 9 → 10 → 11 → 12 ↑ 13 → 14 → 15 → 16`

On the board this is displayed through small top-right arrows on the individual cells.

## 5. Decision System

Every scenario follows four layers:

1. **Scenario** — a realistic workplace situation.
2. **Decision** — choose A, B or C.
3. **Consequence** — show movement and Trust impact.
4. **Key Lesson** — directly connect the decision to the report content.

### Correct

- Trust increases
- usually advance one cell
- display the key lesson

### Risky

- Trust decreases slightly
- no movement
- explain why the choice creates avoidable ethical or control risk

### Wrong

- Trust decreases more strongly
- move back two cells
- explain the ethical consequence

The mechanics are intentionally simple because the presentation is about anti-corruption knowledge, not game complexity.

## 6. Siemens Case Card

Cell 7 is an information card rather than a quiz. It gives the audience a compact factual reminder before the game moves into root causes and impact.

The card uses the figures and framing from the uploaded presentation: approximately 20 years, more than 20 countries, and about US$1.6 billion in global fines / settlement amount in 2008 as stated in the presentation.

## 7. Final Challenge

Cell 15 combines the report's root causes, warning signs and prevention logic.

A correct decision leads directly to cell 16. This gives the game a clear ending without introducing complicated special powers or extra turns.

## 8. Visual Direction

Recommended visual language:

- dark teal / petrol background
- warm gold highlights
- ivory typography
- glassmorphism panels used sparingly
- premium corporate board-game appearance
- restrained glow and motion
- a single clear player token
- strong visual hierarchy on scenario cards

The board should feel like a polished digital tabletop rather than a spreadsheet.

## 9. Classroom Flow

**1 operator + 1 host + whole-class voting**

The host asks the room to vote A/B/C. The operator then selects the player's answer. The reveal animation becomes the teaching moment.

Suggested transition line:

> “You have seen the solution. Now let’s see what you would do in the situation.”

## 10. Part 6 → Part 7 Connection

Part 6 explains what organisations should do.

Part 7 lets the audience experience the conditions that make those controls necessary:

- gifts and hospitality
- pressure to hit targets
- unclear payments
- weak controls
- intermediaries
- reporting and audit

The game therefore converts:

**Knowledge → Decision → Consequence → Prevention**

## Final Ending Presentation

The final presentation is driven by Trust Score rather than random rewards. The board remains simple, but the ending becomes visually memorable.

- **90–100 — Legendary Trust:** fireworks, full-screen confetti, coin and gem rain, glow pulse and a stronger reveal.
- **75–89 — Strong Ethical Finish:** fireworks, confetti, coins and gems with a restrained celebration.
- **60–74 — Ethical Learner:** softer confetti and particle celebration.
- **40–59 — High Risk:** the screen desaturates and freezes, followed by a glass-crack effect and a short shake.
- **0–39 — Critical Risk:** stronger grayscale/freeze treatment, screen shake, glass fracture and ink-like visual spreading.

These effects are implemented with HTML/CSS/JavaScript only, so the classroom package does not depend on additional image generation.

## Speed Bonus Scoring (v1.3)

The dice remain a simple story-progression mechanic, but finishing efficiently earns an additional Speed Bonus. Three dice rolls is the theoretical minimum from cell 1 to cell 16.

| Dice rolls | Speed Bonus |
| --- | --- |
| 3   | +18 |
| 4   | +15 |
| 5   | +12 |
| 6   | +9  |
| 7   | +6  |
| 8   | +3  |
| 9   | +0  |
| 10+ | +0  |

Final Trust = Base Trust Score + Speed Bonus, capped at 100. Ethical decisions remain the main source of Trust; the Speed Bonus rewards efficient completion without allowing dice luck alone to determine the outcome.

## End-Game Presentation (v1.3)

The final visual effects are rendered in a foreground FX layer above the result overlay so fireworks, confetti, coins, gems, grayscale freeze, screen shake, glass cracks and ink effects are not hidden behind the large result card. The result card is revealed with a short delay so the finale can be seen before the score appears.
