import { FaLock } from "react-icons/fa";
import { Button } from "@mui/material";


const LoginCard = ({handleSumbit, handleChange,register, handleCard}) => {

 
  return (
    <div className="rounded-sm" >
      <div className="min-h-full flex items-center justify-center py-5 px-4 sm:px-6 lg:px-8 shadow-sm" >
        <div className="max-w-md w-80 space-y-8">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              {register}
            </h2>
          </div>
          <form className="space-y-6 "
            onSubmit={handleSumbit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="relative">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-5 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                  
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                
                  {register}
                
                
              </button>
              
            
            </div>
            <div className="flex justify-center">
              <Button variant="text" onClick={handleCard}>{ register === "Login" ? "Sign UP" : "Login"}</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
