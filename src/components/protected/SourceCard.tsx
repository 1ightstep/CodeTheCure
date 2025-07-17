"use client";
import styles from "./SourceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

interface SourceCardProps {
  title: string;
  publicationDate: string;
  aiSummary: string;
  author: string;
  sourceLink: string;
  onSave: () => void;
  onTrash: () => void;
}

export default function SourceCard({
  title,
  publicationDate,
  aiSummary,
  author,
  sourceLink,
  onSave,
  onTrash,
}: SourceCardProps) {
  return (
    <div className={styles.sourceCard}>
      <div className={styles.functionContainer}>
        <button className={styles.trashButton} onClick={onTrash}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className={styles.addButton} onClick={onSave}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className={styles.sourceCardHeader}>
        <h3>{title}</h3>
        <h4>{publicationDate}</h4>
      </div>
      <div className={styles.sourceCardBody}>
        <p className={styles.aiSummary}>{aiSummary}</p>
      </div>
      <div className={styles.sourceCardFooter}>
        <h4>{author}</h4>
        <h4>{sourceLink}</h4>
      </div>
    </div>
  );
}
