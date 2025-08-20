export function getSwitchModeDescription(): string {
	return `## switch_mode
Description: Switch to a different mode needed to proceed. Requires user approval.

<switch_mode>
<mode_slug>Mode slug like "code", "ask", "architect" (required)</mode_slug>
<reason>The reason a mode switch is necessary (optional)</reason>
</switch_mode>
`
}
