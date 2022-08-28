import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "./UseEffectComponent.module.scss";

export default function UseEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let response = await axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((response) => {
        const res = response.data;
        setData(res);
      });
  }

  console.log("data", data);

  return (
    <div className={styles.useEffect}>
      <div className={styles.useEffect_left}>
        <div>
          <h3 className={styles.useEffect_left_heading}>useEffect</h3>
          <p>
            The useEffect Hook is used to handle the lifecycle method in a
            functional component.
          </p>

          <p>
            If you’re familiar with the React class lifecycle methods, you can
            think of the useEffect Hook as componentDidMount,
            componentDidUpdate, componentWillUnmount, and
            getDerivedStateFromProps combined as a beginner.
          </p>

          <p>
            It helps to write the logic in one place itself. But Dan Abramov has
            repeated many times that useEffect shouldn’t be introduced as an
            alternative to these lifecycle methods only.
          </p>

          <p>
            If you use useEffect with that mental model, you’ll get confused
            later. Instead, he suggests thinking of useEffect as a place where
            you run side-effects when a value in the dependency array changes.
          </p>

          <p>
            useEffect is a callback function where we can give the second
            element as dependency array, which can contain anything like
            variables, props, state, etc., on which we have to run
            componentDidUpdate.
          </p>
        </div>
      </div>

      <div className={styles.useEffect_right}>
        <div className={styles.card_main}>
          {data.length &&
            data.map((item) => (
              <div className={styles.card}>
                <div className={styles.card_heading}>{item.fullName}</div>
                <div className={styles.card_subheading}>{item.title}</div>
                <div>
                  <Image
                    src={item.imageUrl}
                    // alt="Vercel Logo"
                    width={250}
                    height={300}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
