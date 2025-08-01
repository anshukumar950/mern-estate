import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
    } catch (error) {
      setLoading(false);
      setError(error, message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border border-slate-200 p-3 rounded-lg bg-white"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border border-slate-200 p-3 rounded-lg bg-white"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border border-slate-200 p-3 rounded-lg bg-white"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase cursor-pointer hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "loading..." : "sign up"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>{" "}
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="mt-5 text-red-500">{error}</p>}
    </div>
  );
}
