type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "Blade Boutique" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt={title}
      className={className}
      style={{ display: "block", mixBlendMode: "multiply" }}
    />
  );
}
