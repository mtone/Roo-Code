import { ToolArgs } from "./types"

// - List todos in the intended execution order.
// - Before updating, always confirm which todos have been completed since the last update.
// - You may update multiple statuses in a single update (e.g., mark the previous as completed and the next as in progress).
// - When a new actionable item is discovered during a long or complex task, add it to the todo list immediately.
// - Do not remove any unfinished todos unless explicitly instructed.
// - Always retain all unfinished tasks, updating their status as needed.
// - Only mark a task as completed when it is fully accomplished (no partials, no unresolved dependencies).
// - If a task is blocked, keep it as in_progress and add a new todo describing what needs to be resolved.
// - Remove tasks only if they are no longer relevant or if the user requests deletion.
// **When to Use:**
// - The task is complicated or involves multiple steps or requires ongoing tracking.
// - You need to update the status of several todos at once.
// - New actionable items are discovered during task execution.
// - The user requests a todo list or provides multiple tasks.
// - The task is complex and benefits from clear, stepwise progress tracking.

// **When NOT to Use:**
// - There is only a single, trivial task.
// - The task can be completed in one or two simple steps.
// - The request is purely conversational or informational.

// **Task Management Guidelines:**
// - Mark task as completed immediately after all work of the current task is done.
// - Start the next task by marking it as in_progress.
// - Add new todos as soon as they are identified.
// - Use clear, descriptive task names.

/**
 * Get the description for the update_todo_list tool.
 */
export function getUpdateTodoListDescription(args?: ToolArgs): string {
	return `## update_todo_list
Description: Dynamically set a TODO list with items and statuses to inform the user of the current progress of complex or multi-stage tasks.

Usage:

<update_todo_list>
<todos>
[x] Task description (x indicates completed, fully finished with no unresolved issues)
[-] Design architecture (- indicates in progress)
[ ] Implement core logic (empty indicates pending, to be started after updating the todo list)
[ ] Write tests
[ ] Update documentation
</todos>
</update_todo_list>
`
}
