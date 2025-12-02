# Development Workflow

## Standard Procedure for Feature Implementation

All developers (James, Keun) must strictly adhere to this workflow when implementing a User Story.

1.  **Read & Understand**:
    *   Read the User Story in Archon (or Jira if Archon is unavailable).
    *   Understand the "Technical Specifications" (PRP) and "Acceptance Criteria".

2.  **Branching**:
    *   Create a specific git branch for the feature or bug fix.
    *   Naming convention: `feature/ABX-{number}-{short-description}` or `fix/ABX-{number}-{short-description}`.
    *   Example: `git checkout -b feature/ABX-123-add-login-modal`

3.  **Implementation (SOLID/DRY/KISS)**:
    *   Write the code in the appropriate directories.
    *   **MANDATORY**: Adhere to SOLID principles.
    *   **MANDATORY**: Ensure robust error handling (no empty `catch` blocks).
    *   **MANDATORY**: Add JSDoc/TSDoc for all public interfaces.

4.  **Self-Correction**:
    *   Before running tests, review your own code.
    *   Ask: "Is this SOLID? Is it DRY? Is it Simple? Are errors handled?"

5.  **Testing (TDD/Hybrid)**:
    *   **Developer Responsibility**: Implement Unit Tests and Component Tests (Vitest/React Testing Library).
    *   **QA Responsibility**: Robert will handle complex Integration and E2E Tests (Playwright).

6.  **Local Verification**:
    *   Run the tests locally: `npm run test`
    *   Ensure all tests pass.

7.  **Linting**:
    *   Run lint check: `npm run lint`
    *   Fix any errors.

8.  **Type Checking**:
    *   Run type check: `npm run check-types`
    *   Fix any TypeScript errors.

9.  **Build Verification**:
    *   Run build: `npm run build`
    *   Ensure the project compiles without errors.

10. **Runtime Verification**:
    *   Use Playwright (if activated) or Chrome DevTools to verify the feature works as expected in the browser.

11. **Commit & Push (Conventional Commits)**:
    *   Only commit code that has passed ALL the above steps.
    *   **Format**: `feat(ABX-{number}): {description}` or `fix(ABX-{number}): {description}`.
    *   Example: `feat(ABX-123): add login modal component`
    *   Push to the remote branch.

## QA Handoff
Once the code is pushed, move the story status to "Ready for QA" (or equivalent) so Robert can begin his verification.
