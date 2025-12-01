# Product Requirements Document (PRD) - Abraxas IDE
**Version:** 2.0 (The "Extension Pivot")
**Status:** Draft
**Last Updated:** 2025-11-30

## 1. Product Overview
**Abraxas IDE** is a native VSCode Extension that transforms the IDE into a fully Agentic Development Environment. It leverages the power of the Archon backend (via Docker) but presents it through a seamless, premium, and integrated interface.

**Core Value Proposition:**
"The power of an entire AI engineering team, living directly inside your VSCode sidebar, without the friction of external web apps."

## 2. Target Audience
*   **Senior Developers & Architects:** Who need powerful AI assistance but demand local privacy and deep IDE integration.
*   **AI Engineers:** Who need to orchestrate multiple agents (QA, Backend, Frontend) simultaneously.

## 3. User Personas
*   **The Architect:** Uses the "Management Console" (WebView) to design complex agent swarms and assign MCP tools.
*   **The Sprinter:** Uses the "Operations Center" (Sidebar) to chat with agents, run quick tasks, and monitor progress while coding.

## 4. Functional Requirements (MVP Scope)

### 4.1. The "Shell" (Extension Host)
*   **FR-01 Docker Management:** The extension MUST automatically detect, start, and stop the backend Docker containers.
*   **FR-02 Onboarding:** First-run experience must guide the user through Docker setup if missing.
*   **FR-03 Auth & Monetization:**
    *   Implement "Abraxas ID" (Login via GitHub/Google).
    *   Check for "Premium Subscription" status on startup.
    *   **Free Tier:** Unlimited Local Agents, Local SQLite/ChromaDB.
    *   **Premium Tier:** Cloud Sync, Team Sharing, Access to "Abraxas Cloud" RAG.

### 4.2. The "Operations Center" (Sidebar)
*   **FR-04 Agent Chat:** A chat interface in the sidebar to interact with active agents.
*   **FR-05 Session Tabs:** Ability to switch between different active agent sessions (e.g., "QA Bot", "Dev Bot").
*   **FR-06 Activity Stream:** Real-time log of what the agent is doing (using MCP tools).

### 4.3. The "Management Console" (Main WebView)
*   **FR-07 Agent Designer:** Visual interface to create/edit Agent personas (System Prompts).
*   **FR-08 MCP Orchestrator:** Drag-and-drop interface to assign MCP tools to agents.
*   **FR-09 Settings:** Configuration for LLM Providers (OpenAI, Anthropic, Ollama).

### 4.4. Design System ("Neon Hex")
*   **FR-10 Aesthetics:** Dark mode optimization (`#0a0a0a`), Hexagonal UI elements, Neon glow effects.
*   **FR-11 Responsiveness:** UI must adapt to different VSCode panel sizes.

## 5. Non-Functional Requirements
*   **NFR-01 Performance:** Sidebar chat must load in <200ms.
*   **NFR-02 Privacy:** By default, all code and vector embeddings stay LOCAL (Docker).
*   **NFR-03 Stability:** Agent crashes in the backend must not crash the VSCode window.

## 6. Roadmap & Phasing

### Phase 1: Foundation (Current Sprint)
*   Scaffold VSCode Extension.
*   Migrate UI to Vite.
*   Implement Docker Lifecycle Manager.
*   Basic Sidebar Chat (connecting to backend).

### Phase 2: Monetization & Polish
*   Implement Auth/Subscription check.
*   "Neon Hex" UI Polish.
*   Advanced Agent Configuration.

### Phase 3: Project Management (Post-MVP)
*   Scrum Board Integration.
*   Burndown Charts.
*   Team Sync.

## 7. Success Metrics
*   **Activation Rate:** % of users who successfully start the Docker backend.
*   **Retention:** % of users who use the extension >3 times a week.
*   **Conversion:** % of users upgrading to Premium.
