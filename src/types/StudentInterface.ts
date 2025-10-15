interface StudentInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  group: string;
  isDeleted?: boolean;
};

export default StudentInterface;
