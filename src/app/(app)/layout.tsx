import { SidePanel } from "@/components/organisms/SidePanel";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex">
      <SidePanel />
      {children}
    </div>
  );
}
