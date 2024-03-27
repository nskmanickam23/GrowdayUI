import auth from "./auth-service";
import business from "./business-service"
import customers from "./customer-service"
import user from "./user-service"
import members from './member-service'

const services = {
  auth,
  business,
  customers,
  members,
  user
};

export default services;
