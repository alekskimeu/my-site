import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./AboutInfo.module.css";

const AboutInfo = () => {
	useEffect(() => {
		AOS.init();
	});

	return (
		<div
			className={styles.aboutInfo}
			data-aos="zoom-in"
			data-aos-duration="1000"
		>
			<p className={styles.description}>
				Hello! My name is <span>Alex Kimeu</span>. I&#39;m a{" "}
				<span>Software Developer</span> based in Nairobi, Kenya.
			</p>
			<p className={styles.description}>
				I have hands-on experience building mobile & web applications using
				modern technologies.
			</p>
			<p className={styles.description}>
				Apart from coding, I write about tech on{" "}
				<a
					href="https://medium.com/@alexkimeu0"
					target="_blank"
					rel="noreferrer"
					className={styles.link}
				>
					Medium
				</a>
				, play & watch football and occasionally play{" "}
				<a
					href="https://tryhackme.com/games/koth"
					target="_blank"
					rel="noreferrer"
					className={styles.link}
				>
					KoTH
				</a>{" "}
				on TryHackMe.
			</p>
			<br />
			<p className={styles.description}>Let&#39;s connect!</p>
		</div>
	);
};

export default AboutInfo;
