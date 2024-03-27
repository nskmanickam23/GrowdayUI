import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003',
});

export const fetchCustomers = async () => {
  try {
    const response = await instance.get('/customers');
    return response.data;
  } catch (error:any) {
    throw new Error('Error fetching customer data: ' + error.message);
  }
};

export const updateCustomer = async (customerId: number, updatedValues: Customer) => {
  try {
    const response = await instance.put(`/customers/${customerId}`, updatedValues);
    return response.data;
  } catch (error:any) {
    throw new Error('Error updating customer: ' + error.message);
  }
};

export const deleteCustomer = async (customerId: number) => {
  try {
    const response = await instance.delete(`/customers/${customerId}`);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error:any) {
    throw new Error('Error deleting customer: ' + error.message);
  }
};

export const addCustomer = async (newCustomer: any) => {
  try {
    const response = await instance.post('/customers', newCustomer);
    if (response.status === 201) {
      return true;
    }
    return false;
  } catch (error:any) {
    throw new Error('Error adding customer: ' + error.message);
  }
};


export interface Customer {
  id: number;
  customername: string;
  business: string;
  lastLogin: string;
  createdDate: string;
  totalLogins: number;
  createdBy: string;
  isSelf: boolean;
}