import { ToolArgs } from "./types"

export function getSearchFilesDescription(args: ToolArgs): string {
	return `## search_files
Description: Search file contents recursively by file name or content patterns and returns snippets of matching content.

<search_files>
	<path>Directory path relative to workspace</path>
	<file_glob>file pattern here (optional)</file_glob>
	<content_regex>regex pattern here (optional)</content_regex>
</search_files>`
}
