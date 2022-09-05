import React from "react"
import styles from "./Footer.module.css"
class Footer extends React.Component {

render() {
    return(
        <footer className={styles.footer}><strong>{this.props.authorName}</strong></footer>
    )

}
}
export default Footer