import EditPostClient from './EditPostClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ];
}

export default function EditPostPage({ params }: { params: { id: string } }) {
  return <EditPostClient postId={params.id} />;
}