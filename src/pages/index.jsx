import React from "react";
import { Card, Link, Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <>
      <Card className={styles.card}>
        <h1>Alexs best site...</h1>
      </Card>
      <Card className={styles.card}>
        <Link href="/taskTracker">
          <Button variant="outlined">Task Tracker</Button>
        </Link>
      </Card>
    </>
  );
};

export default index;
