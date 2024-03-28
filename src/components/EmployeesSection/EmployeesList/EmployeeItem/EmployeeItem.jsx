import styles from './EmployeeItem.module.scss';

export const EmployeeItem = ({ user }) => {
  const { name, email, phone, position, photo } = user;
  return (
    <li className={styles.listItem}>
      <img
        src={photo}
        alt={name}
        className={styles.employeeImg}
      />
      <p className={styles.text}>{name}</p>
      <div className={styles.textWrapper}>
        <p className={styles.text}>{position}</p>

        <p className={styles.text}>{email}</p>

        <p className={styles.text}>{phone}</p>
      </div>
    </li>
  );
};
