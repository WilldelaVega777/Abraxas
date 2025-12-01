# Abraxas Architecture V2: Hybrid Extension Model

## 1. Architectural Overview

Abraxas adopts a **Hybrid Extension Architecture** to balance User Experience (UX), Development Velocity, and System Stability.

*   **Frontend (The "Face"):** A native VSCode Extension leveraging React (Vite) for a premium, responsive, and integrated UI.
*   **Backend (The "Muscle"):** A managed Docker Compose stack encapsulating the complex Python AI/ML environment, ensuring stability and reproducibility.

### High-Level Diagram

```mermaid
graph TD
    subgraph VSCode_IDE
        ExtensionHost[Extension Host (Node.js)]
        WebView[WebView UI (React/Vite)]
    end

    subgraph Docker_Runtime
        API[Archon Server (FastAPI)]
        MCP[MCP Server]
        Agents[Agents Service]
        DB[(Supabase/Postgres)]
    end

    WebView -- "HTTP / WebSockets" --> API
    ExtensionHost -- "Docker CLI Control" --> Docker_Runtime
    ExtensionHost -- "IPC (PostMessage)" --> WebView
```

## 2. Component Detail

### A. VSCode Extension (Frontend)
*   **Tech Stack:** TypeScript, React, Vite, TailwindCSS, Shadcn UI, Framer Motion.
*   **Responsibility:**
    *   Rendering the UI (Management Console & Sidebar).
    *   Handling IDE interactions (opening files, reading selection).
    *   Managing the Docker Lifecycle (Start/Stop/Check status).
*   **Design System ("Neon Hex"):**
    *   **Theme:** Deep Dark Mode.
    *   **Shape Language:** Hexagonal elements for Agents and Nodes.
    *   **Effects:** Subtle glows, glassmorphism, smooth transitions.

### B. Docker Backend (Core Logic)
*   **Tech Stack:** Python 3.12, FastAPI, PydanticAI, Crawl4AI, PostgreSQL (pgvector).
*   **Responsibility:**
    *   RAG Operations (Embeddings, Vector Search).
    *   Agent Orchestration (BMad Logic).
    *   Web Crawling.
    *   MCP Server hosting.
*   **Communication:**
    *   Exposes REST API on `localhost:8181`.
    *   Exposes WebSockets on `localhost:8181/socket.io`.

## 3. Communication Layer

### 1. Extension <-> Backend
*   **Protocol:** Standard HTTP REST & WebSockets.
*   **Transport:** Localhost networking (No Docker Bridge complexity required for host-to-container).
*   **Security:** API Key authentication (generated/managed by the extension).

### 2. Extension <-> WebView
*   **Protocol:** `vscode.postMessage` RPC.
*   **Use Case:** WebView requests IDE actions (e.g., "Open this file", "Get current selection").

## 4. Data Strategy

### Local-First (Free Tier)
*   **Primary Store:** PostgreSQL inside Docker (Volume mounted to user's project or global extension storage).
*   **Vector Store:** `pgvector` inside the same Postgres instance.

### Cloud Extension (Premium - Future)
*   **Switchable Adapter:** The backend can be configured to point to a remote Supabase instance instead of the local Docker container for team sync and cloud features.

## 5. Implementation Roadmap

### Phase 1: The Shell
1.  Scaffold a new VSCode Extension project structure within the monorepo.
2.  Migrate `apps/frontend` (Next.js) to `packages/ui-webview` (Vite).
3.  Implement the "Docker Manager" logic in the Extension Host to verify/start containers.

### Phase 2: The UI Overhaul
1.  Implement "Neon Hex" Design System.
2.  Replace standard Shadcn components with custom Hexagonal variants where appropriate.
3.  Build the Sidebar "Operations Center".

### Phase 3: The Integration
1.  Connect WebView to Localhost Backend.
2.  Implement Agent Chat interface in Sidebar.
3.  Test full E2E flow (Create Agent -> Run Task -> See Result).
