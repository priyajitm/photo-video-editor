import { motion } from "framer-motion";
import styles from "@/styles/Article.module.css";

interface ArticleProps {
  reference: (node?: Element | null) => void;
  inView: boolean;
}

const Article = ({ reference, inView }: ArticleProps) => {
  return (
    <motion.section
      className={styles.articleContainer}
      ref={reference}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        type: "tween",
      }}
    >
      <h1>Article Head</h1>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p className="ql-align-right">
        <strong>Second Title</strong>
      </p>
      <p className="ql-align-center">Description</p>
      <p>asdasd</p>
      <iframe
        className="ql-video"
        frameBorder="0"
        // allowfullscreen="true"
        src="https://www.youtube.com/embed/dZY3444O1Pk?showinfo=0"
      ></iframe>
      <h1>
        <br />
      </h1>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
      <p>
        <br />
      </p>
      <p>
        <br />
      </p>
      <p>
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article Description Article Description Article Description
        Article Description Article Description Article Description Article
        Description Article{" "}
        <a
          href="https://www.google.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Description
        </a>
      </p>
    </motion.section>
  );
};

export default Article;
