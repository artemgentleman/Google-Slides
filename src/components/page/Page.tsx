import styles from './Page.module.css'
import type { ReactNode } from "react";

export type PageProps = {
    children: ReactNode;
}

export const Page = ({ children }: PageProps) => {
    return <div className={styles.page}>{children}</div>;
}
