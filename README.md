# Elder Scrolls Online Alchemy Assistant

## Demo & Snippets

---

## Requirements / Purpose

The ESO Alchemy Assistant is an online tool designed for helping ESO players craft potions and poisons within the game. There is a certain level of enigma when it comes to designing the ideal concoction to be used in battle, as the game's interface will often hide details about un-researched ingredients from novice alchemists. The ESOAA app is designed to take away some of the difficulty in designing and making potions, and demystifies how the reagents work together to give effect.

The project is an update to the <a href='https://github.com/encodexed/elder-scrolls-alchemy'>previous iteration of the tool</a>, which was written when I was a younger developer, having just learnt the basics of ReactJS. Both of these apps feature:

- A concise but informative UI with mobile-first design in mind
- A UX-friendly way to design concoctions based on desired ingredients or effects and their relations
- A results read out that emulate with considerable accuracy what will be seen in game

**Tech Stack:** HTML, Tailwind CSS, TypeScript, ReactJS

---

## Build Steps

To get this project running in your local environment, paste this into your terminal:

```bash
git clone git@github.com:encodexed/eso-alchemy-assistant.git
cd eso-alchemy-assistant
npm install
npm run dev-host
## `npm run dev-host` will expose the server to your LAN for viewing on mobiles
## Use `npm run dev` for just viewing on your own device
```

---

## Design Goals / Approach

- Given that PC players of ESO have third party mods that can give a more integrated benefit to aspiring alchemists, this app's audience involves those not willing to install third party mods, or Xbox/Playstation users.
- With that in mind, the app was designed to fit a small screen device first, with some consideration given to those who used larger screens secondarily.
- The app boasts a very high degree of accuracy but not 100%, as far as I can tell. This is due to some unknowns regarding the in-game system. The entire logic system to emulate the game was written from scratch by me.
- Data is kept locally and in-memory storage is used extensively as React's `useContext` serves the project well (compared to the previous iteration that featured plenty of messy prop drilling)

---

## Known issues

- Near-but-not-100% accuracy

Feel free to <a href='https://github.com/encodexed/eso-alchemy-assistant/issues'>raise an issue</a> if you discover a bug or anything else.

---

## Future Goals

- Write unit tests for the components and scripts
- Add a reference list for ingredients and effects
- Add an "alternative options" section to display other combinations that produce the same effects
- Adapt the app for larger screen sizes
