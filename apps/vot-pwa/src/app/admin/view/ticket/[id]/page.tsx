export default function TicketDetails({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Ticket Details</h1>
      <p>Ticket ID: {params.id}</p>
    </main>
  );
}
