// * react
import {useState, useEffect} from 'react'
import Link from 'next/link'
import {ICategory} from 'models/models'

// * services
import {getCategories} from 'services/categoryApi'

// * styles
import styles from './Categories.module.scss'

const Categories = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))
    }, [])

    return (
        <ul className={styles.categories}>
            {
                categories.map(category => (
                    <li className={styles.category} key={category.name}>
                        <Link href={`category/${category.slug}`}>
                            {category.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Categories