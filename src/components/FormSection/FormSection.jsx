import { FORM_SECTION_ID } from '../../constants';
import { SecondaryHeading } from '../SecondaryHeading/SecondaryHeading';
import { SignUpForm } from './SignUpForm/SignUpForm';
import styles from './FormSection.module.scss';
import { useState } from 'react';

export const FormSection = () => {
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  return (
    <section
      id={FORM_SECTION_ID}
      className={styles.formSection}
    >
      <SecondaryHeading
        title={
          isUserRegistered
            ? 'User successfully registered'
            : 'Working with POST request'
        }
      />
      <SignUpForm
        isUserRegistered={isUserRegistered}
        setIsUserRegistered={setIsUserRegistered}
      />
    </section>
  );
};
