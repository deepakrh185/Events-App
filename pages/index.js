import { getFeaturedEvents } from "../helper/helper-api";
import EventList from "../Components/EventList";

export default function Home({ events }) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  console.log(featuredEvents);
  return {
    props: {
      events: featuredEvents,
    },
  };
}
