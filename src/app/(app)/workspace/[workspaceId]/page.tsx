import { Workspace } from "@/components/pages/Workspace";

interface WorkspaceProps {
  params: { workspaceId: string };
}

export default function Page({ params }: Readonly<WorkspaceProps>) {
  return <Workspace />;
}
