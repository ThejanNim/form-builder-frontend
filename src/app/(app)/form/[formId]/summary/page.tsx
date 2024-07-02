interface WorkspaceProps {
  params: { formId: string };
}

export default function Page({ params }: Readonly<WorkspaceProps>) {
  return <div>{params.formId}</div>;
}
