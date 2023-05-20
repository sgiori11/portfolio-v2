import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import Project from './Project.js';
import jobBoardPic from '/public/jobboard.png'



export default function Projects() {
    return (
        <div className={styles.leftIndent}>
            <Link className={styles.projectLinkCont} href="">
                <h3 className={styles.projectTitle}>Startup Jobs Italia
                <span className={styles.svg}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.939347 20.9791C0.353557 21.5649 0.353551 22.5147 0.939334 23.1004C1.52512 23.6862 2.47486 23.6862 3.06065 23.1005L0.939347 20.9791ZM23.54 2.00001C23.54 1.17158 22.8685 0.500005 22.04 0.5L8.54005 0.499918C7.71163 0.499913 7.04005 1.17148 7.04004 1.99991C7.04004 2.82834 7.71161 3.49991 8.54003 3.49992L20.54 3.49999L20.54 15.5C20.54 16.3284 21.2115 17 22.0399 17C22.8684 17 23.54 16.3284 23.54 15.5L23.54 2.00001ZM3.06065 23.1005L23.1007 3.06067L20.9794 0.939333L0.939347 20.9791L3.06065 23.1005Z" fill="#6F00FD"/>
                    </svg>
                </span>
                </h3>
                <div className={styles.tags}>
                    <span>Next.js</span>
                    <span>React</span>
                    <span>Supabase</span>
                </div>
                <p className={styles.projectSummary}>
                    This is a free, niche job board for the Italian startup community. It was inspired by a similar website that I used in Norway to land my first tech gig in Oslo in 2019.
                </p>
                <div className={styles.projectImg}>
                    <Image
                        src={jobBoardPic}
                        alt="jobBoardPic"
                        width={250}
                    />
               </div>
            </Link>
        </div>
    )
}