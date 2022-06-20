import React from 'react'
import { Link } from 'react-router-dom'
import { ConcertType } from '../../types/concerts'

type Props = {
    concert: ConcertType
}

export const ConcertBlock: React.FC<Props> = ({ concert }) => {
    return (
        <a href="./catalogOpen.html" key={concert.id}>
            <div className="elements">
                <Link to={`/catalog/${concert.id}`}>
                    <video width="253" preload="metadata">
                        <source src={`http://localhost:8080/${concert.filepath}`} />
                    </video>
                    <p className="elBigTxt">{concert.title}</p>
                </Link>
                <div className="elSmallTxtPar">
                    <span>{new Date(concert.createdAt).getFullYear()}</span>
                    <Link to={`/comedians/${concert.user.id}`}><span className='elSmallTxtPar'>{concert.user.name}</span></Link>
                </div>
            </div>
        </a>)
}
