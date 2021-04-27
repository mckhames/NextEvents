import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/EventList';

function Homepage(props) {

    const featuredEvents = getFeaturedEvents();

    return(
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}

export default Homepage;