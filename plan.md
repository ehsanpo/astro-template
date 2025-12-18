# Gamified Website + Persistent Media Player — Plan

This plan introduces a game layer (click-to-earn, shop, achievements, combo, auto-clicker, progression, unlockable navigation) and a site-wide media player that keeps playing across page navigations (best-effort resume). Work is staged to minimize disruption and keep code modular.

## Goals
- Transform site into a subtle game after Konami Code.
- Lock header nav until unlocked via in-site shop.
- Clicks earn coins; combo and upgrades amplify gains.
- Achievements unlock with toasts.
- Auto-clicker accrues coins over time.
- Persistent save (localStorage) with versioning.
- Media player sits in layout, continues playback across pages (resume on mount).
- All game logic isolated under `src/game/` with shared `types.ts`.

## Architecture
- `src/game/types.ts`: Central TS types/enums for all game entities and state.
- `src/game/state.ts`: Global game store (Zustand) with persistence and selectors.
- `src/game/engine.ts`: Boot/teardown, ticks, timers, and integration glue.
- `src/game/achievements.ts`: Definitions + trigger evaluation.
- `src/game/shop.ts`: Items, pricing curves, purchase validation, unlock effects.
- `src/game/combo.ts`: Combo window, multiplier, decay.
- `src/game/autoclicker.ts`: Interval logic, scaling, performance safeguards.
- `src/game/storage.ts`: Save/load, versioning, migrations (localStorage).
- UI (React Islands):
  - `src/components/game/GameHUD.tsx`: Coin counter, combo indicator, shop button.
  - `src/components/game/ShopModal.tsx`: Purchases, unlocks, upgrades.
  - `src/components/game/AchievementToast.tsx`: Toast notifications.
- Integration:
  - Konami Code → enable game mode and show fireworks (existing) → mount HUD.
  - Header/Nav (`Header.astro`, `MainNav.astro`) read lock state to disable links.
- Media Player:
  - `src/components/media/MediaPlayer.tsx` mounted from `layouts/Layout.astro` with `client:load`.
  - Use native HTML5 `<audio>` element; no external audio libraries.
  - Save playing/track/time to localStorage; attempt quick resume on next page.

## Data Model (high-level)
- GameState: mode, coins, clickPower, combo, autoClicker, unlocks, achievements, playerLevel, version.
- ShopItem: id, type (unlock|upgrade), cost, level, effect.
- Achievement: id, name, desc, condition, unlockedAt.
- Unlocks: header pages by slug.

## UX Notes
- Site looks normal until Konami Code.
- HUD: small coin counter + shop icon in a corner; tasteful, not intrusive.
- Locked nav shows tooltip “Locked — unlock in Shop”.
- Achievements toast non-blocking and respects reduced-motion.
- Combo indicator shows current multiplier and time left.

## Dependencies
- Required: Zustand for global game store.
- Audio: use native HTML5 `<audio>`; no audio dependencies.

## Phases & Tasks

- [x] P0: Author this implementation plan (plan.md).
- [ ] P1: Create `src/game/` scaffold and `types.ts` (single source of truth).
- [ ] P1: Implement `state.ts` store with persistence and selectors.
- [ ] P1: Implement core click action, coin counter, simple HUD.
- [ ] P2: Implement `shop.ts` with items: unlock header pages, click power, auto-clicker levels, combo extender.
- [ ] P2: Add `ShopModal.tsx` with purchase flows and validation.
- [ ] P2: Lock header nav; wire unlock effects to nav components.
- [ ] P3: Add `achievements.ts` and `AchievementToast.tsx` with trigger hooks.
- [ ] P3: Add `combo.ts` with decay and multiplier UI.
- [ ] P3: Add `autoclicker.ts` with interval tick and scaling.
- [ ] P4: Integrate Konami Code to toggle game mode and mount HUD.
- [ ] P4: Add media player in `Layout.astro` with state resume on mount.
- [ ] P4: Persistence hardening: versioning + migrations in `storage.ts`.
- [ ] P5: QA (A11y, performance, reduced motion) and docs.

## Unlockable Header Pages (example)
- About (`/about`), Portfolio (`/portfolio`), Blog (`/blog`), Skills (`/skills`), Contact (`/contact`).
- Life (`/life`): automatically unlocks at player Level 10.
- Each page has a coin cost; purchasing flips unlock flag and enables link.


## Shop Items (initial set)
- Unlock Page: unlocks a specific header route.
- Click Power: +1 coin per click per level (scaling cost).
- Auto-Clicker: +X coins every Y seconds (scaling level).
- Combo Extender: increases combo window/decay for higher multipliers.


## Achievements (examples)
- First Click: Earn your first coin.
- Shopper: Make your first purchase.
- Link Liberator: Unlock 3 pages.
- Combo Master: Reach 5x combo.
- AFK Tycoon: Earn 1,000 coins from auto-clicker.
 - Life Unlocked: Reach player Level 10.

## Persistence Strategy
- Save on every material change (debounced), restore on load from `localStorage`.
- Progress persists across refreshes; after re-activating the cheat code, prior progress is restored (no fresh start).
- Keep `version` in save; migrate shape in `storage.ts` as needed.


## Media Player Strategy
- Mounted in `Layout.astro` with `client:load`.
- Use native HTML5 `<audio>` controls; no external audio dependencies.
- Save `isPlaying`, `trackId`, `currentTime` on `beforeunload`; restore on mount and attempt quick resume.

## Integration Points
- `src/components/KonamiCode.tsx`: after code success → `enableGameMode()`.
- `src/components/Header.astro` / `src/components/nav/MainNav.astro`: read `isPageUnlocked(slug)` to enable links or show disabled state.
- `src/layouts/Layout.astro`: include `<MediaPlayer ... client:load />` and `<GameHUD ... client:load />` when in game mode.
 - Player Level progression: at Level 10, auto-unlock `/life` route.

## Testing & QA
- Unit: shop pricing, achievements triggers, combo math, auto-clicker tick.
- E2E (playwright): nav locking/unlocking, Konami activation, media resume.
- A11y: keyboardable shop, toasts with ARIA live regions.


Owner: You (Ehsan)
Status: Planning complete; ready to implement P1.
