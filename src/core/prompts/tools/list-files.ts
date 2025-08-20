import { ToolArgs } from "./types"

export function getListFilesDescription(args: ToolArgs): string {
	return `## list_files
Description: List files and directories within the specified directory, returns a list of file paths.

<list_files>
	<path>Directory path relative to workspace (required)</path>
	<recursive>true or false (optional)</recursive>
</list_files>`
}
