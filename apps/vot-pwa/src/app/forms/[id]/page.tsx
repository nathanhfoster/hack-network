export default function FormSystem({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Form System</h1>
      <p>Form ID: {params.id}</p>
    </main>
  );
}
