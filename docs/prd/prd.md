# Product Requirements Document (PRD) - Abraxas

## 1. Introduction
**Abraxas** is an advanced, agentic development platform designed to integrate seamlessly into the developer's IDE (VSCode/Antigravity). It evolves the Archon codebase into a high-performance, model-agnostic, and context-aware system.

## 2. Goals & Objectives
1.  **Rebranding**: Complete transition from "Archon" to "Abraxas" identity.
2.  **Isolation**: Run parallel to Archon without port/container conflicts.
3.  **Universal AI**: Support 100+ LLMs via LiteLLM proxy.
4.  **IDE Integration**: Native VSCode/Antigravity extension experience.
5.  **Agentic Workflow**: Dedicated UI for creating and managing multi-agent systems.
6.  **Context Optimization**: Scoped MCPs to prevent context pollution.
7.  **Agile Management**: Integrated Scrum tools (Sprints, Burndown).

## 3. Functional Requirements

### 3.1 Core Platform
- **REQ-CORE-01**: The system MUST use `abraxas-` prefix for all Docker containers.
- **REQ-CORE-02**: The system MUST listen on a non-conflicting port range (Default: 9000-9100).
- **REQ-CORE-03**: The system MUST provide a LiteLLM proxy at `http://localhost:9000` compatible with OpenAI API.

### 3.2 IDE Extension (VSCode/Antigravity)
- **REQ-EXT-01**: The extension MUST render the Main UI within a VSCode Webview.
- **REQ-EXT-02**: The extension MUST provide a Side Panel View for quick actions (Prompting, Agent Selection).
- **REQ-EXT-03**: The extension MUST handle authentication transparently using the IDE's context where possible.

### 3.3 Agent Management
- **REQ-AGENT-01**: Users MUST be able to create new Agents with custom names, roles, and system prompts.
- **REQ-AGENT-02**: Users MUST be able to assign specific MCP tools to an Agent ("Scoping").
- **REQ-AGENT-03**: The system MUST enforce Tool Scopes at runtime, filtering available tools based on the active Agent.

### 3.4 Project Management
- **REQ-PM-01**: The system MUST support "Sprints" with Start/End dates.
- **REQ-PM-02**: Tasks MUST support "Story Points" (Fibonacci or Linear).
- **REQ-PM-03**: The UI MUST display a Burndown Chart for the active sprint.

## 4. Technical Constraints
- **Compatibility**: Must run on Docker Desktop (Mac/Windows/Linux).
- **Performance**: Webview load time < 200ms.
- **Security**: API keys for LiteLLM must be stored securely (env vars or encrypted volume).

## 5. User Stories (High Level)
- **US-01**: As a developer, I want to run Abraxas alongside Archon so I can migrate data without downtime.
- **US-02**: As an architect, I want to switch between GPT-4 and Claude 3.5 Sonnet instantly using LiteLLM to optimize costs.
- **US-03**: As a frontend dev, I want my "Frontend Agent" to only see UI-related tools so it doesn't get confused by backend database tools.
- **US-04**: As a scrum master, I want to see the sprint burndown chart to track our velocity.

## 6. Success Metrics
- **Context Efficiency**: Reduction in token usage per request due to Scoped MCPs (Target: -30%).
- **Developer Velocity**: Time to create a new Agent < 2 minutes.
- **System Stability**: Zero port conflicts with standard Archon installation.
