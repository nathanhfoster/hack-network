interface ResourceStore {
  route: string;
}

interface PageParams {
  url: {
    pathname: string;
    search: string;
  };
  resourceStore?: ResourceStore;
}

export default async function GuildCalendar({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { url , ...rest} = await params;
  console.log('URL:', rest);
  return (
    <main>
      <h1>Guild Calendar</h1>
    </main>
  );
}
