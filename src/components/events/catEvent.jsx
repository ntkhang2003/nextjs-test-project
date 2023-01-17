import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CatEvent = ({data, pageName}) => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="cat_events">
            <h1>Event in {capitalizeFirstLetter(pageName)}</h1>
            <div className="content">
                {data.map(e => (
                    <Link className="card" key={e.id} href={`/events/${e.city}/${e.id}`} passHref>
                        <Image width={300} height={300} alt={e.title} src={e.image} />
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CatEvent