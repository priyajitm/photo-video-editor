import styles from "@/styles/ArticlePreview.module.css";

const ArticlePreview = () => {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.sectionOne}>
                <p>Hello</p>
            </section>
            <section className={styles.sectionTwo}>
                <p>World</p>
            </section>
        </main>
    )
}

export default ArticlePreview