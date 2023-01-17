import Link from "next/link"
import Image from "next/image"

export const HomePage = ({data}) => {
    return (
        <div className="home_body">
            {data.map(e => (
                <Link className="card" key={e.id} href={`/events/${e.id}`} passHref>
                    <div className="image">
                        <Image width={450} height={350} alt={e.title} src={e.image} />
                    </div>
                    <div className="content">
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    ) 
}