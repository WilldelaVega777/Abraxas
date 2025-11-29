# Epic 4: Project Management & Agile Tools

**Description**: Scrum features: Sprints, Story Points, and Burndown Charts.

## Story 4.1: Sprint Management
**Description**: Introduce Sprints and Story Points to the task management system.

### Task 4.1.1: Sprints Schema
- **Description**: Create `sprints` table.
- **Fields**: `id`, `name`, `start_date`, `end_date`, `goal`, `status` (active/planned/completed).
- **Acceptance Criteria**:
  - Migration applied.

### Task 4.1.2: Task Enhancements
- **Description**: Add Agile fields to `archon_tasks`.
- **Fields**: `story_points` (integer), `sprint_id` (FK to sprints).
- **Acceptance Criteria**:
  - Tasks can be assigned points.
  - Tasks can be assigned to a sprint.

### Task 4.1.3: Sprint API
- **Description**: Implement API for managing sprints.
- **Acceptance Criteria**:
  - Can create/start/close sprints.
  - Can move tasks between sprints.

## Story 4.2: Burndown Charts
**Description**: Visualize sprint progress.

### Task 4.2.1: Snapshot Schema
- **Description**: Create `burndown_snapshots` table to track remaining points over time.
- **Fields**: `sprint_id`, `date`, `remaining_points`, `completed_points`.
- **Acceptance Criteria**:
  - Migration applied.

### Task 4.2.2: Snapshot Job
- **Description**: Implement a background job to record daily snapshots.
- **Acceptance Criteria**:
  - Job runs daily (or on task update).
  - Records accurate point totals.

### Task 4.2.3: Chart UI
- **Description**: Implement Burndown Chart in the Dashboard.
- **Acceptance Criteria**:
  - Displays Ideal vs Actual burndown.
  - Responsive and interactive.
