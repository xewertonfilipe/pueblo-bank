interface TemplateProps {
  title: string;
  children: React.ReactNode;
}

export function Template({ title, children }: TemplateProps) {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">{title}</h2>
          <div className="h-1 w-20 rounded bg-[#ed145c]"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
