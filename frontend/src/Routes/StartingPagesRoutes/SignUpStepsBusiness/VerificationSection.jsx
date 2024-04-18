import Button from "../../../Components/SmallComponents/Button";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {RegisterCustomerValidation} from "../../../axios/axiosUser.js";
import {CustomerRegistration} from "../../../models/customerRegistration.js";

const VerificationSection = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_repeat, setPassword_repeat] = useState('');

  const [code, setCode] = useState('');
  const [business_name, setBusiness_name] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zip, setZip] = useState('');
  const [website, setWebsite] = useState('');
  const [logo, setLogo] = useState('');


  // const [userData, setUserData] = useState({ email: registeredEmail, code: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const registeredEmail = localStorage.getItem("registered_email");
    setEmail(registeredEmail);
  }, []);

      const getSubmitData = async (e) => {
        e.preventDefault()
        setError('');

        // Check if passwords match
        if (password !== password_repeat) {
            setError('Passwords do not match.');
            return;
        }

        const userData = CustomerRegistration(email, code, business_name, country, city, street, zip, website, password, password_repeat, logo);
        try{
            setError('');
            // Registration
            await RegisterCustomerValidation(userData);
            navigate("/login")

        } catch(error) {
            setError('Failed to register. Please try again.');
        }
    }

  return (
    <div className="flex items-center justify-center">
      <div className="flex xl:items-center l:items-center justify-center sm:mt-p md:mt-50p">
        <div className="max-w-md w-full p-6 bg-base-100 rounded-lg shadow-lg mb-16">
          <h1 className="text-2xl font-semibold text-center mt-8 mb-6">Verification</h1>
          <form className="mb-10" onSubmit={getSubmitData}>
            <div className="grid sm:grid-cols-2 gap-y-7 gap-x-12">
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Verification Code</label>
                <input
                    name="verificationCode"
                    id="code"
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>


              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Adress</label>
                <input
                    name="adress"
                    id={"street"}
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">City</label>
                <input
                    name="city"
                    id={"city"}
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Postal Code</label>
                <input
                    name="postalcode"
                    id={"zip"}
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Country</label>
                <input
                    name="country"
                    id={"country"}
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Password</label>
                <input
                    name="password"
                    id={"password"}
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm text-accent-content">Confirm Password</label>
                <input
                    name="password_repeat"
                    id={"password_repeat"}
                    type={"password"}
                    value={password_repeat}
                    onChange={(e) => setPassword_repeat(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />

              </div>
              <div className="mb-0">
                <label className="block mb-2 text-sm text-accent-content">Business Name</label>
                <input
                    name="business_name"
                    id={"business_name"}
                    type="text"
                    value={business_name}
                    onChange={(e) => setBusiness_name(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                />
              </div>
              <div className="mb-0">
                <label className="block mb-2 text-sm text-accent-content">Website</label>
                <input
                    name="website"
                    id={"website"}
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-10">
                <label className="block mb-2 text-sm text-accent-content">Upload Logo</label>
                <input
                    name="logo"
                    id={"logo"}
                    type="file"
                    value={logo}
                    onChange={(e) => setLogo(e.target.value)}
                    className="file-input file-input-secondary text-sm px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"

                />
              </div>

            </div>
            <div className="mt-8 mb-6">
              <ul className="steps">
                <li className="step step-secondary"></li>
                <li className="step step-secondary"></li>
                <li className="step step-secondary"></li>
              </ul>
            </div>
            <Button> Continue </Button>
          </form>
          {error && <small>{String(error)}</small>}
        </div>
      </div>
    </div>
  );
};

export default VerificationSection;