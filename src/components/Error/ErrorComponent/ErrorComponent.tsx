
import Link from "next/link";
// import { ErrorComponentProps } from "../../utils/types/types";

export const ErrorComponent = (props: any) => {
    const { path, Message } = props.data;
    return (
        <div className='absolute z-50 top-2 left-0 right-0 w-max ml-auto mr-auto'>
            <div className="flex p-4 shadow-2xl  mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 mt-2 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <div className="sr-only">ERROR</div>
                <div>
                    <div className="font-medium">Ooops...!</div>
                    <div className="font-medium"> {Message} </div>
                </div>
            </div>
        </div>
    );
}