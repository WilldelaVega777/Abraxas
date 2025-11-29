# Epic 6: UI/UX Modernization

**Description**: Enforcing UI Standards: Tailwind v4, Glassmorphism, and Accessibility.

## Story 6.1: Tailwind v4 & Theming
**Description**: Ensure the codebase adheres to Tailwind v4 standards and proper theming.

### Task 6.1.1: Config Verification
- **Description**: Verify `postcss.config.js` and CSS setup for Tailwind v4.
- **Acceptance Criteria**:
  - No dynamic class construction.
  - `@theme` used for variables.

### Task 6.1.2: Dark Mode Audit
- **Description**: Scan and fix missing dark mode variants.
- **Reference**: `PRPs/ai_docs/UI_STANDARDS.md`.
- **Acceptance Criteria**:
  - All colors have `dark:` counterparts.
  - No hardcoded white/black backgrounds without theme support.

## Story 6.2: Glassmorphism
**Description**: Standardize glassmorphism effects using the central `styles.ts`.

### Task 6.2.1: Refactor Primitives
- **Description**: Update `Card`, `Button`, and other primitives to import from `styles.ts`.
- **Acceptance Criteria**:
  - Components use `glassCard` and `glassmorphism` objects.
  - No duplicate style definitions.

### Task 6.2.2: Remove Hardcoded Styles
- **Description**: Replace ad-hoc `backdrop-blur` classes.
- **Acceptance Criteria**:
  - Grep for `backdrop-blur` returns only valid usages in `styles.ts` or primitives.
