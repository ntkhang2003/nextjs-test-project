import SingleEvent from '../../../src/components/events/single-event'

const EventPage = ({data}) => {
    return (
        <SingleEvent data={data}/>
    )
}

export default EventPage

export async function getStaticPaths () {
    const {allEvents} = await import('/data/data.json')
    const allPaths = allEvents.map(e => {
        return {
            params: {
                cat: e.city,
                id: e.id
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps (context) {
    const id = context.params.id
    const {allEvents} = await import('/data/data.json')
    const data = allEvents.find(e => e.id === id)
    return {
        props: {
            data,
        }
    }
}