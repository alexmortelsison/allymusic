export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="absolute bottom-0 left-30 md:left-80 lg:left-165 xl:left-215 z-0 text-muted-foreground text-sm">
      &copy;{year} Ally Music. All rights reserved.
    </footer>
  );
}
