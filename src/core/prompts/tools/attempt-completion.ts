import { ToolArgs } from "./types"

export function getAttemptCompletionDescription(args?: ToolArgs): string {
	return `## attempt_completion
Description: After successful tool uses and your confirmation that task is complete, use this tool to present the result of your work to the user.

<attempt_completion>
<result>
The result of the task formulated in a way that is final and does not expect further input from the user. (required)
</result>
</attempt_completion>`
}
