# Abraxas: IDE-Native Agentic Platform Vision

## 1. Executive Summary & Architectural Pivot
**Current State:** Archon functions as a Docker-based Web Application.
**Target State:** Abraxas will be re-architected as a **Native VSCode/Antigravity Extension**.

**Core Objective:** Eliminate the dependency on Docker containers for the user interface and core logic, running instead as a lightweight, integrated package/AddIn within the IDE. This ensures a seamless developer experience, overcoming the security and interaction limitations (clipboard, drag-and-drop) of the previous "Demiurge" WebView wrapper approach.

## 2. Dual-Interface Architecture

The extension will leverage two distinct UI surface areas within the IDE to optimize for different workflows:

### A. Central Editor Interface (The "Management Console")
*Accessed via:* Status Bar Button (Abraxas Logo) -> Opens as a main editor tab.
*Technology:* Full-featured React WebView running inside the editor pane.
*Purpose:* High-bandwidth configuration and management tasks.

**Key Capabilities:**
1.  **Natural Language Agent Creation:**
    *   Interface to describe agent persona and capabilities.
    *   LLM-driven generation of BMad configuration files (`.md` definitions and `.toml` configs).
    *   Visual validation of generated agent structures.
2.  **MCP Orchestration ("Composio-like"):**
    *   Visual interface to assign specific MCP servers and tools to specific Agents.
    *   Granular permission management for tools.
3.  **Agile Project Management:**
    *   Full Scrum board implementation.
    *   Sprint planning and management.
    *   Burndown charts and velocity tracking.
    *   Backlog management (Epics/Stories).

### B. Activity Bar Sidebar (The "Operations Center")
*Accessed via:* Activity Bar Icon (Left Panel) -> Opens a collapsible sidebar.
*Purpose:* Execution, monitoring, and quick interaction.

**Key Capabilities:**
1.  **Multi-Session Management:**
    *   Tabbed interface to manage multiple active agent sessions simultaneously.
    *   Each tab represents a completely isolated session.
2.  **Agent Interaction:**
    *   Chat interface to instruct specific agents.
    *   Quick access to common commands.
3.  **Real-Time Telemetry & Observability:**
    *   Live logs of agent actions and MCP tool calls.
    *   "Course Correction" controls to intervene or stop destructive actions in real-time.
    *   Success rate monitoring.

## 3. Technical Requirements

### Independence from Docker
*   The core logic must run within the Extension Host or spawned child processes managed by the extension.
*   MCP servers should be managed/spawned by the extension directly where possible, or connected to via standard protocols without requiring a user-managed Docker compose stack.

### Session Isolation
*   The "Tabs" in the sidebar must maintain isolated contexts (memory, tool access) for each running agent instance.
*   Custom MCP handling system (distinct from the host IDE's native MCP client if necessary) to allow agents to use tools without interfering with the user's main IDE context unless authorized.

## 4. Future Roadmap (Post-MVP)

### A. Edge Fine-Tuning (Google Colab Integration)
*   Live connection to Google Colab runtimes.
*   Fine-tuning of small, highly-quantized LLMs (3B-6B parameters) on specific tasks.
*   Deploying these "Micro-Agents" back to the local environment.

### B. Advanced Python Agent Framework
*   Integration with LangChain and LangGraph.
*   Support for Pydantic and Pylance for robust type validation.
*   Creation of more complex, graph-based agentic workflows.

### C. Framework Interoperability
*   **Current:** Full BMad compatibility.
*   **Future:** Integration with PRP Framework and OpenSpec for standardized agent definitions.

## 5. Immediate Action Plan
1.  **Architectural Review:** Analyze the feasibility of running the Archon/BMad backend logic within the VSCode Extension Host constraints.
2.  **Stack Definition:** Define the communication layer between the WebView (UI) and the Extension Host (Logic).
3.  **Backlog Refactoring:** Deprecate Docker-centric stories and create new Extension-centric Epics.
