const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl mb-4">
              East Africa<br /><span className="italic">Butterfly Archive</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Combining scientific research, specimen preservation, and public exhibition 
              to document how natural selection shapes butterfly biodiversity across East Africa.
            </p>
          </div>
          <div>
            <span className="archive-mono text-muted-foreground mb-4 block">Navigate</span>
            <nav className="space-y-2">
              {['Archive', 'Species', 'Zones', 'Research'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div>
            <span className="archive-mono text-muted-foreground mb-4 block">Data Sources</span>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Species data compiled from field research across Kenya, Uganda, Tanzania, Rwanda, Burundi, Ethiopia, and South Sudan.</p>
              <p className="text-xs mt-4">Photography credits: Jeff Pippen (Uganda field surveys), National Museums of Kenya.</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="archive-mono text-muted-foreground">© 2026 East Africa Butterfly Archive</span>
          <span className="archive-mono text-muted-foreground">Natural Selection in Color, Pattern, Shape & Form</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
