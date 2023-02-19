import { TimelineItem } from './../components/TimelineItem';

function Home({ dateItems: dateItems = [] }) {
    return (
        <section className="timeline">
            <div className="container">
                {
                    dateItems.map((item, i) => {
                        return <TimelineItem
                            key={item.date}
                            direction={i % 2 === 0 ? 'right' : 'left'}
                            date={item.date}
                            content={item.content}
                            more={item.more} />
                    })
                }
            </div>
        </section>
    );
}

export default Home;