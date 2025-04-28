interface ResponseLineOutputProps {
  content: string;
}

export function ResponseLineOutput({ content }: ResponseLineOutputProps) {
  return <pre className="terminal-output">{content}</pre>;
} 