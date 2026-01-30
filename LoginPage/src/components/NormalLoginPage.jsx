import { useState } from "react"
import {
  FaUserAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa"

const NormalLoginPage = ({
  title = "Login",
  subtitle,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    email: [],
    password: [],
  })

  const [showPassword, setShowPassword] = useState(false)

  // 🔹 Validation rules
  const validateField = (name, value) => {
    let fieldErrors = []

    if (name === "email") {
      if (!value) {
        fieldErrors.push("Email cannot be blank")
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        fieldErrors.push("Invalid email address")
      }
    }

    if (name === "password") {
      if (!value) fieldErrors.push("Password cannot be blank")
      if (!/[A-Z]/.test(value))
        fieldErrors.push("At least one uppercase letter required")
      if (!/[a-z]/.test(value))
        fieldErrors.push("At least one lowercase letter required")
      if (!/\d/.test(value))
        fieldErrors.push("At least one number required")
      if (!/[@#$!%*?&]/.test(value))
        fieldErrors.push("At least one special character required")
      if (value.length < 8)
        fieldErrors.push("Minimum 8 characters required")
    }

    return fieldErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }))
  }

  const getBorderColor = (field) => {
    if (!formData[field]) return "border-gray-300"
    return errors[field].length === 0
      ? "border-green-500"
      : "border-red-500"
  }

  // ✅ ICONS ONLY FOR EMAIL
  const getIcon = (field) => {
    if (field !== "email") return null
    if (!formData[field]) return null

    return errors[field].length === 0 ? (
      <FaCheckCircle className="text-green-500" />
    ) : (
      <FaExclamationCircle className="text-red-500" />
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailErrors = validateField("email", formData.email)
    const passwordErrors = validateField("password", formData.password)

    setErrors({
      email: emailErrors,
      password: passwordErrors,
    })

    if (emailErrors.length === 0 && passwordErrors.length === 0) {
      onSubmit?.(formData)

      // ✅ Reset form
      setFormData({
        email: "",
        password: "",
      })

      setErrors({
        email: [],
        password: [],
      })

      setShowPassword(false)
    }
  }

  return (
    <>
      {/* Global CSS to hide browser's built-in password reveal icon */}
      <style>
        {`
          input[type="password"]::-ms-reveal,
          input[type="password"]::-ms-clear {
            display: none;
          }
          input[type="password"]::-webkit-credentials-auto-fill-button {
            visibility: hidden;
            position: absolute;
            right: 0;
          }
        `}
      </style>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center">{title}</h2>
        {subtitle && (
          <p className="text-center text-gray-500 mb-6">{subtitle}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <div className="relative">
              <FaUserAlt className="absolute top-3 left-3 text-gray-400" />

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full pl-10 pr-10 py-2 border rounded-md outline-none ${getBorderColor(
                  "email"
                )}`}
              />

              <div className="absolute right-3 top-3">
                {getIcon("email")}
              </div>
            </div>

            {errors.email.map((err, i) => (
              <p key={i} className="text-red-500 text-sm mt-1">
                {err}
              </p>
            ))}
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className={`w-full pl-10 pr-10 py-2 border rounded-md outline-none ${getBorderColor(
                  "password"
                )}`}
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {errors.password.map((err, i) => (
              <p key={i} className="text-red-500 text-sm mt-1">
                {err}
              </p>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default NormalLoginPage

