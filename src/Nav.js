import React from "react"
import styles from "./Nav.module.css"
class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <nav className={styles.topnav}>
                <ul className={styles.topnav_a}></ul>
                <li className={styles.topnav_a} key="0">Home</li>
                <li className={styles.topnav_a} key="1">Profile</li>
                <li className={styles.topnav_a}   key="2">Products</li>

            </nav>
        )

    }
}
export default Nav