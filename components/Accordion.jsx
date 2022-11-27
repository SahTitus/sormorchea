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
        <div className={styles.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <Dash /> : <Plus />}
        </div>
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
