'use client'

import styles from './Student.module.scss';
import type StudentInterface from '@/types/StudentInterface';

interface Props {
  student: StudentInterface;
  onDelete: (id: number) => void;
}

const Student = ({ student, onDelete }: Props): React.ReactElement => {
  const onDeleteHandler = (): void => {
    onDelete(student.id);
  };

  return (
    <div>
    <div className={`${styles.Student} ${student.isDeleted ? styles['--isDeleted'] : '' }`}>
      {student.id}
      {' - '}
      {student.lastName}
      {' '}
      {student.firstName}
      {' '}
      {student.middleName}
      {' '}
      
    </div>
    <button onClick={onDeleteHandler}>Удалить</button>
    </div>
  );
};

export default Student;
