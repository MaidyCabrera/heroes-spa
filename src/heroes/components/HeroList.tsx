import { useMemo } from 'react';
import { getHeroesByPublisher } from '../../heroes';
import { HeroCard } from './HeroCard';

// eslint-disable-next-line no-empty-pattern
export const HeroList = ({ publisher }) => {

    const heroes = useMemo(()=> getHeroesByPublisher(publisher), [publisher]) ;

    return (
            <div className='row rows-cols-1 row-cols-md'>
                    {
                        // heroes.map(hero => (
                        //     <li key={hero.id}>
                        //         {hero.superhero}
                        //     </li>
                        // ))
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
            </div>
        )
}
