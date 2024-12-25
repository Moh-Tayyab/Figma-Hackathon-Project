import Services from "@/components/Services";
import SubHero from "@/components/SubHero";

export default function CheckoutPage() {
 
  return (
    <>
     <SubHero  title = "CheckOut" home = "Home"/>
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl leading-6 font-poppins font-[600px] mb-12">Billing details</h2>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-2 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-6">
                     Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Country / Region
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="" > Sri Lanka</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ca">Canada</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="street"
                      className="block text-sm font-medium text-gray-700 mb-6">
                    Street address
                    </label>
                    <input
                      type="text"
                      id="street"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Town / City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Choose city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-6">
                     Province
                    </label>
                    <select
                      id="country"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
                      <option value="" >Western Province</option>
                      <option value="us">Eastern Province</option>
                      <option value="uk">Northern Province</option>
                      <option value="ca">Southtern Province</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  
                </div>
                <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-6">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>
                <div>
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium text-gray-700 mb-6">
                    
                  </label>
                  <input
                    type="text"
                    id="address2"
                    placeholder="Additional information"
                    className="w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
            </div>
            
          </div>
          {/*place order */}
          <div className="px-8 py-8 h-[700px]">
            <div className="flex-row flex justify-between">
              <div className="flex flex-col ">
                <h2 className="text-[24px] leading-6 text-black font-[500px]  mb-4">
                  Product
                </h2>
                <p className="text-[16px] leading-6 text-[#9F9F9F] font-[400px] mb-4">
                  Asgaard sofa <span className="text-black ml-2">x 1</span>
                </p>
                <p className="text-[16px] leading-6 text-black font-[400px] mb-4">
                  Subtotal{" "}
                </p>
                <p className="text-[16px] leading-6 text-black font-[400px] mb-4">
                  Total
                </p>
              </div>
              <div className="flex flex-col">
                <h2 className=" text-[24px] leading-6 text-black font-[500px] mb-4">
                  Subtotal
                </h2>
                <p className="text-[16px] leading-6 text-black font-[300px] mb-4">
                  Rs. 250,000.00
                </p>
                <p className="text-[16px] leading-6 text-black font-[300px] mb-4">
                  Rs. 250,000.00
                </p>
                <p className="text-xl font-semibold text-primary mb-4">
                  Rs. 250,000.00
                </p>
              </div>
            </div>

            <div className="mt-6  border-t pt-4">
              <div className="flex flex-col text-sm">
                <div className="flex-row flex gap-2">
                  <button className="w-4 h-4 bg-black rounded-full " />
                  <h2 className="font-[500px] text-black text-[16px] leading-6">
                    
                    Direct Bank Transfer
                  </h2>
                </div>
                <p className="text-[#9F9F9F] text-[16px] leading-6 font-[300px] pt-6">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex-row flex gap-2 pt-6">
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-black" />
                  <h2 className="font-[500px] text-[#9F9F9F] text-[16px] leading-6">
                    {" "}
                    Direct Bank Transfer
                  </h2>{" "}
                </div>
                <div className="flex-row flex gap-2 py-2">
                  <button className="w-4 h-4 border-black rounded-full border hover:bg-black" />
                  <h2 className="font-[500px] text-[#9F9F9F] text-[16px] leading-6">
                    {" "}
                    Cash On Delivery
                  </h2>{" "}
                </div>

                <p className="text-[16px] leading-6 font-[300px] py-6">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy.</span>
                </p>
              </div>
            </div>
            <div className="justify-center items-center text-center">
              <button className="mt-6 px-8 py-4  border border-black text-black rounded-xl shadow-sm text-[20px] leading-[30px] font- hover:scale-110 focus:outline-none">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 ">
      <Services /></div>
    </>
  );
}
