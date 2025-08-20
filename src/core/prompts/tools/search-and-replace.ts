import { ToolArgs } from "./types"

export function getSearchAndReplaceDescription(args: ToolArgs): string {
	return `## search_and_replace
Description: Find and replace all occurences of a specific text string or regex pattern in a file.

Parameters:
- path (REQUIRED): relative path to file.
- search (REQUIRED): the text or rust regex pattern to search for.
- replace (REQUIRED): the text to replace matches with.
- use_regex (optional): true or false according to search pattern.
- ignore_case (optional): true or false.
- start_line (optional): starting line number (1-based) for restricted replacement.
- end_line (optional): ending line number (1-based) for restricted replacement.

Syntax:
<search_and_replace>
<path>src/module.index.tsx</path>
<search>The text or rust regex pattern to search for</search>
<replace>The text to replace matches with</replace>
<use_regex>true or false</use_regex>
<ignore_case>true or false</ignore_case>
<start_line>Start line</start_line>
<end_line>Ending line</end_line>
</search_and_replace>
`
}
