import { CheckCheckIcon, Contact2Icon, LogInIcon, UploadIcon, CheckCircle, Edit3, TagIcon, MailIcon, PhoneCallIcon, LogOutIcon, CheckCircle2Icon, CalendarHeartIcon, Calendar, PhoneIcon } from 'lucide-react';



export const getActivityIcon = (type: any) => {
    switch (type) {
        case 'login':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3  ring-8 ring-green-200 dark:ring-gray-900 dark:bg-blue-900">
                    <LogInIcon className="w-4 h-4 text-green-500 dark:text-green-300" />
                </span>
            );
        case 'upload':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  ring-8 ring-blue-200 dark:ring-gray-900 dark:bg-blue-900">
                    <UploadIcon className="w-4 h-4 text-blue-500 dark:text-blue-300" />
                </span>
            );
        case 'update_contact':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -start-3  ring-8 ring-yellow-200 dark:ring-gray-900 dark:bg-blue-900">
                    <Contact2Icon className="w-4 h-4 text-yellow-500 dark:text-yellow-300" />
                </span>
            );
        case 'join_program':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3  ring-8 ring-green-200 dark:ring-gray-900 dark:bg-blue-900">
                    <CheckCheckIcon className="w-4 h-4 text-green-500 dark:text-green-300" />
                </span>
            );
        case 'complete_module':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  ring-8 ring-blue-200 dark:ring-gray-900 dark:bg-blue-900">
                    <CheckCircle className="w-4 h-4 text-blue-500 dark:text-blue-300" />
                </span>
            );
        case 'modify_settings':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3  ring-8 ring-red-200 dark:ring-gray-900 dark:bg-blue-900">
                    <Edit3 className="w-4 h-4 text-red-500 dark:text-red-300" />
                </span>
            );
        case 'add_tag':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  ring-8 ring-blue-200 dark:ring-gray-900 dark:bg-blue-900">
                    <TagIcon className="w-4 h-4 text-blue-500 dark:text-blue-300" />
                </span>
            );
        case 'send_email':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3  ring-8 ring-green-200 dark:ring-gray-900 dark:bg-blue-900">
                    <MailIcon className="w-4 h-4 text-green-500 dark:text-green-300" />
                </span>
            );
        case 'receive_call':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-lime-100 rounded-full -start-3  ring-8 ring-lime-200 dark:ring-gray-900 dark:bg-blue-900">
                    <PhoneCallIcon className="w-4 h-4 text-lime-500 dark:text-lime-300" />
                </span>
            );
        case 'logout':
            return (
                <span className="absolute flex items-center justify-center w-6 h-6 bg-red-100 rounded-full -start-3  ring-8 ring-red-200 dark:ring-gray-900 dark:bg-blue-900">
                    <LogOutIcon className="w-4 h-4 text-red-500 dark:text-red-300" />
                </span>
            );
        default:
            return null;
    }
};
