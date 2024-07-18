import formImage from '../public/dog.png'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-green-300 h-screen items-center flex justify-center">
      <form
        className="bg-white flex rounded-lg font-latoRegular"
      >
        <div className="flex-1 text-gray-700  p-20">
          <h1 className="text-3xl pb-2 font-latoBold">
            Lets get started 👋
          </h1>
          <p className="text-lg  text-gray-500">
            Join our E-learning platform today and unlock over 500+ courses
            and digital assets ready to download.
          </p>
          <div className="mt-6 ">
            <div className="pb-4">
              <label
                htmlFor="name"
                className="block font-latoBold text-sm pb-2"
              >
                Name
              </label>
              <p className="text-sm font-latoBold text-red-400 "></p>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="email"
                className="block font-latoBold text-sm pb-2"
              >
                Email
              </label>

              <p></p>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="country"
                className="block font-latoBold text-sm pb-2"
              >
                Country
              </label>
              <select
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                name="country"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="pb-4">
              <label
                htmlFor="terms"
                className="block font-latoBold text-sm pb-2"
              >
                Terms of service
              </label>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="terms"
                  value="checked"
                  className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                />
                <p className="text-sm font-latoBold text-gray-500">
                  I agree to the Terms and Service that my data will be taken
                  and sold.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today!
            </button>
          </div>
        </div>
        <div className="relative flex-1">
          <Image
            className="object-cover rounded-lg"
            fill
            priority
            src={formImage}
            alt="form-learn"
          />
        </div>
      </form>
    </main>
  );
}
