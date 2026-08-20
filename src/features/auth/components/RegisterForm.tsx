import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  CalendarDays,
  Eye,
  EyeOff,
  IdCard,
  LockKeyhole,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

type Sex = "" | "Male" | "Female";

export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [sex, setSex] = useState<Sex>("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [patientId, setPatientId] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required.";
    }

    if (!sex) {
      newErrors.sex = "Please select your sex.";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!patientId.trim()) {
      newErrors.patientId = "Patient ID is required.";
    }

    if (!consent) {
      newErrors.consent = "You must agree before registering.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    /*
      Backend integration comes later.

      For now, the form is validated only on the frontend.
      Once the ASP.NET registration endpoint is confirmed,
      we will create the proper RegisterRequest type and API call.
    */

    console.log({
      firstName,
      lastName,
      dateOfBirth,
      sex,
      email,
      phone,
      password,
      patientId,
    });
  }

	function clearFieldError(field: string) {
		setErrors((current) => ({
			...current,
			[field]: "",
		}));
	}

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* First name */}
      <FieldError message={errors.firstName}>
        <div className="relative">
          <UserRound
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="First Name"
            autoComplete="given-name"
            className={inputClass(Boolean(errors.firstName))}
          />
        </div>
      </FieldError>

      {/* Last name */}
      <FieldError message={errors.lastName}>
        <div className="relative mt-3">
          <UserRound
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
						type="text"
						value={lastName}
						onChange={(event) => {
							setLastName(event.target.value);

							if (errors.lastName) {
								clearFieldError("lastName");
							}
						}}
						placeholder="Last Name"
						autoComplete="family-name"
						className={inputClass(Boolean(errors.lastName))}
					/>
        </div>
      </FieldError>

      {/* Date of birth + sex */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <FieldError message={errors.dateOfBirth}>
          <div className="relative">
            <CalendarDays
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              strokeWidth={1.8}
            />

            <input
							type="date"
							value={dateOfBirth}
							onChange={(event) => {
								setDateOfBirth(event.target.value);

								if (errors.dateOfBirth) {
									clearFieldError("dateOfBirth");
								}
							}}
							className={`${inputClass(Boolean(errors.dateOfBirth))} pl-11`}
						/>
          </div>
        </FieldError>

        <FieldError message={errors.sex}>
          <select
						value={sex}
						onChange={(event) => {
							setSex(event.target.value as Sex);

							if (errors.sex) {
								clearFieldError("sex");
							}
						}}
						className={selectClass(Boolean(errors.sex))}
					>
						<option value="">Sex</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
        </FieldError>
      </div>

      {/* Email */}
      <FieldError message={errors.email}>
        <div className="relative mt-3">
          <Mail
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
						type="email"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value);

							if (errors.email) {
								clearFieldError("email");
							}
						}}
						placeholder="Email Address"
						autoComplete="email"
						className={inputClass(Boolean(errors.email))}
					/>
        </div>
      </FieldError>

      {/* Phone */}
      <FieldError message={errors.phone}>
        <div className="relative mt-3">
          <Phone
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
						type="tel"
						value={phone}
						onChange={(event) => {
							setPhone(event.target.value);

							if (errors.phone) {
								clearFieldError("phone");
							}
						}}
						placeholder="Phone Number"
						autoComplete="tel"
						className={inputClass(Boolean(errors.phone))}
					/>
        </div>
      </FieldError>

      {/* Password */}
      <FieldError message={errors.password}>
        <div className="relative mt-3">
          <LockKeyhole
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={(event) => {
							setPassword(event.target.value);

							if (errors.password) {
								clearFieldError("password");
							}
						}}
						placeholder="Password"
						autoComplete="new-password"
						className={`${inputClass(Boolean(errors.password))} pr-12`}
					/>

          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </FieldError>

      {/* Confirm password */}
      <FieldError message={errors.confirmPassword}>
        <div className="relative mt-3">
          <LockKeyhole
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            strokeWidth={1.8}
          />

          <input
						type={showConfirmPassword ? "text" : "password"}
						value={confirmPassword}
						onChange={(event) => {
							setConfirmPassword(event.target.value);

							if (errors.confirmPassword) {
								clearFieldError("confirmPassword");
							}
						}}
						placeholder="Confirm Password"
						autoComplete="new-password"
						className={`${inputClass(Boolean(errors.confirmPassword))} pr-12`}
					/>

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword((current) => !current)
            }
            aria-label={
              showConfirmPassword
                ? "Hide confirm password"
                : "Show confirm password"
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </FieldError>

      {/* Patient ID */}
      <FieldError message={errors.patientId}>
				<div className="mt-3">
						<div className="relative">
						<IdCard
								className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
								strokeWidth={1.8}
						/>

							<input
									type="text"
									value={patientId}
									onChange={(event) => {
									setPatientId(event.target.value);

									if (errors.patientId) {
											setErrors((current) => ({
											...current,
											patientId: "",
											}));
									}
									}}
									placeholder="Physical Patient ID"
									className={inputClass(Boolean(errors.patientId))}
							/>
						</div>

						<p className="mt-1 text-xs text-slate-400">
						Enter the Patient ID found on your laboratory receipt.
						</p>
				</div>
			</FieldError>

      {/* Consent */}
      <div className="mt-5">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
          <input
						type="checkbox"
						checked={consent}
						onChange={(event) => {
							setConsent(event.target.checked);

							if (errors.consent) {
								clearFieldError("consent");
							}
						}}
						className="
							mt-[2px]
							h-4
							w-4
							rounded
							border-slate-300
							text-[#178a42]
							focus:ring-[#178a42]
						"
					/>

          <span>
            I agree to the{" "}
            <a
              href="#"
              className="font-medium text-[#178a42] underline underline-offset-2"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-[#178a42] underline underline-offset-2"
            >
              Terms of Service
            </a>
            .
          </span>
        </label>

        {errors.consent && (
          <p className="mt-1 text-sm text-red-600">{errors.consent}</p>
        )}
      </div>

      {/* Register button */}
      <button
        type="submit"
        className="
          mt-6
          h-[55px]
          w-full
          rounded-[10px]
          bg-[#178a42]
          text-lg
          font-semibold
          text-white
          transition
          hover:bg-[#137438]
          focus:outline-none
          focus:ring-2
          focus:ring-[#178a42]
          focus:ring-offset-2
        "
      >
        Register
      </button>

      {/* Divider */}
      <div className="my-7 border-t border-slate-300" />

      {/* Login prompt */}
      <p className="text-center text-base text-slate-400">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-semibold text-[#178a42] underline underline-offset-2"
        >
          Log In
        </Link>
      </p>
    </form>
  );
}

function FieldError({
  children,
  message,
}: {
  children: React.ReactNode;
  message?: string;
}) {
  return (
    <div>
      {children}

      {message && (
        <p className="mt-1 text-sm text-red-600">
          {message}
        </p>
      )}
    </div>
  );
}


function inputClass(hasError: boolean) {
  return `
    h-[50px]
    w-full
    rounded-[11px]
    border
    bg-white
    pl-11
    pr-4
    text-[15px]
    text-slate-900
    outline-none
    transition
    placeholder:text-slate-400
    ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-slate-400 focus:border-[#178a42] focus:ring-1 focus:ring-[#178a42]"
    }
  `;
}

function selectClass(hasError: boolean) {
  return `
    h-[50px]
    w-full
    rounded-[11px]
    border
    bg-white
    px-4
    text-[15px]
    text-slate-700
    outline-none
    transition
    ${
      hasError
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-slate-400 focus:border-[#178a42] focus:ring-1 focus:ring-[#178a42]"
    }
  `;
}