import { CommandLineOutput } from '@presentation/components/CommandLineOutput';
import { ResponseLineOutput } from '@presentation/components/ResponseLineOutput';
import type { TerminalLine } from '@domain/value-objects/TerminalLine';

interface TerminalLineViewProps {
  line: TerminalLine;
}

export function TerminalLineView({ line }: TerminalLineViewProps) {
  return (
    <div className={`terminal-line ${line.isCommandLine() ? 'command' : 'response'}`}>
      {line.isCommandLine() ? (
        <CommandLineOutput content={line.getContent()} />
      ) : (
        <ResponseLineOutput content={line.getContent()} />
      )}
    </div>
  );
} 