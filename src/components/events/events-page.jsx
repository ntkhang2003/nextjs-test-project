import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AllEvents = ({data}) => {
    return (
        <div className="events_page">
            {data.map((e) => (
                <Link className='card' key={e.id} href={`/events/${e.id}`} passHref>
                    <Image src={e.image} alt={e.title} width={400} height={500} /> 
                    <h2>{e.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents