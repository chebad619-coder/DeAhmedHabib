export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string; // YYYY-MM-DD format
  gender: 'Male' | 'Female' | 'Other';
  contactNumber: string;
  email: string;
  address: string;
}