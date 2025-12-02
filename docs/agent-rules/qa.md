# QA Rules for Developers

## CRITICAL PROTOCOL

1.  **Mandatory Checks**: Before committing ANY code, you MUST run the following validation steps:
    *   **Linting**: `npm run lint`
    *   **Type Checking**: `npm run check-types`
    *   **Build Verification**: `npm run build`
    *   **Runtime Checks**: Verify functionality using Playwright or Chrome DevTools.

2.  **Own Branch Policy**: Always work on your own feature branch. Do not push directly to main/master.

3.  **Test Coverage**: Ensure new features have corresponding tests (Unit or E2E).
