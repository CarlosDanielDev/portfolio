import React from 'react';

interface TerminalPromptProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export function TerminalPrompt({ 
  value, 
  onChange, 
  onKeyDown, 
  inputRef 
}: TerminalPromptProps) {
  return (
    <div className="terminal-line">
      <div className="terminal-prompt">
        <span className="terminal-user">guest</span>
        <span className="terminal-at">@</span>
        <span className="terminal-host">home</span>
        <span className="terminal-colon">:</span>
        <span className="terminal-path">~</span>
        <span className="terminal-dollar">$</span>
        <input
          ref={inputRef}
          type="text"
          className="terminal-input"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
} 