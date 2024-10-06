import Link from 'next/link';
import servicesStyles from "./services.module.css"

export default function Services() {
    return (
      <div>
        <div className={servicesStyles.servicesBox}>
          <h1 className={servicesStyles.heading}>This is Services Page</h1>
          <Link href="/services/design" target="_blank" className={servicesStyles.button}>Design Services</Link>
        </div>
      </div>
    );
  }