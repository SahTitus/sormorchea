import React, { useState } from "react";
import { Dash, Plus } from "react-bootstrap-icons";
import styles from "../styles/Accordion.module.css";

const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={styles.question} onClick={() => setExpanded(!expanded)}>
      <header  className={styles.haeder}>
        <p className={styles.title}>
          How much does the cashew cost per kg?
        </p>
        <button className={styles.btn} type="button" aria-label="expand" onClick={() => setExpanded(!expanded)}>
          {expanded ? <Dash /> : <Plus />}
        </button>
      </header>
      {expanded && (
        <p className={styles.answer}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus magni quia quasi temporibus molestias quas, ut consequatur eum, molestiae nobis fugit, natus perspiciatis? Soluta minus maiores vitae atque quo.
        </p>
      )}
    </article>
  );
};

export default Question;
