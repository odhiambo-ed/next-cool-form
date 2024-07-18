export default function Home() {
  return (
    <main className="bg-green-300 flex min-h-screen flex-col items-center justify-between p-24">
      <form className="bg-white rounded-lg flex w-1/2">
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-latoBold">Let's get started 👏</h1>
          <p className="text-lg  text-gray-500">
            Join our E-learning platform today and unlock over 500+ courses and
            digital assets ready to download.
          </p>
          <div className="mt-6">
            <div className="pb-4">
              <label
                htmlFor="name"
                className="block text-sm pb-2 font-latoBold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                placeholder="Enter you name"
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor=""
                className="block font-latoBold text-sm pb-2"
              >
                Email
              </label>
              <input
                type="text"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
