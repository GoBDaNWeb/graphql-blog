// * react/next
import React from 'react'

// * styles
import styles from './Layout.module.scss'

// * components
import Header from './Header'

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
        </div>
    )
}

export default Layout