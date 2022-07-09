import BackgroundLayout from "../components/backgroundlayout";

function Login(){
  return(
    <div>
      <BackgroundLayout>
        <div className="absolute p-20 bg-black bg-opacity-80 w-4/12 z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="font-semibold text-3xl mb-7">Sign In</h2>
          <div className="space-y-3">
            <input type="text" placeholder="Email or phone number" className="w-full py-3 rounded-lg px-3 bg-gray-700"/>
            <input type="text" placeholder="Password" className="w-full py-3 px-3 rounded-lg"/>
            <div className="bg-primary text-center text-lg font-medium rounded-lg py-3 cursor-pointer ">Sign In</div>
            <div>

            </div>
            <div>
              Need help?
            </div>
          </div>
        </div>
      </BackgroundLayout>
    </div>
  )
}

export default Login;