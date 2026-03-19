# Registration Page — Requirements

## 1. Required Fields

The following fields are **mandatory** and must be filled in before the form can be submitted:

- **First name** *(marked with \*)*
- **Last name** *(marked with \*)*
- **Email** *(marked with \*)*

All mandatory fields must be visually marked with an asterisk (`*`) next to the field label.

---

## 2. Field Validation Rules

### 2.1 First Name
- **Required:** Yes
- **Allowed characters:** Latin letters only (A–Z, a–z). No digits, spaces, or special characters.
- **Length:** Minimum 2 characters, maximum 20 characters.
- **Error behavior:** If the field contains non-Latin characters or does not meet the length requirement, a validation error popup must be displayed.

### 2.2 Last Name
- **Required:** Yes
- **Allowed characters:** Latin letters only (A–Z, a–z). No digits, spaces, or special characters.
- **Length:** Minimum 2 characters, maximum 20 characters.
- **Error behavior:** If the field contains non-Latin characters or does not meet the length requirement, a validation error popup must be displayed.

### 2.3 Email
- **Required:** Yes
- **Valid format:** Must be a valid `@gmail.com` email address (e.g. `user@gmail.com`).
- **Error behavior:** If the email does not match the required format, a validation error popup must be displayed.

### 2.4 Phone
- **Required:** No (optional field).
- **Allowed characters:** Digits only (0–9). No letters, spaces, dashes, or special characters.
- **Error behavior:** If the user fills in the phone field and it contains any non-digit characters, a validation error popup must be displayed.

### 2.5 Address
- **Required:** No (optional field).
- **No format restrictions.**

---

## 3. Form Submission

- The form must **not** be submitted if any required field is empty or any filled field fails validation.
- Upon successful validation of all fields, the user must be redirected to `/registration_result.html`.

---

## 4. Success Page (`/registration_result.html`)

After successful registration and redirect, the following texts must be displayed on the page:

1. **"Congratulations! You have successfully registered!"**
2. **"Check your email to get a temporary password"**

Both messages must be visible to the user without any additional actions (e.g. no scrolling required on a standard desktop screen).
