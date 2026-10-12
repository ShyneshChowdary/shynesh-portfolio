type SectionHeadingProps = {
  number: string;
  title: string;
};

const SectionHeading = ({ number, title }: SectionHeadingProps) => (
  <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-8">
    <span className="font-mono text-primary text-lg">{number}</span>
    {title}
    <span className="h-px bg-border flex-1 max-w-[200px]" />
  </h2>
);

export default SectionHeading;