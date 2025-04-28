interface CommandLineOutputProps {
  content: string;
}

export function CommandLineOutput({ content }: CommandLineOutputProps) {
  return (
    <div className="terminal-prompt">
      <span className="terminal-user">guest</span>
      <span className="terminal-at">@</span>
      <span className="terminal-host">portfolio</span>
      <span className="terminal-colon">:</span>
      <span className="terminal-path">~</span>
      <span className="terminal-dollar">$</span>
      <span className="terminal-command">{content}</span>
    </div>
  );
} 