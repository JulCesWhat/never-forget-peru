import { TimelineItem } from './../components/TimelineItem';


function Home({ dateItems }) {
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
                            id={item.id}
                            more={item.more} />
                    })
                }
            </div>
        </section>
    );
}

export default Home;