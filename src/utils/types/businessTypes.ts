import { CustomerType } from "./customerTypes";

export interface Business {
    _id: any;
    id: number;
    name: string;
    business_type: string;
    description: string;
    domain_url?: any;
    link: string;
    status: boolean;
    address: string;
}

export interface BusinessPageProps {
    businesses: Business[];
}