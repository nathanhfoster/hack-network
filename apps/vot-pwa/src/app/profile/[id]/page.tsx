export default function PublicProfile({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Public Profile</h1>
      <p>User ID: {params.id}</p>
    </main>
  );
}
