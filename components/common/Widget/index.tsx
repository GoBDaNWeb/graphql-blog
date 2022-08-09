// * styles
import styles from './Widget.module.scss'

// * components
import Categories from './Categories'

const Widget = () => {
    return (
        <div className={styles.widget}>
            <h3>Categories</h3>
            <Categories/>
        </div>
    )
}

export default Widget