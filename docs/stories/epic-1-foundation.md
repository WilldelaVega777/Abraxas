# Epic 1: Extension Foundation & Shell
**Status:** Ready for Dev
**Priority:** Critical (P0)
**Phase:** 1

## Description
Establish the core VSCode Extension infrastructure that will host the Abraxas IDE. This includes the Extension Host logic, the React/Vite WebView integration, and the Docker Lifecycle Management system.

## User Stories Scope
1.  **Scaffold Extension:** Create the base `packages/vscode-extension` structure with TypeScript and `esbuild`.
2.  **Vite Integration:** Configure the build pipeline to bundle the React UI into the extension.
3.  **Docker Manager:** Implement the Node.js logic to check for Docker, and start/stop the `docker-compose` stack programmatically.
4.  **IPC Layer:** Build the type-safe communication bridge between the Extension Host and the WebView.
