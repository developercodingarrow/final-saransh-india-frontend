import React, { useEffect } from "react";
import styles from "./css/dekstopNavbar.module.css";
import Image from "next/image";
import logo from "../../public/web-static-images/saransh-realtors-logo.png";
import { dekstopNavBarTab } from "../../JsonData/PageLinks";
import Link from "next/link";
import { isAuth, logOut } from "../../Actions/authAction";
import { useRouter } from "next/router";
export default function DekstopNavbar() {
  const router = useRouter();
  const handelLogOut = () => {
    logOut();
    router.push("/");
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.logoBox}>
        <Image
          src={logo}
          width={500}
          height={500}
          className={styles.logoStyle}
        />
      </div>

      <div className={styles.pageTab_container}>
        {dekstopNavBarTab.map((el, i) => {
          return (
            <div className={styles.pageTabBox} key={i}>
              <Link href={`${el.hrfLink}`} className={styles.pageTabLink}>
                {el.name}
              </Link>
            </div>
          );
        })}

        {isAuth() && (
          <div className={styles.pageTabBox}>
            <div className={styles.pageTabLink} onClick={handelLogOut}>
              Log Out
            </div>
          </div>
        )}

        {!isAuth() && (
          <div className={styles.pageTabBox}>
            <Link href={`/userauth/login`} className={styles.pageTabLink}>
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
