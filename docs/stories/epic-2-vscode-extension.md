# Epic 2: VSCode Extension Integration

**Description**: Integration with VSCode/Antigravity via Webview and Side Panel.

## Story 2.1: Extension Shell
**Description**: Create the VSCode Extension host that will wrap the Abraxas application.

### Task 2.1.1: Initialize Extension
- **Description**: Initialize a new VSCode extension project in `packages/extension` (or root `extension` folder).
- **Acceptance Criteria**:
  - `package.json` defines necessary activation events and contributions.
  - Can build and run the "Hello World" extension in VSCode.

### Task 2.1.2: Webview Provider
- **Description**: Implement `MainViewProvider` to render the main Abraxas UI.
- **Acceptance Criteria**:
  - Command `abraxas.open` opens a full-screen Webview.
  - Webview loads the built React assets (or dev server URL).

### Task 2.1.3: Side Panel Provider
- **Description**: Implement `SidePanelViewProvider` for the VSCode Side Bar.
- **Acceptance Criteria**:
  - Abraxas icon appears in the Activity Bar.
  - Clicking it opens the Side Panel view.

## Story 2.2: UI Bridge
**Description**: Enable communication between the VSCode Extension (Node.js) and the React UI (Webview).

### Task 2.2.1: Message Passing
- **Description**: Implement a typed message passing layer.
- **Acceptance Criteria**:
  - Extension can send messages to UI (e.g., "File Opened").
  - UI can send messages to Extension (e.g., "Run Command").

### Task 2.2.2: Router Adaptation
- **Description**: Adapt the React Router to work within the Webview sandbox.
- **Acceptance Criteria**:
  - Navigation works correctly within the Webview.
  - Deep links from the Extension open the correct route in the UI.
