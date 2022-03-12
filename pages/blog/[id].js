import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Post } from "../../components";
import { getAllPostIds, getOtherPosts, getPostData } from "../../lib/posts";

import image from "../../public/images/user.jpg";

import styles from "../../styles/Post.module.css";
import Link from "next/link";

export default function BlogPost({ post, posts }) {
	return (
		<>
			<Head>
				<title>{post.title}</title>
				<meta name="description" content={`${post.excerpt}`} />
			</Head>
			<div className={styles.postPage}>
				<div className="container">
					<div className={styles.postWrapper}>
						<Image
							src={image}
							alt={post.title}
							className={styles.postImg}
							layout="responsive"
						/>
						<div>
							<div className={styles.postHeader}>
								<h1 className={styles.title}>{post.title}</h1>
								<p className={styles.date}>{post.date}</p>
							</div>

							<p className={styles.ert}>
								{Math.floor(post.content.split(/\s+/).length / 200)} min read
							</p>
						</div>

						<div
							className={styles.postBody}
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>
					</div>
				</div>

				<div className={styles.relatedPosts}>
					<div className="container">
						<div className="section-header">
							<h3 className="heading">Related posts</h3>
							<Link href="/blog">
								<a>All posts <i className="fas fa-arrow-right-long"></i></a>
							</Link>
						</div>
						<div className={styles.otherPosts}>
							{posts.map((post) => (
								<Post key={post.id} post={post} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticPaths() {
	// Return a list of possible values for id
	const paths = getAllPostIds();

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	// Fetch specific post given the id in params
	const post = await getPostData(params.id);

	// Fetch other posts
	const posts = await getOtherPosts(params.id);
	return {
		props: { post, posts },
	};
}


