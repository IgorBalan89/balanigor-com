import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex-wrap justify-between items-center">
      <p className="text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Igor Balan. All rights reserved.
      </p>

      <a href="#hero">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
